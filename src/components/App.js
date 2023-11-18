import React, { Component, useState } from 'react';
import '../scss/styles.scss'
import { MdLightMode, MdDarkMode } from "react-icons/md";

const App = () => {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [mode, setMode] = useState(true);
    const [operatorClicked, setOperatorClicked] = useState(false);

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
            setResult(eval(value).toFixed(2))
        } catch (error) {
            if (value.length === 0) {
                setValue("")
            } else {
                setValue("Error")
            }
           
        }
        setOperatorClicked(false) 
        
    }

    const handleToggle = () => {
        setMode(!mode)
    }

        return (
            <>
              <div className='container p-5 d-flex flex-column justify-content-center align-items-center '>
                <div className='row '>
                    <div className='column'> 
                        <div className="form-check form-switch d-flex align-items-center justify-content-center p-1">
                        
                             <input className={`form-check-input  ${mode ? "bg-light" : "bg-dark"}`} type="checkbox" id="flexSwitchCheckChecked" onChange={handleToggle}/>
                             <label className="form-check-label m-1" htmlFor="flexSwitchCheckChecked">{ mode  ? <MdLightMode color="gray"/> : <MdDarkMode /> }</label>
                        </div>
                        <form className={`form border border-2 rounded-5 p-3 shadow ${mode ? "" : "bg-dark"}`}> 
                            <div className='title p-2'> 
                                <h2 className={`text-end  overflow-hidden result ${mode ? "text-secondary " : "text-light"}`}> {result}</h2>
                                <h5 className={`text-end p-1 overflow-hidden ${mode ? "text-secondary " : "text-light"}`}> {value} </h5>                           
                            </div>
                           
                            <div className='border-top py-1'> 
                                <input type="button" value="C" className={`btn text-warning ${mode ? "btn-light" : "btn-dark "}`} onClick={() => (setValue(""), setResult(""))}/>
                                <input type="button" value="DEL" className={`btn text-warning ${mode ? "btn-light" : "btn-dark "}`} onClick={() => (setValue(value.toString().slice(0, -1)), setResult(""))}/>
                                <input type="button" value="%" className={`btn text-warning ${mode ? "btn-light" : "btn-dark "}`} onClick={() => result > 0 ? setResult(result / 100) : value > 0 ? setResult(value / 100) : ""}/>  
                                <input type="button" value="/" className={`btn text-warning ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleOperator}/> 
                            </div>
                            <div className=''> 
                                <input type="button" value="7" className={`btn ${mode ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="8" className={`btn ${mode ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="9" className={`btn ${mode ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="*" className={`btn text-warning ${mode ? "btn-light" : "btn-dark "}`} onClick={handleOperator}/> 
                            </div>
                            <div className=''> 
                                <input type="button" value="4" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="5" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="6" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="-" className={`btn text-warning ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleOperator}/> 
                            </div>
                            <div className=''> 
                                <input type="button" value="1" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="2" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="3" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/> 
                                <input type="button" value="+" className={`btn text-warning ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleOperator}/> 
                            </div>
                            <div className=''>
                                <input type="button" value="0" className={`btn ${mode ? "btn-light" : "btn-dark "}`} onClick={handleClick}/>
                                <input type="button" value="00" className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleClick}/>  
                                <input type="button" value="." className={`btn ${mode  ? "btn-light" : "btn-dark "}`} onClick={handleOperator}/> 
                                <input type="button" value="=" className={`btn ${mode  ? "btn-warning" : "btn-warning "}`} onClick={handleCalculate}/>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
            </>
        );
    
}

export default App;