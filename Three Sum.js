var threeSum = function(nums)
{
 let a, b, c, i=0, j=1, k=2, len = nums.length, res = [];
 
 nums.sort((a,b) => a-b);

 for(;;)
    {
     [a,b,c] = [nums[i], nums[j], nums[k]];
     if(a+b+c == 0) res.push([a,b,c]);
     if(k < len-1) k++;
       else if(j < len-2){j++; k = j+1;}
         else if(i < len-3){i++; j = i+1; k = j+1;}
          else break;
    }

 res = res.filter((x = {}, z => !(x[z] = z in x)));
 return res;
};
