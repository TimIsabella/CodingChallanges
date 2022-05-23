const twoSum = function(nums, target) 
{
 var length = nums.length;
 var i = 0;
 var b = 1;
 while(i < length)
    {
     while(b < length)
          {
           if((nums[i] + nums[b]) == target) return [i, b];
           b++;
          }
     
     i++;
     b=i+1;
    }
};
