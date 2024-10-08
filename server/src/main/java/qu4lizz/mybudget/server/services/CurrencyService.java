package qu4lizz.mybudget.server.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import qu4lizz.mybudget.server.models.json.CurrencyExchangeRates;
import qu4lizz.mybudget.server.models.json.CurrencyRates;

import java.math.BigDecimal;

@Service
public class CurrencyService {
    @Value("${url.exchange}")
    private String exchangeURL;
    @Value("${url.currencies}")
    private String currenciesURL;

    private final RestTemplate restTemplate;

    public CurrencyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public CurrencyExchangeRates getCurrencyRates(String currency) {
        String url = exchangeURL.replace("<CURRENCY>", currency);

        return restTemplate.getForObject(url, CurrencyExchangeRates.class);
    }

    public Boolean isValidCurrency(String currency) {
        CurrencyRates rates = restTemplate.getForObject(currenciesURL, CurrencyRates.class);

        return rates != null && rates.getCurrencies().containsKey(currency);
    }

    public BigDecimal getExchangedAmount(String fromCurrency, String toCurrency, BigDecimal amount) {
        CurrencyExchangeRates currencyExchangeRates = getCurrencyRates(fromCurrency);

        BigDecimal exchangeRate = currencyExchangeRates.getRates().get(fromCurrency).get(toCurrency);

        return amount.multiply(exchangeRate);
    }
}
