import PropTypes from "prop-types"
import { useState } from "react";

function CoinConverter({coin}){
    const [flip, setFlip] = useState(false)
    const [inputValue, setInputValue] = useState(0)

    const onFlipButtonClick = () => {
        setFlip((current) => !current)
        setInputValue(0)
    }

    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
    <div>
        <hr />
        <h2>{`${coin.id} converter`}</h2>
        
        <div>
            <label htmlFor="USD">USD : </label>
            <input id="USD" placeholder="0" type="number" disabled={flip} value={flip ? inputValue * coin.quotes.USD.price : inputValue} onChange={onChangeInputValue}/>
        </div>

        <div>
            <label htmlFor="coin">{coin.symbol} : </label>
            <input id="coin" placeholder="0" type="number" disabled={!flip} value={flip ? inputValue : inputValue / coin.quotes.USD.price} onChange={onChangeInputValue}/>
        </div>

        <button onClick={onFlipButtonClick}>{flip ? `USD to ${coin.symbol}` : `${coin.symbol} to USD`}</button>
    </div>
    );
}

CoinConverter.propTypes = {
    coin: PropTypes.object
}

export default CoinConverter;