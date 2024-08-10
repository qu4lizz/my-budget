package qu4lizz.mybudget.server.models.json;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Map;

@Data
public class CurrencyExchangeRates {
    private String date;
    private Map<String, BigDecimal> currencyRates;
}
