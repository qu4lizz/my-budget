package qu4lizz.mybudget.server.controllers;

import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import qu4lizz.mybudget.server.models.entities.AccountEntity;
import qu4lizz.mybudget.server.models.requests.CreateAccountRequest;
import qu4lizz.mybudget.server.models.responses.BalanceResponse;
import qu4lizz.mybudget.server.services.AccountService;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public Page<AccountEntity> getAccounts(Pageable pageable) {
        return accountService.getAccounts(pageable);
    }

    @PostMapping
    public void create(@Valid @RequestBody CreateAccountRequest request) {
        accountService.create(request);
    }

    @GetMapping("/available-balance")
    public BalanceResponse getAvailableAccumulatedBalance() {
        BigDecimal balance = accountService.getAvailableAccumulatedBalance();
        return new BalanceResponse(balance);
    }
}
