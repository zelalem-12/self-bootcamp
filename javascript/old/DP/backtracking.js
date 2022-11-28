const wines = [2,3,5,1,4]
//[7,11,5,9,20,17,16,13,8,2,1,14,4,3,15,10,12,18,19,6];

//  Generating random numbers for stress test
// for(let i = 0;i < 20; i++){
//     let  num = Math.ceil(Math.random() * 20);
//     while(wines.indexOf(num) !== -1){
//         num = Math.ceil(Math.random() * 20)
//     }
//     wines.push(num);
// }

const numberOfWins = wines.length;
let count = 0;
const profit = (year, start, end) =>{
    count++;
    if(start  > end) return 0;
   return Math.max(
    profit(year + 1, start + 1, end) + year * wines[start],
    profit(year + 1, start, end - 1) + year * wines[end] )

};


// Why the result varies 
const fastProfit = (start, end) =>{
    count++;
    if(start  > end) return 0;
    const unsoldWines = end - start + 1; // Find unsold wines at any year start and end is inclusive;
    const year =  numberOfWins - unsoldWines + 1; // Number of wines is equal to number of wined at the end;
   return Math.max(
    fastProfit(start + 1, end) + year * wines[start],
    fastProfit(start, end - 1) + year * wines[end]
    );

};
const cache = Array(numberOfWins).fill(Array(numberOfWins).fill(-1));
const cachedProfit = (start, end) =>{
    console.log(cache)
    if(start  > end) return 0;
    if(cache[start][end] !== -1) return cache[start][end];
    const unsoldWines = end - start + 1; // Find unsold wines at any year start and end is inclusive;
    const year =  numberOfWins - unsoldWines + 1; // Number of wines is equal to number of wined at the end;
    return cache[start][end] = Math.max(
        cachedProfit(start + 1, end) + year * wines[start],
        cachedProfit(start, end - 1) + year * wines[end] 
    );

};



// console.log(profit(1, 0, 4));
// console.log({count})
// count = 0;
//  console.log(fastProfit(0, 4));
//  console.log({count})
// count = 0;
console.log(cachedProfit(0, 4));
