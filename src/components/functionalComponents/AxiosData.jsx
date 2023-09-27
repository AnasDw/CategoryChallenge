import axios from "axios";

let counter = 1;

export function CreateAxiosRequest(SelectedCategory, funcToUse) {
  if (
    SelectedCategory === undefined ||
    SelectedCategory.toString().length <= 1
  ) {
    return false;
  }

  axios
    .get(import.meta.env.VITE_API_URL, {
      headers: {
        Authorization:import.meta.env.VITE_API_KEY,
      },
      params: {
        query: SelectedCategory,
        per_page: counter,
        page: 3,
      },
    })
    .then((response) => {
      if (response.data.total_results) funcToUse(response.data.photos[0]);
      counter++;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
