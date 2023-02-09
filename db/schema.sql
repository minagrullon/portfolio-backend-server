DROP DATABASE IF EXISTS doggo_central;
CREATE DATABASE doggo_central;

\c doggo_central;

DROP TABLE IF EXISTS dog_clothes;

CREATE TABLE dog_clothes(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(5, 2),
    link TEXT NOT NULL,
    image TEXT,
    is_fav BOOLEAN
);

