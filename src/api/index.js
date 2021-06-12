import axios from "axios";

async function fetchRandomDrink() {
  const { data } = await axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .catch((err) => console.error(err));
  const { drinks } = data;
  return drinks[0];
}

export default fetchRandomDrink;
