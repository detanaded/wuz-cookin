select users.user_id, users.username, recipes.name, recipes.image from recipes
inner join users on recipes.user_id = users.user_id