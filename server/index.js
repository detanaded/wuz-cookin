require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  auth = require("./controllers/auth"),
  favorite = require("./controllers/recipe"),
  recipe = require("./controllers/recipe_ctrl"),
  path = require("path")

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(express.static(`${__dirname}/../src/Assets`))
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

massive(CONNECTION_STRING).then(database => {
  app.set("db", database);
  console.log("Pepebase Set!");
  app.listen(SERVER_PORT, () => {
    console.log(`Pepe Memin on ${SERVER_PORT} ✌️!`);
  });
});
// Auth Endpoints for Reg/Login
app.post("/auth/register", auth.register);
app.post("/auth/login", auth.login);
app.get("/auth/user", auth.getUser);
app.get("/auth/logout", auth.logout);
app.get("/recipe", favorite.getRecipe);
app.post("/favorites/add", favorite.addToFavorites);
app.get("/api/favorites/:recipe", favorite.grabFavorite);
app.get("/api/favorites", favorite.getFavorites);

// Endpoints for Recipes

app.get("/api/recipes", recipe.getRecipes);
app.put("/api/update", recipe.updateRecipe);
app.delete("/api/recipes/:id", recipe.deleteRecipe);
app.post("/api/addrecipe", recipe.addRecipe);

// Endpoint for Admin

app.get("/api/recipes/admin", recipe.getAdmin);

