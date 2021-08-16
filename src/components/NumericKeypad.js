import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./NumericKeypad.module.css";
import NumericPad from "./NumericPad";
import SuggestedPrices from "./SuggestedPrices";

function NumericKeypad({
  customerNeedToPay,
  setCustomerNeedToPay,
  receivedFromCustomer,
  setReceivedFromCustomer,
  showSuggestionButtons,
  setShowSuggestionButtons,
  suggestedAmountOne,
  suggestedAmountTwo,
  suggestedAmountThree,
  suggestedAmountFour,
}) {
  const [showModal, setShowModal] = useState(false);
  const [changeForCustomer, setChangeForCustomer] = useState("");

  // method to handle the numeric pad
  const handleButton = (e) => {
    if (e.target.innerText === "C") {
      setCustomerNeedToPay(
        customerNeedToPay.slice(0, customerNeedToPay.length - 1)
      );
    } else {
      setCustomerNeedToPay(customerNeedToPay.concat(e.target.innerText));
    }
  };

  const handleSuggestedBtn = (e) => {
    setReceivedFromCustomer(e.target.innerText);
  };

  const handlePayment = () => {
    // (receivedFromCustomer).replace(/[, . €]/g,"")) -> removing all signs mentioned here
    let customerPaid = Number(receivedFromCustomer.replace(/[, . €]/g, ""));
    let bill = Number(customerNeedToPay.replace(/[, . €]/g, ""));
    let change = (customerPaid - bill) / 100;
    let formatChange = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(change);
    setChangeForCustomer(formatChange);
    setCustomerNeedToPay("");
    setReceivedFromCustomer("");
    setShowSuggestionButtons(false);
    setShowModal(true);
  };

  return (
    <div>
      <div className={styles.container}>
        {/* Suggested amounts with the amount needs to pay */}
        {showSuggestionButtons ? (
          <SuggestedPrices
            customerNeedToPay={customerNeedToPay}
            suggestedAmountOne={suggestedAmountOne}
            suggestedAmountTwo={suggestedAmountTwo}
            suggestedAmountThree={suggestedAmountThree}
            suggestedAmountFour={suggestedAmountFour}
            handleSuggestedBtn={handleSuggestedBtn}
          />
        ) : null}

        {/* Numeric keypad */}
        <NumericPad handleButton={handleButton} />
        <div className={styles["payment-btn"]}>
          <button onClick={handlePayment}>Zahlen</button>
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          changeForCustomer={changeForCustomer}
        />
      )}
    </div>
  );
}

export default NumericKeypad;
