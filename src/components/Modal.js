import React from "react";
import styles from "./NumericKeypad.module.css";

const Modal = ({ setShowModal, changeForCustomer }) => {
  return (
    <div className={styles.modal}>
      <button
        onClick={() => {
          setShowModal(false);
        }}
      >
        X
      </button>
      <h2>Change for customer</h2>
      <h3>{changeForCustomer}</h3>
    </div>
  );
};

export default Modal;
