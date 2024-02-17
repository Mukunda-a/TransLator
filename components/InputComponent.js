import React from 'react';

const InputComponent = ({ from, to, options, setInput, translate }) => {
  return (
    <div className='Lang'>
      <div className="fromlang">
        <h3>From ({from}):</h3>
        <select onChange={(e) => setInput(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div className="tolang">
        <h3>To ({to}):</h3>
        <select onChange={(e) => setInput(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div className='inputArea'>
        <h2>Input:</h2>
        <textarea cols="50" rows="10" placeholder='Enter Input' onInput={(e) => setInput(e.target.value)}></textarea>
        <button onClick={translate} className='btn'>
          Translate
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
