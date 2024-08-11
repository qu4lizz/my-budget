package qu4lizz.mybudget.server.services;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.xml.Accounts;

import java.io.File;

@Service
public class XMLService {
    public Accounts parseXMLfromFile(String fileName) throws JAXBException {
        File file = new File(fileName);
        JAXBContext jaxbContext = JAXBContext.newInstance(Accounts.class);

        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

        return (Accounts) jaxbUnmarshaller.unmarshal(file);
    }
}
