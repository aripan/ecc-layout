import React from 'react'

const InputFields = ({customerNeedToPay, setCustomerNeedToPay, receivedFromCustomer, setReceivedFromCustomer, handleInput}) => {
    return (
        <div>
            <input type="text" value={customerNeedToPay} onChange={e=>setCustomerNeedToPay(e.target.value)} onKeyUp={handleInput}/>
            <input type="text" value={receivedFromCustomer} onChange={e=>setReceivedFromCustomer(e.target.value)}/>
        </div>
    )
}

export default InputFields
