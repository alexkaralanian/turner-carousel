import React from 'react';
import './InputElement.css';

const InputElement = ({handleChange, handleSubmit, inputValue}) =>  (
  <div className="Row animated fadeIn">
    <form
      className="input-row"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="please enter a number..."
      />
      <button>
        <span>submit</span>
      </button>
    </form>
  </div>
);

export default InputElement;
