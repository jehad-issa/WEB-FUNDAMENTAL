SELECT *
FROM dojo
LEFT JOIN ninjas
ON dojo.id = ninjas.dojo_id
WHERE dojo.id = 3;
