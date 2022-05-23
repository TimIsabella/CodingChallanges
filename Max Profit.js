var maxProfit = function(prices) 
{
 let res = 0, min = prices[0], len = prices.length, p;
 for(let i = 1; i < len; i++) 
    {
     p = prices[i];
     min = Math.min(p, min);
     res = Math.max(res, p - min);
    }
    
 return res;
};
