package qu4lizz.mybudget.server.utils;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import qu4lizz.mybudget.server.models.json.CurrencyExchangeRates;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class CurrencyExchangeRatesDeserializer extends JsonDeserializer<CurrencyExchangeRates> {

    @Override
    public CurrencyExchangeRates deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        ObjectMapper mapper = (ObjectMapper) p.getCodec();
        JsonNode rootNode = mapper.readTree(p);

        CurrencyExchangeRates rates = new CurrencyExchangeRates();
        rates.setDate(rootNode.get("date").asText());

        Map<String, Map<String, BigDecimal>> rateMap = new HashMap<>();

        Iterator<Map.Entry<String, JsonNode>> fields = rootNode.fields();
        while (fields.hasNext()) {
            Map.Entry<String, JsonNode> field = fields.next();
            String fieldName = field.getKey();

            if (!"date".equals(fieldName)) {
                Map<String, BigDecimal> currencyRates = new HashMap<>();
                JsonNode currencyNode = field.getValue();

                currencyNode.fields().forEachRemaining(entry -> {
                    currencyRates.put(entry.getKey(), entry.getValue().decimalValue());
                });

                rateMap.put(fieldName, currencyRates);
            }
        }

        rates.setRates(rateMap);
        return rates;
    }
}