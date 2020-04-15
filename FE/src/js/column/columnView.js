import { tplColumn, tplAddColumn } from "../tpl/tplColumn.js";
import { tplCard } from "../tpl/tplCard.js";
import { Observable } from "./observable.js";
import { _$, __, _c, _c$, __$, _a$ } from "../lib/util.js";

export class ColumnView extends Observable {
  constructor() {
    super();
    this.columnArea = _$("#todo");
    this.cardArea = ".column__cards";
    this.card = ".column__card";
    this.column = ".todo__column";
    this.inputFocus = "input-active";
    // this.cardSelectionFocus = "true"; // 인자로 넘기기
    // this.previousFocus = null;
  }

  addEventHandler(column) {
    __(column).on("click", (event) => {
      this.notify(event);

      // this.fucusCard(event);
    });
  }

  // fucusCard({ target }) {
  //   if (!this.previousFocus) {
  //     debugger;
  //     _c(this.previousFocus).remove(this.inputFocus);
  //   }
  //   if (!this.cardSelectionFocus) return console.log(1);

  //   if (target.dataset.focus !== this.cardSelectionFocus) return;
  //   if (target.tagName === "LI") {
  //     _c(target).add(this.inputFocus);
  //     return (this.previousFocus = target);
  //   }
  //   const currentFocus = target.closest(this.card);
  //   _c(currentFocus).add(this.inputFocus);
  //   this.previousFocus = currentFocus;
  // }

  columnRender(columnId) {
    const columnsHtml = tplColumn(columnId);
    this.columnArea.insertAdjacentHTML("beforeend", columnsHtml);

    const AllColumns = _a$(this.column);

    const currentColumn = [...AllColumns].find(
      (column) => column.dataset.columnId === columnId
    );

    this.addEventHandler(currentColumn);
    return currentColumn;
  }

  addColumnRender() {
    if (!tplAddColumn) return;
    const addColumn = tplAddColumn();

    this.columnArea.insertAdjacentHTML("beforeend", addColumn);
  }

  columnNameRender(name, column) {
    const title = _a$(".column__title", column);

    title.forEach((nameArea) => (nameArea.innerText = name));
  }

  cardRender(cardContent, column) {
    const cardArea = _$(this.cardArea, column);
    const cardHtml = tplCard(cardContent);
    cardArea.insertAdjacentHTML("afterbegin", cardHtml);
  }

  deleteCard(card) {
    return card.remove();
  }

  numberOfCardRender(numberOfCard, column) {
    const countArea = _$(".column__card-count", column);
    return (countArea.innerText = numberOfCard);
  }
}