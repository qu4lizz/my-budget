package qu4lizz.mybudget.server.services;

import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.entities.SettingsEntity;
import qu4lizz.mybudget.server.repositories.SettingsRepository;

@Service
public class SettingsService {
    private final SettingsRepository settingsRepository;

    public SettingsService(SettingsRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    public String getDefaultCurrency() {
        SettingsEntity entity = settingsRepository.findById(0).orElse(null);

        assert entity != null;
        return entity.getDefaultCurrency();
    }
}
