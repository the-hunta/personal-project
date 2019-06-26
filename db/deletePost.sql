delete from posts
where id = ${id};

SELECT p.id, p.user_id, p.content, p.name 
from posts p 
join users u 
on p.user_id = u.id
order by p.id asc;