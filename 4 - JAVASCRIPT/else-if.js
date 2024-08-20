/*  CONTROLE DE FLUXO - CONDICIONAIS - IF ELSE  

    if = se
    else = se não 
    else if = mais se

*/

const temperature = 20

if(temperature >= 36 && temperature <= 39){
    console.log('A pessoa está saudável')
}else if(temperature > 39){
    console.log('A pessoa está com febre')
}else{
    console.log('A pessoa está com a temperatura muito baixa, procure um médico')
}