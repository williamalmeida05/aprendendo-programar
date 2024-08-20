/*  OPERADOR TERNÁRIO OU CONDICIONAL

    ? se
    : se não

 */

    const rain = true

    const umbrela = rain ? 'levar guarda chuva' : 'não levar guarda chuva'

    console.log(umbrela)

    //  PRECISO TRANSFERIR MEU DINHEIRO

    const balance = true
    const isNotBlocked = false
    const accountExist = true

    const transferOk = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

    console.log(transferOk)
