package qu4lizz.mybudget.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import qu4lizz.mybudget.server.models.entities.SettingsEntity;

public interface SettingsRepository extends JpaRepository<SettingsEntity, Integer> {

}
