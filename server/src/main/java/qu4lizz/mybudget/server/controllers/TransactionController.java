package qu4lizz.mybudget.server.controllers;

import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import qu4lizz.mybudget.server.models.entities.TransactionEntity;
import qu4lizz.mybudget.server.models.requests.CreateTransactionRequest;
import qu4lizz.mybudget.server.services.TransactionService;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public Page<TransactionEntity> getTransactions(Pageable pageable) {
        return transactionService.getTransactions(pageable);
    }

    @GetMapping("/account/{id}")
    public Page<TransactionEntity> getTransactionsByAccountId(@PathVariable Integer id, Pageable pageable) {
        return transactionService.getTransactionsByAccountId(id, pageable);
    }

    @PostMapping
    public void createTransaction(@Valid @RequestBody CreateTransactionRequest request) throws BadRequestException {
        transactionService.createTransaction(request);
    }
}
