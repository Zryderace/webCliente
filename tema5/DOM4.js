window.onload = function(){
    window.aumentarProgreso = aumentarProgreso;
    window.carrera = carrera;

    function aumentarProgreso(){
        let meter = document.getElementById("meter");
        let progress = document.getElementById("progress");
        // console.log(typeof(meterAumentar))
        if (meter.value<100&&typeof(meterAumentar)=="undefined") {
            meterAumentar = setInterval(incrementarMeter, 500);
        }
        if (meter.value>=100) {
            clearInterval(meterAumentar)
        }
        if (progress.value<100&&typeof(progressAumentar)=="undefined") {
            progressAumentar = setInterval(incrementarProgress, 500);
        }
        if (progress.value>=100) {
            clearInterval(progressAumentar)
        }
    }

    function incrementarMeter(){
        let meter = document.getElementById("meter");
        meter.value+=1;
    }

    function incrementarProgress(){
        let progress = document.getElementById("progress");
        if (progress.value>100) {
            progress.value=100
        } else {
            progress.value+=2;
        }
    }

    function carrera(){
        let divs = document.getElementsByClassName("ej16")
        let velocidad = []
        for (let i = 0; i < divs.length; i++) {
            velocidad[i] = (Math.floor(Math.random() * 100) + 1)
        }
        if (typeof(carrerita)=="undefined") {
            carrerita = setInterval(movimiento,500,velocidad,divs)
        }
    }
    //hace un extra idk why
    function movimiento(velocidad,divs){
        for (let i = 0; i < divs.length; i++) {
            let elementRect = divs[i].getBoundingClientRect();
            let windowWidth = window.innerWidth;
            if (elementRect.right>=windowWidth) {
                clearInterval(carrerita)
                
            } else {
                let computedStyle = window.getComputedStyle(divs[i])
                let izquierdaActual = parseInt(computedStyle.getPropertyValue("margin-left"))
                divs[i].style.setProperty("margin-left",`${izquierdaActual + velocidad[i]}px`) 
    
            }
        }
    }
}