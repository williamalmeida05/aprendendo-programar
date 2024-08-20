/* Ex 08 - Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
 */

function calculaDesconto(name, value, isFirstPurchase, isCashPayment){

    if(isFirstPurchase && isCashPayment){
        if(value > 1000){
            discount = value * 0.3
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 30% de desconto e assim totalizando R$${(value - discount)}`)
        }
        else if(value < 500){
            discount = value * 0.2
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 20% de desconto e assim totalizando R$${(value - discount)}`)
        }
        else{
            discount = value * 0.25
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 25% de desconto e assim totalizando R$${(value - discount)}`)
        }
    }

    if(isFirstPurchase && !isCashPayment){
        if(value > 1000){
            discount = value * 0.2
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 20% de desconto e assim totalizando R$${(value - discount)}`)
        }else if(value < 500){
            discount = value * 0.1
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 10% de desconto e assim totalizando R$${(value - discount)}`)
        }else{
            discount = value * 0.15
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 15% de desconto e assim totalizando R$${(value - discount)}`)
        }
    }

    if(!isFirstPurchase && isCashPayment){
        if(value > 1000){
            discount = value * 0.20
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 20% de desconto e assim totalizando R$${(value - discount)}`)
        }else if(value < 500){
            discount = value * 0.10
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 10% de desconto e assim totalizando R$${(value - discount)}`)
        }else{
            discount = value * 0.15
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 15% de desconto e assim totalizando R$${(value - discount)}`)
        }
    }

    if(!isFirstPurchase && !isCashPayment){
        if(value > 1000){
            discount = value * 0.1
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 10% de desconto e assim totalizando R$${(value - discount)}`)
            
        }
        else if(value < 500){
            discount = Math.floor(Math.random() * 11) + 10;
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$${value} sem desconto`)
            console.log(`Mas não fique triste! Você adquiriu ${discount}% de desconto para a próxima compra`)
        }
        else{
            discount = value * 0.75
            console.log(`Parabéns pela compra ${name}! Foi realizada a compra de R$ ${value} e obteve 5% de desconto e assim totalizando R$${(value - discount)}`)
        }
    }

}

calculaDesconto('Will', 1200,false,false)
calculaDesconto('Will', 900, false,false)
calculaDesconto('Will', 200, false,false)