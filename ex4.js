function faturamentoMensal(){
    const sp = 67836.43
    const rj = 36678.66
    const mg = 29229.88
    const es = 27165.48
    const outrasCid = 19849.53

    total = sp + rj + mg + es + outrasCid
    porcSP = ((sp/total)*100).toFixed(2)
    porcRJ = ((rj/total)*100).toFixed(2)
    porcMG = ((mg/total)*100).toFixed(2)
    porcES = ((es/total)*100).toFixed(2)
    porOC = ((outrasCid/total)*100).toFixed(2)    
    
    console.log(`O total de vendas das distribuidora é R$${total}\nO percentual vendido é de: \nSP = ${porcSP}%\nRJ = ${porcRJ}%\nMG = ${porcMG}%\nSP = ${porcES}%\nJÁ EM OUTROS ESTADOS = ${porOC}%\n`)  
}

faturamentoMensal()
