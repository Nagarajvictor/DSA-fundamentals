function removeChar(text, index) {
    return(text.slice(0,index)+text.slice(index+1));
}

function remove(text) {
    var prevChar = "";
    var finalT = text;
    var i = 0;
    for(i = 0; i < text.length; i++) {
        if(finalT.charAt(i) == prevChar) {
            if(i > finalT.length) {
                return finalT;
            } else {
                finalT = removeChar(finalT, i);
                i--;
            }
        } else {
            prevChar = finalT.charAt(i);
        }
    }
    return finalT;
}
console.log(remove('rrrreeeaaaaccccctttt'));