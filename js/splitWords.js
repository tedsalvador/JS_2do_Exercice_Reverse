//Se recibir una oracion o cadena y se debe separar por un delimitador
// y las palabras separadas se deben volver a mostrar en orden inverso.

export function Split_Reverse_Phrase(strPhrase, strSeparator){
    let strSplitWords="";
    let strReversed="";
    strSplitWords = strPhrase.split(strSeparator);
    strReversed = strSplitWords.reverse().join(" ");
    return strReversed;
}