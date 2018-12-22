/* given a string, replace every letter with its position in the alphabet.*/

function alphabetPosition(text) {
  text = text.replace(/\s+/g,'');
  text = text.toLowerCase();
  var alpha = {};
  var answer = "";
  var a = 97;
  for (var i = 0; i<26; i++)
    alpha[String.fromCharCode(a + i)] = i+1;
  for (var i = 0; i<text.length; i++){
    if (alpha[text[i]]!= undefined){
      answer += alpha[text[i]]+ " ";
    }
  }
  return answer.trim();
}
