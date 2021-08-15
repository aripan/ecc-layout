import React from 'react';
import NumericPad from './NumericPad';
import SuggestedPrices from './SuggestedPrices';

function NumericKeypad({customerNeedToPay, setCustomerNeedToPay, receivedFromCustomer, setReceivedFromCustomer, changeForCustomer, setChangeForCustomer, showSuggestionButtons, setShowSuggestionButtons, suggestedAmountOne, suggestedAmountTwo, suggestedAmountThree, suggestedAmountFour}) {
 
    // method to handle the numeric pad
    const handleButton =(e)=>{
        if(e.target.innerText==="C"){
            setCustomerNeedToPay(customerNeedToPay.slice(0, customerNeedToPay.length-1))
        }else{
            setCustomerNeedToPay(customerNeedToPay.concat(e.target.innerText))
        }
    }


    const handleSuggestedBtn =(e)=>{
        setReceivedFromCustomer(e.target.innerText)
    }
    
    const handlePayment=()=>{

        // (receivedFromCustomer).replace(/[, . €]/g,"")) -> removing all signs mentioned here
        let customerPaid = Number(((receivedFromCustomer).replace(/[, . €]/g,"")))
        let bill = Number(((customerNeedToPay).replace(/[, . €]/g,"")))
        let change = (customerPaid- bill)/100;
        let formatChange = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(change)
        setChangeForCustomer(formatChange)
        setCustomerNeedToPay("")
        setReceivedFromCustomer("")
        setShowSuggestionButtons(false);
        
    }

    return (
        <div>
           
           
           {/* Suggested amounts with the amount needs to pay */}
           {showSuggestionButtons? 
                <SuggestedPrices customerNeedToPay={customerNeedToPay} suggestedAmountOne={suggestedAmountOne} suggestedAmountTwo={suggestedAmountTwo} suggestedAmountThree={suggestedAmountThree} suggestedAmountFour={suggestedAmountFour} handleSuggestedBtn={handleSuggestedBtn} /> 
           : null}
            
          {changeForCustomer}
           
           {/* Numeric keypad */}
           <NumericPad handleButton={handleButton}/>
            <div>
                <button onClick={handlePayment}>Payment</button>
            </div>
        </div>
    )
}

export default NumericKeypad
