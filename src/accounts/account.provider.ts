
import { Account } from './account.entity';

export const accountsProviders = [
  {
    provide: 'ACCOUNTS_REPOSITORY',
    useValue: Account,
  },
];
