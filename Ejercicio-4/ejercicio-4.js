document.getElementById('calcButton').addEventListener('click', function() {
    // Obtén los valores de los inputs
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    
    // Realiza algún cálculo o procesamiento 
    let resultado = peso / (altura ** 2);;
    
    // Muestra el resultado 
    alert(`Su imc es de ${resultado}`);
});