package qu4lizz.mybudget.server.models.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class BalanceResponse {
    private BigDecimal availableBalance;
}
