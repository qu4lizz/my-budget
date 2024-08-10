package qu4lizz.mybudget.server.controllers;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import qu4lizz.mybudget.server.models.requests.CreateNewAccountRequest;
import qu4lizz.mybudget.server.services.AccountService;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public void create(@Valid @RequestBody CreateNewAccountRequest request) {
        accountService.create(request);
    }
}
