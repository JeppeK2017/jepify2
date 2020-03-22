import React, { useState } from 'react';

function jepify(text: String): String {
  const inputStringArray = text.split(' ');

  let result: string = '';

  if (inputStringArray.length > 1) {
    const firstString = inputStringArray.shift()!.toLowerCase();

    const camelWords = inputStringArray.map(s => s.charAt(0).toUpperCase() + s.substring(1)).join('');

    result = '#' + firstString + camelWords + 'Jep';
  } else if (inputStringArray.length === 1) {
    result = '#' + inputStringArray.pop()!.toLowerCase() + 'Jep';
  } else {
    result = '#Jep';
  }

  return result;
}

export const Jepifier: React.FC = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <input placeholder="Insert text here" value={input} onChange={e => setInput(e.target.value)} />
      <h2>{jepify(input)}</h2>
    </div>
  );
};
