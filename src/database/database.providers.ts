
import { Sequelize } from 'sequelize-typescript';
// import { Cat } from '../cats/cat.entity';
import { Account } from 'src/accounts/account.entity';
import { Setting } from 'src/settings/setting.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'q_3=jb67',
        database: 'ClearFeedOnboarding',
      });
      sequelize.addModels([Account, Setting]);
      await sequelize.sync({alter: true});
      return sequelize;

    },
  },
];
