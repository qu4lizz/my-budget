package qu4lizz.mybudget.server.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import qu4lizz.mybudget.server.models.json.CurrencyRates;

@Service
public class CurrencyService {
    @Value("url.exchange")
    private String exchangeURL;
    @Value("url.currencies")
    private String currenciesURL;

    private final RestTemplate restTemplate;

    public CurrencyService() {
        this.restTemplate = new RestTemplate();
    }

    public CurrencyRates getCurrencyRates(String currency) {
        String url = currenciesURL.replace("<CURRENCY>", currency);

        return restTemplate.getForObject(url, CurrencyRates.class);
    }
}
