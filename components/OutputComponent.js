import React from 'react';

const OutputComponent = ({ output }) => {
  return (
    <div className='OutputArea'>
      <h2>Output:</h2>
      <textarea cols="50" rows="10" placeholder='Output will Be Displayed Here' defaultValue={output}></textarea>
    </div>
  );
};

export default OutputComponent;
