package qu4lizz.mybudget.server.services;

import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.repositories.TransactionRepository;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
}
