package qu4lizz.mybudget.server.services;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import qu4lizz.mybudget.server.models.entities.AccountEntity;
import qu4lizz.mybudget.server.models.requests.CreateNewAccountRequest;
import qu4lizz.mybudget.server.repositories.AccountRepository;

@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final ModelMapper modelMapper;

    public AccountService(AccountRepository accountRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.modelMapper = modelMapper;
    }

    public void create(CreateNewAccountRequest request) {
        AccountEntity entity = modelMapper.map(request, AccountEntity.class);

        accountRepository.save(entity);
    }

    public Page<AccountEntity> getAccounts(Pageable pageable) {
        return accountRepository.findAll(pageable);
    }
}
