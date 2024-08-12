package qu4lizz.mybudget.server.models.xml;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class Transaction {
    @XmlElement(name = "Description")
    private String description;

    @XmlElement(name = "Amount")
    private Amount amount;
}
