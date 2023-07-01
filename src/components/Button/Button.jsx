import React, {useState} from 'react';

const Button = ({action}) => {
  const [text, setText] = useState('follow');

  return (
    <button onClick={event => action(event, text)} type='button' className='button'>
      {/* {text} */}
    </button>
  );
};

export default Button;
