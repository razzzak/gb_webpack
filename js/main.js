import { printError, printResult } from "./printResult.js";
import getDateDiff from "./getDateDiff.js";

const form = document.getElementById("datecalc");

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const firstDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");

  console.log(firstDate, secondDate);

  if (!firstDate || !secondDate) {
    printError("Ooooops - введите дату");
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate);

    printResult(dateDiff);
  }
};
