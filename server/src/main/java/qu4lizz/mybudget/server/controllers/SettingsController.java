package qu4lizz.mybudget.server.controllers;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import qu4lizz.mybudget.server.models.dto.DefaultCurrency;
import qu4lizz.mybudget.server.services.SettingsService;

@RestController
@RequestMapping("/api/user")
public class SettingsController {
    private final SettingsService settingsService;

    public SettingsController(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    public void setDefaultCurrency(@Valid @RequestBody DefaultCurrency request) {
        // TODO: check if valid
        settingsService.setDefaultCurrency(request.getDefaultCurrency());
    }
}
