package qu4lizz.mybudget.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import qu4lizz.mybudget.server.models.entities.AccountEntity;

public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
    @Modifying
    @Transactional
    @Query(value = "TRUNCATE TABLE account CASCADE", nativeQuery = true)
    void truncateTable();
}
