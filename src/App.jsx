import "./App.css";

function RecipeCard({ name, category, image }) {
    return (
        <div className="recipe-card">
            <img
                src={image}
                alt={name}
                className="card-photo"
            />
            <div className="card-body">
                <div className="card-name">{name}</div>
                <div className="card-category">{category}</div>
                <div className="card-footer">
                    <button className="btn-save">Save Recipe</button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <nav>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span className="brand-name">
                        Sa<em>pore</em>
                    </span>
                    <span className="brand-tagline">React edition</span>
                </div>
                <div className="saved-pill">
                    <span>Saved</span>
                    <span className="saved-pill-count">0</span>
                </div>
            </nav>

            <div className="section-wrap">
                <div className="recipe-grid">
                    <RecipeCard
                        name="Spaghetti Carbonara"
                        category="Spaghetti"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-dHCvWIED22a1FligGUQxW9laK9ohoOcST0OE7lIvg&s=10"
                    />
                    <RecipeCard
                        name="Spaghetti Bolognese"
                        category="Spaghetti"
                        image="https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Authentic-Spaghetti-Bolognese-SQ.jpg"
                    />
                    <RecipeCard
                        name="Caviar"
                        category="Sea food"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-Sos3LKvsGIws-B20zrLeGAoMKy2EqdTfkknGD680g&s=10"
                    />
                    <RecipeCard
                        name="Grilled Blue Lobster"
                        category="Sea food"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZb2nf-xDdu2HN1fSb4_VEZlb9IrfkxRQVVQmD2YZtQ&s=10"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;