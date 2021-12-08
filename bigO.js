//Counting Operations

function addUpTo(n) {
    let total = 0
    for (let i =0; i<=n; i++) {
        total += i
    }
    return total
}

//Tenemos un total de n operaciones,
//aunque en el fondo son mas,
// n ---> suma loop
// n ---> asignación loop final
// n ---> suma total
// n ---> asignacion total
// n ---> asignacion primer total
// n ---> asignacion loop inicial
// n ---> comparacion loop

