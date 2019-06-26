CREATE TABLE users (
    id SERIAL PRIMARY key,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    username VARCHAR
);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users,
    title VARCHAR,
    content TEXT,
    date DATA,
    time TIME
);