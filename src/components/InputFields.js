import React from 'react'
import styles from "./NumericKeypad.module.css"

const InputFields = ({customerNeedToPay, setCustomerNeedToPay, receivedFromCustomer, setReceivedFromCustomer, handleInput}) => {
    return (
        <div className={styles["input-container"]}>
            <div className={styles["input-field"]}>
                <div className={styles.bill}>
                    <label>Zu zahlen</label>
                    <input type="text" value={customerNeedToPay} onChange={e=>setCustomerNeedToPay(e.target.value)} onKeyUp={handleInput}/>
                </div>
                <div className={styles.received}>
                        <label>Gegeben</label>
                        <input type="text" value={receivedFromCustomer} onChange={e=>setReceivedFromCustomer(e.target.value)}/>
                </div>
            </div>
             <div className={styles["option-btn"]}>
                <button id={styles.highlight}>Bar</button>
                <button>EC</button>
                <button>Kreditkarte</button>
                <button>Gutschein</button>
                <button>Sonstige</button>
            </div>
        </div>
        
    )
}

export default InputFields
