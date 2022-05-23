var maxProduct = function(nums)
{
 let n, i = 0, len = nums.length, res = [[1], [1]];
 
 for(; i < len; i++)
    {
     n = nums[i];
     if(n < 0)
       {
        res[0][i+1] = Math.min((res[1][i] * n), n);
        res[1][i+1] = Math.max((res[0][i] * n), n);
       }
        else
         {
          res[0][i+1] = Math.min((res[0][i] * n), n);
          res[1][i+1] = Math.max((res[1][i] * n), n);
         }
    }
 
 res[1][0] = -Infinity;
 return Math.max(...res[1]);
};

///////////

var maxProduct = function(nums)
{
 let n, i = 0, len = nums.length;
 
 nums = [nums, [], []];
 nums[1].length = len; nums[1].fill(1, 0, len);
 nums[2].length = len; nums[2].fill(1, 0, len); nums[2][0] = -Infinity;
  
 for(; i < len; i++)
    {
     n = nums[0][i];
     if(nums < 0) 
       {
        nums[1][i+1] = Math.min(nums[2][i] * n, n);
        nums[2][i+1] = Math.max(nums[1][i] * n, n);
       }
        else 
         {
          nums[1][i+1] = Math.min(nums[1][i] * n, n);
          nums[2][i+1] = Math.max(nums[2][i] * n, n);
         }
    }

 return Math.max(...nums[2]);
};

///////////

var maxProduct = function(nums)
{
 let a, res = nums[0], len=nums.length, i = 0, ii;
 
 for(; i < len; i++)
    {
     a = nums[i];
     for(ii = i+1; ii < len; ii++)
        {
         res = res > a ? res : a;
         a *= nums[ii];
        }
     
     res = res > a ? res : a;
    }
 
 return res;
};
