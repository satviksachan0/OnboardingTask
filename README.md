

## Description

This project is a settings management system built with the [Nest](https://github.com/nestjs/nest) framework. It provides APIs for managing accounts and settings, with authentication and authorization features.
For making the project easier the auth system takes only name to get jwt which later gets verified, in actual use case there should be a password as well which would define a particular account or user which could be saved by using bcrypt.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

### Accounts

- `GET /accounts/all` - Retrieve all accounts
- `POST /accounts/createUser` - Create a new account

### Settings

- `GET /setting/all` - Retrieve all settings (requires authentication)
- `POST /setting/createSetting` - Create a new setting (requires authentication)
- `DELETE /setting/:id` - Delete a setting by ID (requires authentication)
- `PUT /setting/updateSetting` - Update a setting (requires authentication)

### Authentication

- `POST /auth/login` - Login and receive a JWT token
- `GET /auth/profile` - Retrieve the profile of the logged-in user (requires authentication)

