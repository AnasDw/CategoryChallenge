import React from "react";






import { createClient } from "pexels";


const client = createClient(
  "Pzwyky7IsQkEDGXHvJel9tQaT7g2HhbTkvZK739bPqEZZ9vQCZZN4Vu9"
);


let counter = 1;

export function CreateAxiosRequest(SelectedCategory, funcToUse) {
  if (
    SelectedCategory === undefined ||
    SelectedCategory.toString().length <= 1
  ) {
    return false;
  }
  // client.photos
  //   .search({ query: SelectedCategory, per_page: counter, page: 3 })
  //   .then((response) => {
  //     if (response.total_results) funcToUse(response.photos[0]);
  //     counter++;
  //   });
}
