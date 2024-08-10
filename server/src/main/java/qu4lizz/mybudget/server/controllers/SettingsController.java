package qu4lizz.mybudget.server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import qu4lizz.mybudget.server.services.SettingsService;

@RestController
@RequestMapping("/api/user")
public class SettingsController {
    private final SettingsService userService;

    public SettingsController(SettingsService userService) {
        this.userService = userService;
    }


}
