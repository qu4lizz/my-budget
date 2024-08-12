package qu4lizz.mybudget.server.models.json;

import com.fasterxml.jackson.annotation.JsonAnySetter;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class CurrencyRates {
    private Map<String, String> currencies = new HashMap<>();

    @JsonAnySetter
    public void addCurrency(String key, String value) {
        currencies.put(key, value);
    }
}