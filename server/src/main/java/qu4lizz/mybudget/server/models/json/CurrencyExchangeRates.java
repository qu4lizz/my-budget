package qu4lizz.mybudget.server.models.json;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import qu4lizz.mybudget.server.utils.CurrencyExchangeRatesDeserializer;

import java.math.BigDecimal;
import java.util.Map;

@Data
@JsonDeserialize(using = CurrencyExchangeRatesDeserializer.class)
public class CurrencyExchangeRates {
    private String date;
    private Map<String, Map<String, BigDecimal>> rates;
}
