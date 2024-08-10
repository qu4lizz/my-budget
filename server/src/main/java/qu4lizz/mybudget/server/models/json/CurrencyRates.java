package qu4lizz.mybudget.server.models.json;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Map;

@Data
public class CurrencyRates {
    private Map<String, BigDecimal> rates;
}
