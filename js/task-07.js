

const textEl = document.getElementById('text');
console.log(textEl);

const inputEl = document.getElementById('font-size-control');
 console.log(inputEl);

inputEl.addEventListener("input", (element) => {
  const size = inputEl.value;
  
    

    textEl.style.fontSize = size + "px";
     
    
    console.log(size);
});

