// import { Sequelize } from 'sequelize-typescript';
// // import { Cat } from '../cats/cat.entity';
// import { Account } from 'src/accounts/account.entity';
// import { Setting } from 'src/settings/setting.entity';

// export const databaseProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useFactory: async () => {
//       const sequelize = new Sequelize({
//         dialect: 'mysql',
//         host: process.env.DATABASE_HOST,
//         port: process.env.DATABASE_PORT
//           ? parseInt(process.env.DATABASE_PORT, 10)
//           : undefined,
//         username: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         database: process.env.DATABASE_NAME,
//       });
//       sequelize.addModels([Account, Setting]);
//       await sequelize.sync({ alter: true });
//       return sequelize;
//     },
//   },
// ];
