import { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields';
import { formatNumber } from "./components/Logics";
import NumericKeypad from './components/NumericKeypad';

function App() {
      
    const [customerNeedToPay, setCustomerNeedToPay] = useState("")
    const [suggestedAmountOne, setSuggestedAmountOne] = useState("")
    const [suggestedAmountTwo, setSuggestedAmountTwo] = useState("")
    const [suggestedAmountThree, setSuggestedAmountThree] = useState("")
    const [suggestedAmountFour, setSuggestedAmountFour] = useState("")
    const [receivedFromCustomer, setReceivedFromCustomer] = useState("")
    const [changeForCustomer, setChangeForCustomer] = useState("")
    const [showSuggestionButtons, setShowSuggestionButtons] = useState(false)
   

    // triggering Enter button for the input field
    const handleInput=(e)=>{
      if(e.key==="Enter"){
          setShowSuggestionButtons(true);
          let formattedValue = customerNeedToPay.replace(/,/g, ".").split("")
          // console.log(customerNeedToPay.replace(/,/g, ".").split(""))
          // formatNumber(formattedValue, setAmountToPay);
          formatNumber(formattedValue, setCustomerNeedToPay);
  
          //! 1st suggestion
          // let baseAmount= Number(customerNeedToPay.split(",")[0]);
          let suggestAmountTwoArr = (Number(customerNeedToPay.split(",")[0]) + 1).toString().split("");
          formatNumber(suggestAmountTwoArr, setSuggestedAmountOne)
          // setSuggestedAmountOne(baseAmount +1) 
  
          //! 2nd suggestion
          let lastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-1]
          let secondLastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-2]
          let amountTwoModified;
  
          if(lastValueOfArr ==="0" || lastValueOfArr >="5"){
              if(secondLastValueOfArr !== "0" && secondLastValueOfArr !== "9"){
                  secondLastValueOfArr = (Number(suggestAmountTwoArr[suggestAmountTwoArr.length-2])+1).toString()
                  lastValueOfArr = "0"
                  amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                  console.log(amountTwoModified)
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountTwo )
                  // setSuggestedAmountTwo(suggestAmountTwoArr.join(""))
              }
  
              if(secondLastValueOfArr === "0"){
                  secondLastValueOfArr = "1"
                  lastValueOfArr = "0"
  
                  amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                  // setSuggestedAmountTwo(suggestAmountTwoArr.join(""))
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountTwo )
              }
  
              if(secondLastValueOfArr === "9"){
                  let thirdLastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-3]? suggestAmountTwoArr[suggestAmountTwoArr.length-3]: "";
                  if(thirdLastValueOfArr){
                      thirdLastValueOfArr= (Number(thirdLastValueOfArr)+1).toString()
                      secondLastValueOfArr = "0"
                      lastValueOfArr = "0"
  
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-3, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                  }else{
                      thirdLastValueOfArr= "1"
                      secondLastValueOfArr = "0"
                      lastValueOfArr = "0"
  
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                  }
                  // setSuggestedAmountTwo(suggestAmountTwoArr.join(""))
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountTwo )
                  }
             
  
          }else{
              lastValueOfArr = "5"
              amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-1, 1, lastValueOfArr)
              // setSuggestedAmountTwo(suggestAmountTwoArr.join(""))
              formatNumber(suggestAmountTwoArr, setSuggestedAmountTwo ) 
          }
  
          //! 3rd suggestion
          console.log(suggestAmountTwoArr) 
  
          // Either lastValueOfArr will be "0" or "5"
  
          if(lastValueOfArr ==="0"){
              if(secondLastValueOfArr==="0" || secondLastValueOfArr>="5"){
                  let thirdLastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-3]? suggestAmountTwoArr[suggestAmountTwoArr.length-3]: "";
                  if(thirdLastValueOfArr){
                      thirdLastValueOfArr= (Number(thirdLastValueOfArr)+1).toString()
                      secondLastValueOfArr = "0"
                      lastValueOfArr="0"
                      
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-3, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                  }else{
                      thirdLastValueOfArr= "1"
                      secondLastValueOfArr = "0"
                      lastValueOfArr="0"
                  
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                  }
                  // setSuggestedAmountThree(suggestAmountTwoArr.join(""))
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountThree )
              }else{
                  secondLastValueOfArr = "5"
                  amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 1, secondLastValueOfArr)
                  // setSuggestedAmountThree(suggestAmountTwoArr.join(""))
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountThree )
              }
          }else{
              if((secondLastValueOfArr==="0" || secondLastValueOfArr>="5")){
                  if(secondLastValueOfArr ==="9"){
                      let thirdLastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-3]? suggestAmountTwoArr[suggestAmountTwoArr.length-3]: "";
                      if(thirdLastValueOfArr){
                          thirdLastValueOfArr= (Number(thirdLastValueOfArr)+1).toString()
                          secondLastValueOfArr = "0"
                          lastValueOfArr = "0"
  
                          amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-3, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                      }else{
                          thirdLastValueOfArr= "1"
                          secondLastValueOfArr = "0"
                          lastValueOfArr = "0"
  
                          amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                      }
  
                      // setSuggestedAmountThree(suggestAmountTwoArr.join(""))
                      formatNumber(suggestAmountTwoArr, setSuggestedAmountThree )
                      
                  } else{
                      secondLastValueOfArr = (Number(suggestAmountTwoArr[suggestAmountTwoArr.length-2])+1).toString()
                      lastValueOfArr = "0"
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                      // setSuggestedAmountThree(suggestAmountTwoArr.join(""))
                      formatNumber(suggestAmountTwoArr, setSuggestedAmountThree )
                  }
              }else{
                  secondLastValueOfArr = "5"
                  lastValueOfArr = "0"
  
                  amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                  // setSuggestedAmountThree(suggestAmountTwoArr.join(""))
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountThree )
              }
          }
  
          // //! 4th suggestion
          console.log(suggestAmountTwoArr) 
          // lastValueOfArr is always is "0"
          // so need to consider on secondLastValueOfArr
          if(secondLastValueOfArr ==="0" || secondLastValueOfArr >="5"){
              let thirdLastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-3]? suggestAmountTwoArr[suggestAmountTwoArr.length-3]: "";
                  if(thirdLastValueOfArr){
                      thirdLastValueOfArr= (Number(thirdLastValueOfArr)+1).toString()
                      secondLastValueOfArr = "0"
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-3, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                  }else{
                      thirdLastValueOfArr= "1"
                      secondLastValueOfArr = "0"
                  
                      amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 3, thirdLastValueOfArr, secondLastValueOfArr, lastValueOfArr)
                  }
                  // setSuggestedAmountFour(suggestAmountTwoArr.join(""))
                  formatNumber(suggestAmountTwoArr, setSuggestedAmountFour )
          }else{
              secondLastValueOfArr = "5"
  
              amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 1, secondLastValueOfArr)
              // setSuggestedAmountFour(suggestAmountTwoArr.join(""))
              formatNumber(suggestAmountTwoArr, setSuggestedAmountFour )
          }
      }
  }


  return (
    <div className="App">
     <h1>Hello</h1>
     <InputFields 
        customerNeedToPay={customerNeedToPay} setCustomerNeedToPay={setCustomerNeedToPay} receivedFromCustomer={receivedFromCustomer} setReceivedFromCustomer={setReceivedFromCustomer} handleInput={handleInput} 
      />
     <NumericKeypad 
        customerNeedToPay={customerNeedToPay} setCustomerNeedToPay={setCustomerNeedToPay} receivedFromCustomer={receivedFromCustomer} setReceivedFromCustomer={setReceivedFromCustomer} changeForCustomer={changeForCustomer} setChangeForCustomer={setChangeForCustomer} showSuggestionButtons={showSuggestionButtons} setShowSuggestionButtons={setShowSuggestionButtons} suggestedAmountOne={suggestedAmountOne} suggestedAmountTwo={suggestedAmountTwo} suggestedAmountThree={suggestedAmountThree} suggestedAmountFour={suggestedAmountFour} 
      />
    </div>
  );
}

export default App;
