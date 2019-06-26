update posts 
set content = ${post}
where id = ${id};


SELECT p.id, p.user_id, p.content, u.name
from posts p
join users u
on p.user_id = u.id 
order by p.id asc;