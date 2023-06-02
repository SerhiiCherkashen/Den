import React from "react";
import './File.css'

const File = () => {
  return (
    <div className="wrapper" >
      <span className="button" >
        <button>Ua</button>
        <button>Uk</button>
        <button>Rus</button>
      </span>
      <div className="wrapperTextsInputs" >
        <div className="textsInputs" >
          <p>Name</p>
          <input />
          <p>Familia </p>
          <input />
          <p> Data</p>
          <input />
          <div className="DatePol" >
            <span>Date</span>
            <span>Pol</span>
          </div>
          <div className="dateInput" >
            <input />
            <input />
          </div>
          <input className="width" />


        </div>
      </div>
    </div>
  )
}


export default File
















