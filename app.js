import { printTerminal } from "./js/printData.js";
import {Split_Reverse_Phrase} from "./js/splitWords.js"

let strPhraseToSplit = `Es el parrafo a separar de prueba a ver como funciona sera sera`;
let strParamSeparator = " ";

function app(){
 printTerminal("Cadena Original    ==>> " + strPhraseToSplit);
 printTerminal("Resultado esperado ==>> " + Split_Reverse_Phrase(strPhraseToSplit, strParamSeparator))
}

app()