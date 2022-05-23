var lengthOfLongestSubstring = function(s)
{
 var result = 0;
 var res = 0;

 var sLen = s.length;
 var sArr = [];
 var aLen = 0;
 
 for(let i = 0; i <= sLen; i++)
    {
     if(!sArr.includes(s[i]))
       {
        if(!s[i]) break;
        sArr.push(s[i]);
        res++;
        aLen = sArr.length;
        if(result < aLen) result = aLen;
       }
       else
          {
           aLen = sArr.length;
           if(result < aLen) result = aLen;
           i = i - res;
           sArr.length = 0;
           res = 0;
          }
   }
 
 return result;
};
