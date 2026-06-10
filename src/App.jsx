import { useState, useEffect } from "react";
import "./App.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        className="card-photo"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="card-body">
        <div className="card-name">{recipe.strMeal}</div>
        <div className="card-category">{recipe.strCategory}</div>
        <div className="card-footer">
          <button className="btn-save">Save Recipe</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((r) => r.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  return (
    <div>
      <nav>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span className="brand-name">
            Fla<em>vour</em>
          </span>
          <span className="brand-tagline">React Edition</span>
        </div>
        <div className="saved-pill">
          <span>Saved</span>
          <span className="saved-pill-count">0</span>
        </div>
      </nav>

      <div className="section-wrap">
        <div className="section-heading">
          <span className="section-title">Results</span>
          <span className="section-count">{recipes.length}Recipes</span>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;