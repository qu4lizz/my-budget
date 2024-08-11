package qu4lizz.mybudget.server.models.dto;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DefaultCurrency {
    @Size(min = 1, max = 15)
    private String defaultCurrency;
}
