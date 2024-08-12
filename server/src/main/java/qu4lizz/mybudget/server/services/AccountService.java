package qu4lizz.mybudget.server.services;

import org.apache.coyote.BadRequestException;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.entities.AccountEntity;
import qu4lizz.mybudget.server.models.json.CurrencyExchangeRates;
import qu4lizz.mybudget.server.models.requests.CreateAccountRequest;
import qu4lizz.mybudget.server.repositories.AccountRepository;

import java.math.BigDecimal;
import java.util.List;

@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final SettingsService settingsService;
    private final CurrencyService currencyService;
    private final ModelMapper modelMapper;

    public AccountService(AccountRepository accountRepository, SettingsService settingsService, CurrencyService currencyService, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.settingsService = settingsService;
        this.currencyService = currencyService;
        this.modelMapper = modelMapper;
    }

    public void create(CreateAccountRequest request) throws BadRequestException {
        if (currencyService.isValidCurrency(request.getCurrency())) {
            AccountEntity entity = modelMapper.map(request, AccountEntity.class);
            accountRepository.save(entity);
        }
        else throw new BadRequestException("Invalid currency");
    }

    public Page<AccountEntity> getAccounts(Pageable pageable) {
        return accountRepository.findAll(pageable);
    }

    public BigDecimal getAvailableAccumulatedBalance() {
        List<AccountEntity> accounts = accountRepository.findAll();

        BigDecimal accumulatedBalance = BigDecimal.ZERO;

        if (!accounts.isEmpty()) {
            String defaultCurrency = settingsService.getDefaultCurrency();

            for(var account : accounts) {
                if (account.getCurrency().equals(defaultCurrency)) {
                    accumulatedBalance = accumulatedBalance.add(account.getBalance());
                } else {
                    BigDecimal exchangedAmount = currencyService.getExchangedAmount(account.getCurrency(), defaultCurrency, account.getBalance());

                    accumulatedBalance = accumulatedBalance.add(exchangedAmount);
                }
            }
        }
        return accumulatedBalance;
    }

    public List<AccountEntity> getAllAccounts() {
        return accountRepository.findAll();
    }
}
