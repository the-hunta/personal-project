INSERT INTO users (name, username, email, password)
VALUES (${name}, ${username} ,${email}, ${hash})
RETURNING *;