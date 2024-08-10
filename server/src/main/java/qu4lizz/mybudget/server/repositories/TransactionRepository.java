package qu4lizz.mybudget.server.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import qu4lizz.mybudget.server.models.entities.TransactionEntity;

public interface TransactionRepository extends JpaRepository<TransactionEntity, Integer> {
    Page<TransactionEntity> findAllByIdAccount(Integer idAccount, Pageable pageable);
}
