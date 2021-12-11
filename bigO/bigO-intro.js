//Counting Operations

function addUpTo(n) {
    let total = 0
    for (let i =0; i<=n; i++) {
        total += i
    }
    return total
}

//Tenemos un total de n operaciones (veces que el loop es llamado),
//aunque en el fondo son mas, (operaciones que se realizan dentro del loop)
// n ---> suma loop
// n ---> asignación loop final
// n ---> suma total
// n ---> asignacion total
// n ---> asignacion primer total
// n ---> asignacion loop inicial
// n ---> comparacion loop

function addUpTo2(n) {
    return n * (n + 1) / 2
}

//Hace lo mismo que la funcion anterior
//pero en 3 operaciones

//-----------------------------------
//  La primera funcion es O(n),
// la segunda es O(1)
//

// OMG MOAR EXAMPLEZ
funcion printAllPair(n) {
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}
// Esta funcion es:
// O(n) operacions inside of O(n) operations
// O(n * n)