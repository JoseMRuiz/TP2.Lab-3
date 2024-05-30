function $(e){
    return document.getElementById(e);
}

const ladoA = $("ladoA");
const ladoB = $("ladoB");
const ladoC = $("ladoC");
const resultado = $("resultado")

const area = () =>{
    const baseTriangulo = ladoA.value - ladoC.value;
    const areaTriangulo = (ladoB.value * baseTriangulo) / 2;
    const areaRectangulo = ladoB.value * ladoC.value;
    const areaTotal = areaTriangulo + areaRectangulo;
    resultado.textContent = `El area del terreno es ${areaTotal}`;
}