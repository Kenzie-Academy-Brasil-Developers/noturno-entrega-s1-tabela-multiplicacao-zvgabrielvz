function tabelaMultiplicacao10() { 
  
    let table10 = [];
    for (let count10 = 0; count10 <= 10; count10++) {
        table10[count10] = [];
        for(let secondCount10 = 0; secondCount10 <= 10; secondCount10++){
            table10[count10].push(secondCount10);
        }
    }
    console.table(table10)
}

function tabelaMultiplicacao(n) { 
    let table = [];
    for (let count = 0; count <= n; count++) {
        table[count] = [];
        for(let secondCount = 0; secondCount <= n; secondCount++){
            table[count].push(count * secondCount);
        }
    }
    console.table(table)
}