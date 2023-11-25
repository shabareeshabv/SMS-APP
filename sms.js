let textareaEL = document.querySelector('#text-area');
let charCountEL = document.querySelector('#char-count');

textareaEL.addEventListener('input', function() {
  let textLength = textareaEL.value.length;
  let remainingCharacters = 100 - textLength;
  
  if (remainingCharacters < 0) {
    charCountEL.innerText = '0';
  } else {
    charCountEL.innerText = remainingCharacters;
  }
});
