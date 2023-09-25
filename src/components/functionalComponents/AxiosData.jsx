import React from "react";
import axios from "axios";

const API_KEY = "Pzwyky7IsQkEDGXHvJel9tQaT7g2HhbTkvZK739bPqEZZ9vQCZZN4Vu9";
const API_URL = "https://api.pexels.com/v1/search";

let counter = 1;

export function CreateAxiosRequest(SelectedCategory, funcToUse) {
  if (
    SelectedCategory === undefined ||
    SelectedCategory.toString().length <= 1
  ) {
    return false;
  }

  axios
    .get(API_URL, {
      headers: {
        Authorization: API_KEY,
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
