const calcular = document.getElementById('calcular');

function psi(){

    const genero = document.getElementById('genero').value;
    const h = document.getElementById('altura').value;


    const resultado = document.getElementById('resultado');

    if (genero == ('M','m') && h !== '') {
        const valorPSI = ((72.7 * h) - 58 ).toFixed(1);

        resultado.textContent = `Seu gênero é Masculino seu Peso Ideal é ${valorPSI}`;
        
    }

    else if (genero == ('F','f') && h !== '') {
        const valorPSI = ((62.1*h) - 44.7).toFixed(1);
        resultado.textContent = `Seu gênero é Feminino seu Peso Ideal é ${valorPSI}`;
    }
   
    }
    calcular.addEventListener('click', psi);