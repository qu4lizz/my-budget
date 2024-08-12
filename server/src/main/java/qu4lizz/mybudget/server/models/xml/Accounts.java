package qu4lizz.mybudget.server.models.xml;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.Data;

import java.util.List;

@Data
@XmlRootElement(name = "Accounts")
@XmlAccessorType(XmlAccessType.FIELD)
public class Accounts {
    @XmlElement(name = "Account")
    private List<Account> accounts;
}
