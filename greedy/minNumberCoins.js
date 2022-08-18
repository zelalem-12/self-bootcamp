function minNumberOfCoinsToChangeMoney(money, coins){
    let numberOfCoins = 0;
    coins.sort((a, b) => b - a)// sort the denominations in descending order;
    const no_denominations = coins.length;


    for(let i =  0; i < no_denominations ; i++){
        while(money >= coins[i]){
            money = money - coins[i]
            numberOfCoins++;
        }
    }
 
    return numberOfCoins;
}


console.log(minNumberOfCoinsToChangeMoney(28,[1, 5, 10]))
console.log(minNumberOfCoinsToChangeMoney(8, [1, 4, 6]))