function calculaNum(i){
    var n = i 
    var contador
    var n0 = 0
    var n1 = 1
    var validacao = false

    if(n <= 2){
        num = n - 1
    } else {
        for(contador = 3; contador <= n; contador++){
            num = n0 + n1
            n0 = n1
            n1 = num 

                if (num == n){                    
                    validacao = true                
                }        
        }
        if (validacao == true){
            console.log("O número pertence à sequência.")
        } else {
            console.log("O número não pertence à sequência.")
        }
    }
} 

calculaNum(378)





