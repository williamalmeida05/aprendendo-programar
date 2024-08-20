/* Ex 06 - Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10.
 Cada nota deve conter uma mensagem diferente.*/

    let noteJury = Math.floor(Math.random() * 10) + 1;
    
    switch(noteJury){
        case 0:
            noteJury = "Nota 0 errou tudo"
        case 1:
            noteJury = "Nota 1 porque foi ruim"
        break

        case 2:
            noteJury = "Nota 2 porque foi ruim na maior parte"
        break

        case 3:
            noteJury = "Nota 3 porque não está na média"
        break

        case 4:
            noteJury = "Nota 4 porque falta uns ponto para atingir a média"
        break

        case 5:
            noteJury = "Nota 5 porque falta uns ponto para ser acima da média"
        
        case 6:
            noteJury = "Nota 6 porque se saiu bem em alguns pontos"

        case 7:
            noteJury = "Nota 7 porque foi bem na maior parte da execução"

        case 8:
            noteJury = "Nota 8 porque se saiu bem"

        case 9:
            noteJury = "Nota 9 pois se saiu muito bem e foi um espetáculo"

        case 10:
            noteJury = "Nota 10 porque foi impecável na excecução"

        break

        default:
            noteJury = "invalido"
    } 

    console.log(noteJury)
    