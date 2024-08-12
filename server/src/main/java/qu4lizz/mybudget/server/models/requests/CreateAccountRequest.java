package qu4lizz.mybudget.server.models.requests;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

@Data
public class CreateAccountRequest {
    @NotNull
    @Size(max = 40, message = "Name is too long")
    private String name;
    @NotNull(message = "Balance is required")
    private BigDecimal balance;
    @NotNull
    @Size(max = 15, message = "Currency is too long")
    private String currency;
}
