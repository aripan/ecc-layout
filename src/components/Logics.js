export const formatNumber = (inputVal, setFunc) => {
  let arrToStr = inputVal.join("");
  let strToNum = Number(arrToStr).toFixed(2);
  let formattedNum = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  setFunc(formattedNum.format(strToNum));
};
