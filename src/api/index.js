import axios from "axios";

export async function fetchRandomDrink() {
  const { data } = await axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .catch((err) => console.error(err));
  const { drinks } = data;
  return drinks[0];
}
export async function fetchAllDrinks(alcoholic) {
  const URL_PARAM = alcoholic ? "Alcoholic" : "Non_Alcoholic";
  const { data } = await axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${URL_PARAM}`
    )
    .catch((err) => console.error(err));
  return data.drinks;
}
export default fetchRandomDrink;
