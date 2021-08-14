import React, { useState } from 'react';
import styles from "./NumericKeypad.module.css";

function NumericKeypad() {
    const [result, setResult] = useState("")

    const handleButton =(e)=>{
        if(e.target.innerText==="C"){
            setResult(result.slice(0, result.length-1))
        }else{
            setResult(result.concat(e.target.innerText))
        }
    }
    
    return (
        <div>
            <form>
                    <input type="text" value={result} onChange={handleButton}/>
                </form>
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
