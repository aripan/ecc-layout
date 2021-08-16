import { useState } from "react";
import HeaderPart from "./components/HeaderPart";
import InputFields from "./components/InputFields";
import { formatNumber } from "./components/Logics";
import NumericKeypad from "./components/NumericKeypad";

function App() {
  const [customerNeedToPay, setCustomerNeedToPay] = useState("");
  const [suggestedAmountOne, setSuggestedAmountOne] = useState("");
  const [suggestedAmountTwo, setSuggestedAmountTwo] = useState("");
  const [suggestedAmountThree, setSuggestedAmountThree] = useState("");
  const [suggestedAmountFour, setSuggestedAmountFour] = useState("");
  const [receivedFromCustomer, setReceivedFromCustomer] = useState("");
  const [showSuggestionButtons, setShowSuggestionButtons] = useState(false);

  // triggering Enter button for the input field
  const handleInput = async (e) => {
    if (e.key === "Enter") {
      setShowSuggestionButtons(true);

      //! amounts in the suggestion button that customer needs to pay
      let formattedValue = customerNeedToPay.replace(/,/g, ".").split("");
      formatNumber(formattedValue, setCustomerNeedToPay);

      //! amounts in the suggestion button as the 1st suggestion
      let baseAmount = Number(customerNeedToPay.split(",")[0]);
      if (baseAmount === 0 || baseAmount >= 100000) {
        alert("SORRY TRANSACTION IS NOT POSSIBLE!!!");
        setCustomerNeedToPay("");
      } else {
        let suggestedAmountArr = (Number(customerNeedToPay.split(",")[0]) + 1)
          .toString()
          .split("");
        formatNumber(suggestedAmountArr, setSuggestedAmountOne);

        // values needed to build logics
        let lastValueOfArr =
          suggestedAmountArr[suggestedAmountArr.length - 1] || "0";
        let secondLastValueOfArr =
          suggestedAmountArr[suggestedAmountArr.length - 2] || "0";
        let thirdLastValueOfArr =
          suggestedAmountArr[suggestedAmountArr.length - 3] || "0";
        let fourthLastValueOfArr =
          suggestedAmountArr[suggestedAmountArr.length - 4] || "0";
        let amountTwoModified;

        //! amounts in the suggestion button as the 2nd suggestion

        if (lastValueOfArr === "0" || lastValueOfArr >= "5") {
          if (secondLastValueOfArr !== "0" && secondLastValueOfArr !== "9") {
            secondLastValueOfArr = (
              Number(secondLastValueOfArr) + 1
            ).toString();
            lastValueOfArr = "0";
            amountTwoModified = suggestedAmountArr.splice(
              suggestedAmountArr.length - 2,
              2,
              secondLastValueOfArr,
              lastValueOfArr
            );
            console.log(amountTwoModified);
            formatNumber(suggestedAmountArr, setSuggestedAmountTwo);
          }

          if (secondLastValueOfArr === "0") {
            secondLastValueOfArr = "1";
            lastValueOfArr = "0";

            amountTwoModified = suggestedAmountArr.splice(
              suggestedAmountArr.length - 2,
              2,
              secondLastValueOfArr,
              lastValueOfArr
            );
            formatNumber(suggestedAmountArr, setSuggestedAmountTwo);
          }

          if (secondLastValueOfArr === "9") {
            if (thirdLastValueOfArr) {
              thirdLastValueOfArr = (
                Number(thirdLastValueOfArr) + 1
              ).toString();
              secondLastValueOfArr = "0";
              lastValueOfArr = "0";

              amountTwoModified = suggestedAmountArr.splice(
                suggestedAmountArr.length - 3,
                3,
                thirdLastValueOfArr,
                secondLastValueOfArr,
                lastValueOfArr
              );
            } else {
              thirdLastValueOfArr = "1";
              secondLastValueOfArr = "0";
              lastValueOfArr = "0";

              amountTwoModified = suggestedAmountArr.splice(
                suggestedAmountArr.length - 2,
                3,
                thirdLastValueOfArr,
                secondLastValueOfArr,
                lastValueOfArr
              );
            }
            formatNumber(suggestedAmountArr, setSuggestedAmountTwo);
          }
        } else {
          lastValueOfArr = "5";
          amountTwoModified = suggestedAmountArr.splice(
            suggestedAmountArr.length - 1,
            1,
            lastValueOfArr
          );

          formatNumber(suggestedAmountArr, setSuggestedAmountTwo);
        }

        //! 3rd suggestion
        // Either lastValueOfArr will be "0" or "5"

        if (lastValueOfArr === "0") {
          if (secondLastValueOfArr === "0" || secondLastValueOfArr >= "5") {
            if (thirdLastValueOfArr) {
              if (thirdLastValueOfArr === "0" || thirdLastValueOfArr >= "5") {
                fourthLastValueOfArr = (
                  Number(fourthLastValueOfArr) + 1
                ).toString();
                thirdLastValueOfArr = "0";
                secondLastValueOfArr = "0";
                lastValueOfArr = "0";

                amountTwoModified = suggestedAmountArr.splice(
                  suggestedAmountArr.length - 4,
                  4,
                  fourthLastValueOfArr,
                  thirdLastValueOfArr,
                  secondLastValueOfArr,
                  lastValueOfArr
                );
              } else {
                thirdLastValueOfArr = "5";
                secondLastValueOfArr = "0";
                lastValueOfArr = "0";

                amountTwoModified = suggestedAmountArr.splice(
                  suggestedAmountArr.length - 3,
                  3,
                  thirdLastValueOfArr,
                  secondLastValueOfArr,
                  lastValueOfArr
                );
              }
              console.log(
                formatNumber(suggestedAmountArr, setSuggestedAmountThree)
              );
            } else {
              thirdLastValueOfArr = "1";
              secondLastValueOfArr = "0";
              lastValueOfArr = "0";

              amountTwoModified = suggestedAmountArr.splice(
                suggestedAmountArr.length - 2,
                3,
                thirdLastValueOfArr,
                secondLastValueOfArr,
                lastValueOfArr
              );
            }
            console.log(
              formatNumber(suggestedAmountArr, setSuggestedAmountThree)
            );
          } else {
            secondLastValueOfArr = "5";
            lastValueOfArr = "0";
            amountTwoModified = suggestedAmountArr.splice(
              suggestedAmountArr.length - 2,
              2,
              secondLastValueOfArr,
              lastValueOfArr
            );
            console.log(
              formatNumber(suggestedAmountArr, setSuggestedAmountThree)
            );
          }
        } else {
          if (secondLastValueOfArr === "0" || secondLastValueOfArr >= "5") {
            if (secondLastValueOfArr === "9") {
              if (thirdLastValueOfArr) {
                thirdLastValueOfArr = (
                  Number(thirdLastValueOfArr) + 1
                ).toString();
                secondLastValueOfArr = "0";
                lastValueOfArr = "0";

                amountTwoModified = suggestedAmountArr.splice(
                  suggestedAmountArr.length - 3,
                  3,
                  thirdLastValueOfArr,
                  secondLastValueOfArr,
                  lastValueOfArr
                );
              } else {
                thirdLastValueOfArr = "1";
                secondLastValueOfArr = "0";
                lastValueOfArr = "0";

                amountTwoModified = suggestedAmountArr.splice(
                  suggestedAmountArr.length - 2,
                  3,
                  thirdLastValueOfArr,
                  secondLastValueOfArr,
                  lastValueOfArr
                );
              }

              console.log(
                formatNumber(suggestedAmountArr, setSuggestedAmountThree)
              );
            } else {
              secondLastValueOfArr = (
                Number(suggestedAmountArr[suggestedAmountArr.length - 2]) + 1
              ).toString();
              lastValueOfArr = "0";
              amountTwoModified = suggestedAmountArr.splice(
                suggestedAmountArr.length - 2,
                2,
                secondLastValueOfArr,
                lastValueOfArr
              );
              console.log(
                formatNumber(suggestedAmountArr, setSuggestedAmountThree)
              );
            }
          } else {
            secondLastValueOfArr = "5";
            lastValueOfArr = "0";

            amountTwoModified = suggestedAmountArr.splice(
              suggestedAmountArr.length - 2,
              2,
              secondLastValueOfArr,
              lastValueOfArr
            );
            console.log(
              formatNumber(suggestedAmountArr, setSuggestedAmountThree)
            );
          }
        }

        // //! 4th suggestion

        //   lastValueOfArr is always is "0"
        //   so need to consider on secondLastValueOfArr
        if (secondLastValueOfArr === "0" || secondLastValueOfArr >= "5") {
          if (thirdLastValueOfArr) {
            thirdLastValueOfArr = (Number(thirdLastValueOfArr) + 1).toString();
            secondLastValueOfArr = "0";
            amountTwoModified = suggestedAmountArr.splice(
              suggestedAmountArr.length - 3,
              3,
              thirdLastValueOfArr,
              secondLastValueOfArr,
              lastValueOfArr
            );
          } else {
            thirdLastValueOfArr = "1";
            secondLastValueOfArr = "0";

            amountTwoModified = suggestedAmountArr.splice(
              suggestedAmountArr.length - 2,
              3,
              thirdLastValueOfArr,
              secondLastValueOfArr,
              lastValueOfArr
            );
          }

          formatNumber(suggestedAmountArr, setSuggestedAmountFour);
        } else {
          secondLastValueOfArr = "5";

          amountTwoModified = suggestedAmountArr.splice(
            suggestedAmountArr.length - 2,
            1,
            secondLastValueOfArr
          );

          formatNumber(suggestedAmountArr, setSuggestedAmountFour);
        }
      }
    }
  };

  return (
    <div className="App">
      <HeaderPart />
      <InputFields
        customerNeedToPay={customerNeedToPay}
        setCustomerNeedToPay={setCustomerNeedToPay}
        receivedFromCustomer={receivedFromCustomer}
        setReceivedFromCustomer={setReceivedFromCustomer}
        handleInput={handleInput}
      />
      <NumericKeypad
        customerNeedToPay={customerNeedToPay}
        setCustomerNeedToPay={setCustomerNeedToPay}
        receivedFromCustomer={receivedFromCustomer}
        setReceivedFromCustomer={setReceivedFromCustomer}
        showSuggestionButtons={showSuggestionButtons}
        setShowSuggestionButtons={setShowSuggestionButtons}
        suggestedAmountOne={suggestedAmountOne}
        suggestedAmountTwo={suggestedAmountTwo}
        suggestedAmountThree={suggestedAmountThree}
        suggestedAmountFour={suggestedAmountFour}
      />
    </div>
  );
}

export default App;
