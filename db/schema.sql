DROP DATABASE IF EXISTS doggo_central;
CREATE DATABASE doggo_central;

\c doggo_central;

DROP TABLE IF EXISTS items;

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(5, 2),
    link TEXT NOT NULL,
    image TEXT NOT NULL,
    is_fav BOOLEAN,
    category VARCHAR(50)
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    commenter VARCHAR(50) NOT NULL,
    comment TEXT NOT NULL,
    item_id INTEGER REFERENCES items (id) ON DELETE CASCADE
);
