import React, { useState } from 'react';
import styles from "./NumericKeypad.module.css";

function NumericKeypad() {
    const [result, setResult] = useState("")
    const [amountToPay, setAmountToPay] = useState(0)
    const [suggestedAmountOne, setSuggestedAmountOne] = useState(0)
    const [suggestedAmountTwo, setSuggestedAmountTwo] = useState(1)
    const [suggestedAmountThree, setSuggestedAmountThree] = useState(2)
    const [suggestedAmountFour, setSuggestedAmountFour] = useState(3)

    // method to handle the numeric pad
    const handleButton =(e)=>{
        if(e.target.innerText==="C"){
            setResult(result.slice(0, result.length-1))
        }else{
            setResult(result.concat(e.target.innerText))
        }
    }

    const formatNumber=(inputVal, setFunc)=>{
            let arrToStr = inputVal.join("")
            let strToNum = Number(arrToStr).toFixed(2)
            let formattedNum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
            setFunc(formattedNum.format(strToNum))
    }

    

    // triggering Enter button for the input field
    const handleInput=(e)=>{
        if(e.key==="Enter"){
            let formattedResult = result.replace(/,/g, ".").split("")
            // console.log(result.replace(/,/g, ".").split(""))
            formatNumber(formattedResult, setAmountToPay);

            //! 1st suggestion
            // let baseAmount= Number(result.split(",")[0]);
            let suggestAmountTwoArr = (Number(result.split(",")[0]) + 1).toString().split("");
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
                        
                        amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-3, 2, thirdLastValueOfArr, secondLastValueOfArr)
                    }else{
                        thirdLastValueOfArr= "1"
                        secondLastValueOfArr = "0"
                    
                        amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, thirdLastValueOfArr, secondLastValueOfArr)
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
        <div>
            <input type="text" value={result} onChange={e=>setResult(e.target.value)} onKeyUp={handleInput}/>
           
           {/* Suggested amounts with the amount needs to pay */}
        <div> 
            <button>{suggestedAmountFour}</button>
            <button>{suggestedAmountThree}</button>
            <button>{suggestedAmountTwo}</button>
            <button>{suggestedAmountOne}</button>
            <button>{amountToPay}</button>
        </div>
          
           
           {/* Numeric keypad */}
            <div className={styles.container}>
                <div className={styles.keypad} onClick={handleButton}>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>C</button>
                    <button>0</button>
                    <button>,</button>
                </div>
            </div>
            
        </div>
    )
}

export default NumericKeypad
