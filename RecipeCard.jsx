import React from "react";
 
const RecipeCard =({recipe})=> 
{
    const
    {
        idMeal, 
        strMeal, 
        strCategory,

    } = recipe;
    return (
        <div className="card">
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/"+idMeal} target="__blank">Instructions</a>
            </div>
        </div>
    )
};
export default RecipeCard;