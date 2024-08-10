package qu4lizz.mybudget.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import qu4lizz.mybudget.server.models.entities.AccountEntity;

public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
}
