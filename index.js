      let date_ini = new Date(document.form_main.date_ini.value);
      let date_end = new Date(document.form_main.date_end.value);
    
      let diff = date_end.getTime() - date_ini.getTime();
function calcular(porce) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    



    // O salario do cliente
    var salario = Number(document.getElementById("salario").value)
    // Horas mensais do cliente
    var horasMensais = Number(document.getElementById("horasMensais").value)
    // Total de horas extras (50%) do cliente
    var horaExtra50 = Number(document.getElementById("horaExtra50").value)

    // Calculo do valor por cada hora trabalhada do cliente
    var valorHora = salario/horasMensais;
    
    if (salario == 0 ||horasMensais == 0 )  {
        alert("[Erro!] Tente preencher todos os dados")
    }
    else {
        if (horaExtra50 == 0){
            var valorHoraExtra50 = 0
        }
        else {
            
            var valorHoraExtra50 = valorHora*1.5
        }

        var total50 = (valorHoraExtra50*horaExtra50)
    // Decimo terceiro salario do cliente
    var diasTrabalho = Number(Math.floor(diff / day));
    var mesTrabalho = diasTrabalho / 30
    var dTerceiro = (salario / 12) * mesTrabalho

    //ferias proporcionais
    var fProporcionais = salario * mesTrabalho /12


        //O que vai aparecer no html

        document.getElementById("salarioRes").innerHTML= 'R$' + salario.toFixed(2)
        document.getElementById('horaTrabalhoRes').innerHTML= 'R$' + valorHora.toFixed(2)
        document.getElementById('horaExtra50Res').innerHTML= 'R$'+total50.toFixed(2)
        document.getElementById('valorTotalExtra').innerHTML= 'R$'+(total50).toFixed(2)
        document.getElementById('dTerceiro').innerHTML= 'R$'+(dTerceiro).toFixed(2)
        document.getElementById('fProporcionais').innerHTML= 'R$'+(fProporcionais).toFixed(2)
        document.getElementById('total').innerHTML= 'R$'+(valorHora+total50+dTerceiro+fProporcionais).toFixed(2)

        var visibilidade = true;
        
        
            document.getElementById("imprimir").style.display = "block";
        
    }
    

    
    }

