package qu4lizz.mybudget.server.models.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
@Table(name = "transaction", schema = "public", catalog = "my-budget")
public class TransactionEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "id_account")
    private Integer idAccount;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "amount")
    private String amount;
    @Basic
    @Column(name = "currency")
    private String currency;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TransactionEntity that = (TransactionEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
