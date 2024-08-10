package qu4lizz.mybudget.server.models.requests;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreateTransactionRequest {
    @NotNull(message = "Description is required")
    private String description;
    @NotNull(message = "Amount is required")
    private BigDecimal amount;
    @Size(min = 1, max = 15)
    private String currency;
    @NotNull
    private Integer idAccount;
}
