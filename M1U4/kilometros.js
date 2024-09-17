const kilometros = prompt("ingrese kilometros:")

    if (kilometros >= 0 && kilometros <= 1000) {
    document.write("Pie")}
    else if (kilometros >= 1000 && kilometros < 10000) {
    document.write("caminando")}
    else if (kilometros >= 10000 && kilometros < 30000) {
    document.write("colectivo")}
    else if (kilometros >= 30000 && kilometros < 100000) {
    document.write("auto")}
    else(kilometros >= 100000);{
    document.write("avion")}
