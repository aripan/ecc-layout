import React, { useState } from 'react';
import styles from "./NumericKeypad.module.css";


function NumericKeypad() {
    const [result, setResult] = useState("")
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

    // triggering Enter button for the input field
    const handleInput=(e)=>{
        if(e.key==="Enter"){

            //! 1st suggestion
            let baseAmount = Number(result.split(",")[0])
            setSuggestedAmountOne(baseAmount +1)  

            //! 2nd suggestion
            let suggestAmountTwoArr=(baseAmount +1).toString().split("");
            let lastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-1]
            let secondLastValueOfArr = suggestAmountTwoArr[suggestAmountTwoArr.length-2]
            let amountTwoModified;

            if(lastValueOfArr ==="0" || lastValueOfArr >="5"){
                if(secondLastValueOfArr !== "0" && secondLastValueOfArr !== "9"){
                    secondLastValueOfArr = (Number(suggestAmountTwoArr[suggestAmountTwoArr.length-2])+1).toString()
                    lastValueOfArr = "0"
                    amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                    console.log(amountTwoModified)
                    console.log(suggestAmountTwoArr.join(""))
                }

                if(secondLastValueOfArr === "0"){
                    secondLastValueOfArr = "1"
                    lastValueOfArr = "0"
    
                    amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                    console.log(suggestAmountTwoArr)
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
                        console.log(suggestAmountTwoArr)
                    }
               

            }else{
                lastValueOfArr = "5"
                amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-1, 1, lastValueOfArr)
                console.log(suggestAmountTwoArr) 
            }

            // //! 3rd suggestion
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
                        console.log(suggestAmountTwoArr)
                }else{
                    secondLastValueOfArr = "5"
                    
    
                    amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 1, secondLastValueOfArr)
                    console.log(suggestAmountTwoArr)
                }
            }else{
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
                        console.log(suggestAmountTwoArr)
                }
                if((secondLastValueOfArr==="0" || secondLastValueOfArr>="5") && secondLastValueOfArr !== "9"){
                    secondLastValueOfArr = (Number(suggestAmountTwoArr[suggestAmountTwoArr.length-2])+1).toString()
                    lastValueOfArr = "0"
                    amountTwoModified =suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                    console.log(suggestAmountTwoArr.join(""))
                }else{
                    secondLastValueOfArr = "5"
                    lastValueOfArr = "0"
    
                    amountTwoModified = suggestAmountTwoArr.splice(suggestAmountTwoArr.length-2, 2, secondLastValueOfArr, lastValueOfArr)
                    console.log(suggestAmountTwoArr)
                }
            }

            // //! 4th suggestion
            // let amountFour= Number(amountThree) * 2
            // setSuggestedAmountFour(amountFour)

            

            
        }
    }
    
    return (
        <div>
            <input type="text" value={result} onChange={e=>setResult(e.target.value)} onKeyUp={handleInput}/>
           
           {/* Suggested amounts with the amount needs to pay */}

           <button>{suggestedAmountFour}</button>
           <button>{suggestedAmountThree}</button>
           <button>{suggestedAmountTwo}</button>
           <button>{suggestedAmountOne}</button>
           <button>{result}</button>
           
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
