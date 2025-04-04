function copyText() {

    let outputText = document.getElementById("outputText");
  
    outputText.select();
    outputText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(outputText.value)
  
        .then(() => {
            alert("Copied to clipboard!");
        })
  
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
  }
  
  function clearText() {

    document.getElementById("inputText").value = "";
    
    document.getElementById("outputText").value = "";

}

const consonantVowelMap = {

  "ka": "ᜃ", "ga": "ᜄ", "nga": "ᜅ", "ta": "ᜆ", "da": "ᜇ",
  "na": "ᜈ", "pa": "ᜉ", "fa": "ᜉ", "ba": "ᜊ", "va": "ᜊ", "ma": "ᜋ", "ya": "ᜌ",
  "ra": "ᜍ", "la": "ᜎ", "wa": "ᜏ", "sa": "ᜐ", "ha": "ᜑ",

  "ki": "ᜃᜒ", "gi": "ᜄᜒ", "ngi": "ᜅᜒ", "ti": "ᜆᜒ", "di": "ᜇᜒ",
  "ni": "ᜈᜒ", "pi": "ᜉᜒ", "fi": "ᜉᜒ", "bi": "ᜊᜒ", "vi": "ᜊᜒ", "mi": "ᜋᜒ", "yi": "ᜌᜒ",
  "ri": "ᜇᜒ", "li": "ᜎᜒ", "wi": "ᜏᜒ", "si": "ᜐᜒ", "hi": "ᜑᜒ",

  "ke": "ᜃᜒ", "ge": "ᜄᜒ", "nge": "ᜅᜒ", "te": "ᜆᜒ", "de": "ᜇᜒ",
  "ne": "ᜈᜒ", "pe": "ᜉᜒ", "fe": "ᜉᜒ", "be": "ᜊᜒ", "ve": "ᜊᜒ", "me": "ᜋᜒ", "ye": "ᜌᜒ",
  "re": "ᜇᜒ", "le": "ᜎᜒ", "we": "ᜏᜒ", "se": "ᜐᜒ", "he": "ᜑᜒ",

  "ko": "ᜃᜓ", "go": "ᜄᜓ", "ngo": "ᜅᜓ", "to": "ᜆᜓ", "do": "ᜇᜓ",
  "no": "ᜈᜓ", "po": "ᜉᜓ", "fo": "ᜉᜓ", "bo": "ᜊᜓ", "vo": "ᜊᜓ", "mo": "ᜋᜓ", "yo": "ᜌᜓ",
  "ro": "ᜇᜓ", "lo": "ᜎᜓ", "wo": "ᜏᜓ", "so": "ᜐᜓ", "ho": "ᜑᜓ",

  "ku": "ᜃᜓ", "gu": "ᜄᜓ", "ngu": "ᜅᜓ", "tu": "ᜆᜓ", "du": "ᜇᜓ",
  "nu": "ᜈᜓ", "pu": "ᜉᜓ", "fu": "ᜉᜓ", "bu": "ᜊᜓ", "vu": "ᜊᜓ", "mu": "ᜋᜓ", "yu": "ᜌᜓ",
  "ru": "ᜍᜓ", "lu": "ᜎᜓ", "wu": "ᜏᜓ", "su": "ᜐᜓ", "hu": "ᜑᜓ"
};

const consonantMap = {
  "c": "ᜃ᜔", "k": "ᜃ᜔", "g": "ᜄ᜔", "ng": "ᜅ᜔", "t": "ᜆ᜔", "d": "ᜇ᜔",
  "n": "ᜈ᜔", "p": "ᜉ᜔", "f": "ᜉ᜔", "b": "ᜊ᜔", "v": "ᜊ᜔", "m": "ᜋ᜔", "y": "ᜌ᜔",
  "r": "ᜍ᜔", "l": "ᜎ᜔", "w": "ᜏ᜔", "s": "ᜐ᜔", "h": "ᜑ᜔"
};

const vowelMap = {
  "a": "ᜀ", "i": "ᜁ", "e": "ᜁ", "o": "ᜂ", "u": "ᜂ"
};

function autoTranslate() {
    let inputText = document.getElementById("inputText").value.toLowerCase().trim();
    let translatedText = "";
    let i = 0;

    while (i < inputText.length) {
        let current = inputText[i];
        let next = inputText[i + 1] || "";
        let afterNext = inputText[i + 2] || "";
        
        let threeLetter = inputText.substring(i, i + 3); // Check for "ngi"
        let twoLetter = inputText.substring(i, i + 2);

        if (consonantVowelMap[threeLetter]) {  
            translatedText += consonantVowelMap[threeLetter];  
            i += 3;   
        }  
            
        else if (consonantVowelMap[twoLetter]) {  
            translatedText += consonantVowelMap[twoLetter];  
            i += 2;  
        }  
            
        else if (consonantMap[current]) {
            
            if (vowelMap[next]) {
                translatedText += consonantMap[current];  
            } else {
                translatedText += consonantMap[current] + "᜔";  
            }
            i++;  
        }  
        else if (vowelMap[current]) {  
            translatedText += vowelMap[current];  
            i++;  
        }  
        else {  
            translatedText += current;  
            i++;  
        }  
    }

    document.getElementById("outputText").value = translatedText.trim();
}
