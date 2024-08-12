package qu4lizz.mybudget.server.services;

import org.apache.coyote.BadRequestException;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.entities.AccountEntity;
import qu4lizz.mybudget.server.models.entities.TransactionEntity;
import qu4lizz.mybudget.server.models.requests.CreateTransactionRequest;
import qu4lizz.mybudget.server.repositories.AccountRepository;
import qu4lizz.mybudget.server.repositories.TransactionRepository;

import java.math.BigDecimal;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final AccountRepository accountRepository;
    private final CurrencyService currencyService;
    private final ModelMapper modelMapper;

    public TransactionService(TransactionRepository transactionRepository, AccountRepository accountRepository, CurrencyService currencyService, ModelMapper modelMapper) {
        this.transactionRepository = transactionRepository;
        this.accountRepository = accountRepository;
        this.currencyService = currencyService;
        this.modelMapper = modelMapper;
    }

    public Page<TransactionEntity> getTransactions(Pageable pageable) {
        return transactionRepository.findAll(pageable);
    }

    public Page<TransactionEntity> getTransactionsByAccountId(Integer id, Pageable pageable) {
        return transactionRepository.findAllByAccount_Id(id, pageable);
    }

    public void createTransaction(CreateTransactionRequest request) throws BadRequestException {
        if (currencyService.isValidCurrency(request.getCurrency())) {
            AccountEntity account = accountRepository.findById(request.getIdAccount()).orElseThrow(() -> new BadRequestException("Invalid account"));

            BigDecimal exchangedAmount = currencyService.getExchangedAmount(request.getCurrency(), account.getCurrency(), request.getAmount());

            BigDecimal newBalance = account.getBalance().add(exchangedAmount);

            if (newBalance.compareTo(BigDecimal.ZERO) < 0) {
                throw new BadRequestException("Insufficient balance");
            }

            TransactionEntity transaction = new TransactionEntity();
            transaction.setDescription(request.getDescription());
            transaction.setAmount(request.getAmount());
            transaction.setCurrency(request.getCurrency());
            transaction.setAccount(account);
            transactionRepository.save(transaction);

            account.setBalance(account.getBalance().add(exchangedAmount));
            accountRepository.save(account);
        }
        else throw new BadRequestException("Invalid currency");
    }
}
