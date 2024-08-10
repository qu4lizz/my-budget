package qu4lizz.mybudget.server.controllers;

import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import qu4lizz.mybudget.server.models.entities.AccountEntity;
import qu4lizz.mybudget.server.models.requests.CreateNewAccountRequest;
import qu4lizz.mybudget.server.services.AccountService;

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
    public void create(@Valid @RequestBody CreateNewAccountRequest request) {
        accountService.create(request);
    }

}
