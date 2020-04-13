import { tplHeader } from "./tpl/tplHeader.js";
import { _$, fetchGetData } from "./lib/util.js";
// import { Card } from "../../delete/card/card.js";
import { Column } from "./column/column.js";
import { CardCreation } from "./column/cardCreation.js";
import { Model } from "./column/model.js";
import { mock } from "./mock.js";

// import css from "../style/style.css";

function init() {
  const header = tplHeader();
  _$("#wrap").insertAdjacentHTML("afterbegin", header);

  const cardCreation = new CardCreation();
  const column = new Column(cardCreation);
  const model = new Model(column);
  // const card = new Card();
  // const card = new Card(cardView);
  fetchInitialData(model);
}

function fetchInitialData(model) {
  const url = "http://15.165.163.174:8080/mock";

  fetchGetData(url).then((initialData) => {
    // column.init(initialData.categories);
    // card.init(initialData.categories);
  });
  // column.init(mock.categories);
  model.init(mock.categories);
  // card.init(mock.categories);
}

window.addEventListener("DOMContentLoaded", init);
