import { data } from "../route";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const recipe = data.recipes.find((recipe) => String(recipe.id) === id);
    return Response.json(recipe);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const recipeIndex = data.recipes.findIndex((recipe) => String(recipe.id) === id);
    const recipeDeleted = data.recipes[recipeIndex];
    data.recipes.splice(recipeIndex, 1);
    return Response.json(recipeDeleted);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const recipeIndex = data.recipes.findIndex((recipe) => String(recipe.id) === id);
    const recipe = data.recipes[recipeIndex];
    data.recipes[recipeIndex] = { ...body, id: recipe.id };
    return Response.json(data.recipes[recipeIndex]);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};
