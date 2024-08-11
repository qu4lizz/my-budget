package qu4lizz.mybudget.server.services;

import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.entities.SettingsEntity;
import qu4lizz.mybudget.server.repositories.AccountRepository;
import qu4lizz.mybudget.server.repositories.SettingsRepository;
import qu4lizz.mybudget.server.repositories.TransactionRepository;

@Service
public class SettingsService {
    private final SettingsRepository settingsRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    private final Integer ID = 1;

    public SettingsService(SettingsRepository settingsRepository, AccountRepository accountRepository, TransactionRepository transactionRepository) {
        this.settingsRepository = settingsRepository;
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    public String getDefaultCurrency() {
        SettingsEntity entity = settingsRepository.findById(ID).orElse(null);

        assert entity != null;
        return entity.getDefaultCurrency();
    }

    public void setDefaultCurrency(String currency) {
        SettingsEntity entity = settingsRepository.findById(ID).orElse(null);
        assert entity != null;
        entity.setDefaultCurrency(currency);
        settingsRepository.save(entity);
    }

    public void deleteAllData() {
        transactionRepository.truncateTable();
        accountRepository.truncateTable();
    }
}
