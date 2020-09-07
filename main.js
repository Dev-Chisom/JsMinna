let sentence = "Run aS Fast As a biG doGGying Level Anna";

function reconstructSentence(sentence) {
    const splitSentence = sentence.split(" ");
    const upperCased = [];
    const palindrome = [];
    const wordsEndingWithING = [];
    splitSentence.forEach(element => {
        if (element.charAt(0) == element.charAt(0).toUpperCase()) {
            upperCased.push(element);
        }
    });
    splitSentence.forEach(element => {
        const lastThreeChars = element.endsWith('ing');
        if (lastThreeChars) {
            wordsEndingWithING.push(element);
        }
    });
    splitSentence.forEach(element =>  {
        console.log(element)
        console.log(element.split("").reverse().join(""));
         element = element.toLowerCase();
        if ((element.split("").reverse().join("")) === element) {
            console.log(element)
            palindrome.push(element);
             console.log(element)
        }
        
    })
    return {
        'uppercased': upperCased.length > 0 ? upperCased : "No uppercased words found",
        'ing': wordsEndingWithING.length > 0 ? wordsEndingWithING : "No words ending with 'ING' found",
        'palindrome': palindrome.length > 0 ? palindrome : "No Palindrome Found"
    };
}

console.log(reconstructSentence(sentence));