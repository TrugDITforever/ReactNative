import React from "react";
import axios from "axios";
import styles from "./Recipes.module.css";
const Recipes = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get("/api/fetchUserposts");
        if (res.data) {
          setRecipes(res.data.postData);
        }
      } catch (error) {
        console.error("There was an error fetching the users data!", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.flexcontainer}>
        <div className={styles.drawerPlace}></div>
        <div className={styles.recipesContainer}>
          <h2 className={styles.recipesTitle}>Recipes</h2>
          <div className={styles.recipesList}>
            {recipes.map((recipe) => (
              <div className={styles.card} key={recipe._id}>
                <img
                  src={recipe.foodImage}
                  alt={recipe.title}
                  className={styles.foodImage}
                />

                <div className={styles.foodInfo}>
                  <span className={styles.foodName}>{recipe.foodName}</span>
                </div>
                <div className={styles.ownerInfo}>
                  <img
                    src={recipe.userpost[0].profileImage}
                    alt={recipe.userpost[0].username}
                    className={styles.ownerImage}
                  />
                  <span className={styles.ownerName}>
                    {recipe.userpost[0].username}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
