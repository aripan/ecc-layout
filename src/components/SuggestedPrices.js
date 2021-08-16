import React from 'react'
import styles from "./NumericKeypad.module.css"

const SuggestedPrices = ({customerNeedToPay, suggestedAmountOne, suggestedAmountTwo, suggestedAmountThree, suggestedAmountFour, handleSuggestedBtn}) => {
    return (
        <div onClick={handleSuggestedBtn} className={styles.prices}> 
                <button> {suggestedAmountFour}</button>
                <button> {suggestedAmountThree}</button>
                <button> {suggestedAmountTwo}</button>
                <button> {suggestedAmountOne}</button>
                <button> {customerNeedToPay}</button>
        </div>
    )
}

export default SuggestedPrices
