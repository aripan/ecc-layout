import React from 'react'

const SuggestedPrices = ({customerNeedToPay, suggestedAmountOne, suggestedAmountTwo, suggestedAmountThree, suggestedAmountFour, handleSuggestedBtn}) => {
    return (
        <div onClick={handleSuggestedBtn}> 
                <button> {suggestedAmountFour}</button>
                <button> {suggestedAmountThree}</button>
                <button> {suggestedAmountTwo}</button>
                <button> {suggestedAmountOne}</button>
                <button> {customerNeedToPay}</button>
        </div>
    )
}

export default SuggestedPrices
