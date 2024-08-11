package qu4lizz.mybudget.server.models.xml;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import lombok.Data;

import java.util.List;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class Transactions {
    @XmlElement(name = "Transaction")
    private List<Transaction> transactions;
}
