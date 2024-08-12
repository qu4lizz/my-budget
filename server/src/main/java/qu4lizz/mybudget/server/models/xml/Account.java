package qu4lizz.mybudget.server.models.xml;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlAttribute;
import jakarta.xml.bind.annotation.XmlElement;
import lombok.Data;

import java.math.BigDecimal;

@XmlAccessorType(XmlAccessType.FIELD)
@Data
public class Account {
    @XmlAttribute(name = "name")
    private String name;

    @XmlAttribute(name = "currency")
    private String currency;

    @XmlElement(name = "Balance")
    private BigDecimal balance;

    @XmlElement(name = "Transactions")
    private Transactions transactions;
}
