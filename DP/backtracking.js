const prices = [2, 3, 5, 1, 4];

const profit = (year, start, end) =>{
    if(start  > end) return 0;
   return Math.max(profit(year + 1, start + 1, end) + year * prices[start],profit(year + 1, start, end - 1) + year * prices[end] )

};


console.log(profit(1, 0, 4))