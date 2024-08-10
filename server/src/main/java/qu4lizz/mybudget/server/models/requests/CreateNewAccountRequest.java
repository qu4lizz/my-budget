package qu4lizz.mybudget.server.models.requests;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

@Data
public class CreateNewAccountRequest {
    @Size(max = 40, message = "Name string too long")
    private String name;
    @NotNull(message = "Balance is required")
    private BigDecimal balance;
    @Size(max = 15, message = "Currency string too long")
    private String currency;
}
