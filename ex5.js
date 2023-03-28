function stringReversa(str){
    var stringInvertida = ""
    for(var i = str.length - 1; i >= 0; i--){
        stringInvertida += str[i]       
    }
    console.log(stringInvertida) 
}
stringReversa('Hello world')

