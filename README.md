# Doggo Central Backend

[deployed backend] (https://doggo-central-backend.onrender.com)

This is the backend code for Doggo Central.

=== Installation ===

- `fork` and `clone` this repo.

- Check to see if you have all the needed dependencies in your package.json file. You will need `cors`, `dotenv`, `express`, `pg`, `pg-promise`.

- Make sure you have `postgresSQL` installed on your machine before continuing. Vist [Postgres](https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/) to get set up.
- Run the commands `npm run db:init` and `npm run db:seed` to create the database and fill it with data.

- Run `npm install` to install packages.

* Create a `.env` file. Inside this file create variables for your database:
  - PORT which will be used in your `.env` file for the frontend
  - PG_HOST which will have the value of localhost
  - PG_PORT which will have your database port number. Usually is 5432 for postgres.
  - PG_DATABASE which will have a value of doggo_central
  - PG_USER whihc will be postgres

- Run `nodemon` to see if everything works.
