package qu4lizz.mybudget.server.controllers;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import qu4lizz.mybudget.server.models.dto.DefaultCurrency;
import qu4lizz.mybudget.server.services.SettingsService;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {
    private final SettingsService settingsService;

    public SettingsController(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    @PutMapping("/default-currency")
    public void setDefaultCurrency(@Valid @RequestBody DefaultCurrency request) {
        // TODO: check if valid
        settingsService.setDefaultCurrency(request.getDefaultCurrency());
    }

    @GetMapping("/default-currency")
    public DefaultCurrency getDefaultCurrency() {
        String defaultCurrency = settingsService.getDefaultCurrency();

        return new DefaultCurrency(defaultCurrency);
    }

    @DeleteMapping("/delete-all-data")
    public void deleteAllData() {
        settingsService.deleteAllData();
    }
}
