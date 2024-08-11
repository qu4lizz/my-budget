package qu4lizz.mybudget.server.services;

import jakarta.xml.bind.JAXBException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.entities.AccountEntity;
import qu4lizz.mybudget.server.models.entities.TransactionEntity;
import qu4lizz.mybudget.server.models.xml.*;
import qu4lizz.mybudget.server.repositories.AccountRepository;
import qu4lizz.mybudget.server.repositories.TransactionRepository;

@Service
public class MigrationService {
    @Value("${old.database.path}")
    private String oldDatabasePath;

    private final SettingsService settingsService;
    private final XMLService xmlService;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    public MigrationService(SettingsService settingsService, XMLService xmlService, AccountRepository accountRepository, TransactionRepository transactionRepository) {
        this.settingsService = settingsService;
        this.xmlService = xmlService;
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void migrateDatabase() {
        if (settingsService.shouldMigrate()) {
            try {
                Accounts accounts = xmlService.parseXMLfromFile(oldDatabasePath);

                for (var account : accounts.getAccounts()) {
                    AccountEntity accountEntity = new AccountEntity(account.getName(), account.getBalance(), account.getCurrency());

                    AccountEntity storedAccountEntity = accountRepository.save(accountEntity);

                    if (account.getTransactions() != null) {
                        for(Transaction transaction : account.getTransactions().getTransactions()) {
                            TransactionEntity transactionEntity =
                                    new TransactionEntity(transaction.getDescription(),
                                            transaction.getAmount().getValue(),
                                            transaction.getAmount().getCurrency().toLowerCase(),
                                            storedAccountEntity
                                    );

                            transactionRepository.save(transactionEntity);
                        }
                    }
                }

                settingsService.setMigrationTrue();
            } catch (JAXBException e) {
                System.out.println("Could not parse old database");
                throw new RuntimeException(e);
            }
        }
    }
}
