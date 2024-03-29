import React, { useEffect, useState } from 'react'
import pic from '../Assets/curencyconverter.jpeg'
import axios from 'axios';


function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setconvertedAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);

    const [isDark,setIsDark]=useState(false);

    const getRates = () => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`).then((response) => {
            // console.log(response.data.rates);
            setExchangeRate(response.data.rates[toCurrency])
        }).catch((error) => {
            console.log(error)
        })
    }
    // console.log(exchangeRate);

    useEffect(() => {
        getRates()
    }, [fromCurrency, toCurrency]);

    useEffect(() => {
        setconvertedAmount(amount * exchangeRate)
    }, [amount, exchangeRate])

    return (
        <div>
            <div className='box1 text-light mt-2 rounded-4 p-4'>
                <div className='whole'>
                    <h1>Currency converter</h1>
                    <div className=' mt-5 text-center'><img src={pic} /></div>
                    <div className='amount mt-5'>
                        <label className='form-label'>Amount</label>
                        <input type='number' className='form-control' value={amount} onChange={(event) => setAmount(event.target.value)}></input>
                    </div>

                    <div className='input-box mt-2'>
                        <label className='form-label'>Currency from</label>
                        <select className='form-select' value={fromCurrency} onChange={(event) => setFromCurrency(event.target.value)}>
                            <option value="USD" >USD - United States Dollar</option>
                            <option value="EUR" >EUR - Euro</option>
                            <option value="GBP" >GBP - British Pound Sterling</option>
                            <option value="JPY" >JPY - Japanese Yen</option>
                            <option value="AUD" >AUD - Australian Dollar</option>
                            <option value="CAD" >CAD - Canadian Dollar</option>
                            <option value="CNY" >CNY - Chinese Yuan</option>
                            <option value="INR" >INR - Indian Rupee</option>
                            <option value="BRL" >BRL - Brazilian Real</option>
                            <option value="ZAR" >ZAR - South African Randr</option>
                        </select>
                    </div>
                    <div className='input-box mt-3'>
                        <label className='form-label'>To Currency </label>
                        <select className='form-select' value={toCurrency} onChange={(event) => setToCurrency(event.target.value)}>
                            <option value="USD" >USD - United States Dollar</option>
                            <option value="EUR" >EUR - Euro</option>
                            <option value="GBP" >GBP - British Pound Sterling</option>
                            <option value="JPY" >JPY - Japanese Yen</option>
                            <option value="AUD" >AUD - Australian Dollar</option>
                            <option value="CAD" >CAD - Canadian Dollar</option>
                            <option value="CNY" >CNY - Chinese Yuan</option>
                            <option value="INR" >INR - Indian Rupee</option>
                            <option value="BRL" >BRL - Brazilian Real</option>
                            <option value="ZAR" >ZAR - South African Randr</option>
                        </select>
                    </div>
                    <div className='footer mt-4 text-center border rounded-3 justify-content-center'>
                        <p className='m-auto p-2'> {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Currency