window.onload = function () {
    window.cambiarColor = cambiarColor;
    window.ej11 = ej11;
    window.ej2 = ej2;

    function cambiarColor(element) {
        // let valor = document.getElementById(`element`);
        // valor.getAttribute(`value`);
        switch (element.getAttribute(`value`)) {
            case `1`:
                document.body.style.backgroundColor = `red`;
                break;
            case `2`:
                document.body.style.backgroundColor = `green`
                break;
            case `3`:
                document.body.style.backgroundColor = `blue`
                break;
            case `4`:
                document.body.style.backgroundColor = `black`
                break;
            case `5`:
                document.body.style.backgroundColor = `white`
                break;
            default:
                break;
        }

    }

    var cells = document.getElementsByTagName(`td`);
    for (var i = 0; i < cells.length; i++) {
        cells.attachEventListener("click", setBackgroundColor);
    }

    function setBackgroundColor() {
        this.style.backgroundColor = 'green';
    }

}