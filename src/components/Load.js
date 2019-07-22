import React from 'react';

let qwe=(e, loadData)=>{
  let reader = new FileReader()
  let textFile = /text.*/;
  let preview = document.getElementById('show-text');
  if (e.type.match(textFile)) {
    reader.onload = function (event) {
      // console.log(event.target.result);
      loadData(event.target.result);
      preview.innerHTML = '<span>Data Successfully loaded</span>';
    }
  } else {
    preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>"; 
  }
  reader.readAsText(e);
}

const Load = ({ loadData = () => { }, value}) => {
  return (
    <div>
      <input type='file' name='Load' onChange={(e) => qwe(e.target.files[0], loadData.bind(value))} />
      <div id="show-text"></div>
    </div>
  );
};

export default Load;