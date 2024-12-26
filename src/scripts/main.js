AOS.init();

const dataDoEvento = new Date("Aug 08, 2025 22:00");
const TimeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();

    const distancia = TimeStampDoEvento - timeStampDoAtual;

    const diasms = 1000 * 60 * 60 * 24;
    const horasms = 1000 * 60 * 60;
    const minms = 1000 * 60;

    const dias = Math.floor(distancia / diasms);
    const horas = Math.floor((distancia % diasms) / horasms);
    const min = Math.floor((distancia % horasms) / minms);
    const segundos = Math.floor((distancia % minms) / 1000);

    console.log(dias);
    console.log(horas);
    console.log(min);
    console.log(segundos);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${min}m ${segundos}s`;

    if(distancia < 0){
        clearInterval(contaHoras);
        
        const contagem = document.getElementById('contagem');
        const anonovo = document.getElementById('aniversario');

        contagem.style.display = 'none';
        anonovo.style.display = 'block';
    }
}, 1000);