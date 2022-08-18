function minNumberOfCoinsToChangeMoney(money, coins){
    if(money ===0) return 0;
    coins.sort((a, b) => b - a)// sort the denominations in descending order;
    const no_denominations = coins.length;

    for(let i = 0; i < no_denominations ; i++){
        if( money >= coins[i]){
            money = money - coins[i];
            break;
        }
    }
    //console.log(money)
    return 1 + minNumberOfCoinsToChangeMoney(money, coins)
}




console.log(minNumberOfCoinsToChangeMoney(28,[1, 5, 10]))
console.log(minNumberOfCoinsToChangeMoney(8, [1, 4, 6]))