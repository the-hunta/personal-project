INSERT INTO posts (user_id, username, title, content, date, time)
VALUES (${user_id}, ${username}, ${title}, ${content}, ${postDate}, ${postTime});

SELECT *
FROM posts;