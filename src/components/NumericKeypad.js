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

            //! 2nd suggestion
            // console.log(Math.trunc(Number(result.replace(/,/g, "."))))  
            let baseAmount= Math.trunc(Number(result.replace(/,/g, ".")))
            setSuggestedAmountOne(baseAmount +1)  


            //! 3rd suggestion
            let amountOneArr=(baseAmount +1).toString().split("");
            let amountTwo;
            if(amountOneArr[amountOneArr.length-1]==="0" || amountOneArr[amountOneArr.length-1] ==="5"){
                amountTwo= (Number(amountOneArr[amountOneArr.length-2])+1).toString().concat("0")
                setSuggestedAmountTwo(amountTwo)
                    
            } 
            
            if(amountOneArr[amountOneArr.length-1]>"0" && amountOneArr[amountOneArr.length-1]<"5"){
                amountTwo=(amountOneArr[amountOneArr.length-2]).concat("5")
                setSuggestedAmountTwo(amountTwo)
                
            }
            
            
            if(amountOneArr[amountOneArr.length-1]>"5"){
                amountTwo= (Number(amountOneArr[amountOneArr.length-2])+1).toString().concat("0")
                setSuggestedAmountTwo(amountTwo)
                
            }

            //! 4th suggestion
            let amountTwoArr= amountTwo.split("");
            let amountThree;
            if(amountTwoArr[amountTwoArr.length-2]<"5"){
                amountThree= "50"
                setSuggestedAmountThree(amountThree)
            }
            
            
            if(amountTwoArr[amountTwoArr.length-2]>"5"){
                amountThree= "100"
                setSuggestedAmountThree(amountThree)
            }

            //! 5th suggestion
            let amountFour= Number(amountThree) * 2
            setSuggestedAmountFour(amountFour)

            

            
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
