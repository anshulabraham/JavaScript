import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal (0 times):<strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                        <input type="checkbox" /> This Order contains gift </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
}

export default Subtotal
