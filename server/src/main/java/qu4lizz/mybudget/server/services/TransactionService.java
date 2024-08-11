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

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final AccountRepository accountRepository;
    private final ModelMapper modelMapper;

    public TransactionService(TransactionRepository transactionRepository, AccountRepository accountRepository, ModelMapper modelMapper) {
        this.transactionRepository = transactionRepository;
        this.accountRepository = accountRepository;
        this.modelMapper = modelMapper;
    }

    public Page<TransactionEntity> getTransactions(Pageable pageable) {
        return transactionRepository.findAll(pageable);
    }

    public Page<TransactionEntity> getTransactionsByAccountId(Integer id, Pageable pageable) {
        return transactionRepository.findAllByAccount_Id(id, pageable);
    }

    public void createTransaction(CreateTransactionRequest request) throws BadRequestException {
        AccountEntity account = accountRepository.findById(request.getIdAccount()).orElseThrow(() -> new BadRequestException("Invalid account"));

        if (account.getBalance().compareTo(request.getAmount()) < 0) {
            throw new BadRequestException("Insufficient balance");
        }

        TransactionEntity transaction = modelMapper.map(request, TransactionEntity.class);
        transactionRepository.save(transaction);

        account.setBalance(account.getBalance().add(request.getAmount()));
        accountRepository.save(account);
    }
}
