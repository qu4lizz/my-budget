package qu4lizz.mybudget.server.models.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "settings", schema = "public")
public class SettingsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    @Column(name = "default_currency", nullable = false, length = 15)
    private String defaultCurrency;
    @Column(name = "migrated", nullable = false)
    private Boolean migrated;
}
