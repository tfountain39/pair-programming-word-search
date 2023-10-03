// wordSearch.js
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (let col = 0; col < letters[0]; col++) {
        let verticalWord = '';
        for (let row = 0; row < letters.length; row++) {
            verticalWord += letters[row][col];
        }
        if(verticalWord.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch