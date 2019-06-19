module.exports = {
  addRecipe: (req, res) => {
    const { directions, ingredients, name, image } = req.body;

    const db = req.app.get("db");

    const { id } = req.session.user;
    db.add_recipe({ user_id: id, directions, ingredients, name, image })
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(error => {
        if (error) throw error;
      });
  },

  getRecipes: async (req, res) => {
    const db = req.app.get("db");

    const { id } = req.session.user;

    const result = await db.get_recipes(id);

    res.status(200).send(result);
  },
  updateRecipe: async (req, res) => {
    const db = req.app.get("db");
    const { name, image, ingredients, directions, recipe_id } = req.body;

    db.update_recipe({ recipe_id, name, image, ingredients, directions })
      .then(dbResponse => {
        res.status(200).send("Updated Recipe!");
      })
      .catch(err => {
        console.log(err);
      });
  },
  

  deleteRecipe: async (req, res) => {
    const db = req.app.get("db");
    const { recipe_id } = req.query;
    await db.delete_recipe({ recipe_id });

    res.status(200).send("Removed Recipe!");
  },

  getAdmin: async (req, res) => {
    const db =req.app.get('db')
    const results = await db.get_users_and_recipes()
    res.status(200).send(results)
    
  }
};
