import React from 'react';

let downloadTxtFile = (info) => {
  let avenger = 'Marvel$' + JSON.stringify(info);
  let element = document.createElement('a');
  let file = new Blob([avenger],{type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = 'myFile.txt';
  document.body.appendChild(element);
  element.click();
}

const Save = ({info}) => {
  return (
    <div>
      <button onClick = {downloadTxtFile.bind(null, info)}>
        Save
      </button>
    </div>
  );
};

export default Save;