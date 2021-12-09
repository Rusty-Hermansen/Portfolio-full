select pp.id, pos.position, p.title, t.text_content, i.image_url 
    from portfolio_post.post_position pp 
INNER JOIN portfolio_post.post p 
    ON p.id = pp.portfolio_post_id 
INNER JOIN portfolio_post.position pos 
    ON pos.id = pp.post_position_id 
LEFT JOIN portfolio_post.text t 
    ON t.id=pp.post_text_id 
LEFT JOIN portfolio_post.image i 
    ON i.id= pp.post_image_id
WHERE p.id = 1
ORDER BY pos.position asc;

select p.title, concat(t.text_content, i.image_url) as post
    from portfolio_post.post_position pp 
INNER JOIN portfolio_post.post p 
    ON p.id = pp.portfolio_post_id 
INNER JOIN portfolio_post.position pos 
    ON pos.id = pp.post_position_id 
LEFT JOIN portfolio_post.text t 
    ON t.id=pp.post_text_id 
LEFT JOIN portfolio_post.image i 
    ON i.id= pp.post_image_id
WHERE p.id = 1
ORDER BY pos.position asc;

select * from portfolio_post.post;