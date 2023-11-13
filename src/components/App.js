import React, { Component, useState } from 'react';
import '../scss/styles.scss'

const App = () => {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [operatorClicked, setOperatorClicked] = useState(false);
    console.log(operatorClicked)

    const handleClick = (e) => {
        setValue(value + e.target.value)
        setOperatorClicked(false)
    }

    const handleOperator = (e) => {
        if (!operatorClicked) {
            setValue(value + e.target.value)
            setOperatorClicked(true)
        }
        else{
            setValue(value.slice(0,-1) + e.target.value)
        }
        }
    

    const handleCalculate = () => {
        try {
            setResult(eval(value))
        } catch (error) {
            setValue("Error")
        }
        setOperatorClicked(false) 
    }

        return (
            <>
              <div className='container'>
                <div className='row '> 
                    <div className='column d-flex flex-column justify-content-center align-items-center'> 
                        <form className='form bg-primary'> 
                            <div className=''> 

                            <input type="text" 
                                    value={value}
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm">
                                </input>

                                <input type="text" 
                                    value={result}
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm">
                                </input>                                    

                            </div>
                            <div className=''> 
                                <input type="button" value="7" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="8" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="9" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="*" className='btn btn-danger' onClick={handleOperator}/> 
                            </div>
                            <div className=''> 
                                <input type="button" value="4" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="5" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="6" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="-" className='btn btn-danger' onClick={handleOperator}/> 
                            </div>
                            <div className=''> 
                                <input type="button" value="1" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="2" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="3" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="+" className='btn btn-danger' onClick={handleOperator}/> 
                                <input type="button" value="." className='btn btn-danger' onClick={handleClick}/> 
                            </div>
                            <div className=''>
                                <input type="button" value="C" className='btn btn-danger' onClick={() => (setValue(""), setResult(""))}/>
                                <input type="button" value="DEL" className='btn btn-danger' onClick={() => (setValue(value.toString().slice(0, -1)), setResult(""))}/>
                                <input type="button" value="0" className='btn btn-danger' onClick={handleClick}/> 
                                <input type="button" value="/" className='btn btn-danger' onClick={handleOperator}/> 
                                <input type="button" value="=" className='btn btn-danger' onClick={handleCalculate}/> 
                            </div>
                           
                        </form>

                        
                      
                    </div>
                </div>
              </div>
            </>
        );
    
}

export default App;