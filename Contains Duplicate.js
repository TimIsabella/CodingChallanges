var containsDuplicate = function(nums)
{
 let mat, res = false, len = nums.length;
 
 for(let i = 0; i < len; i++)
    {
     mat = nums[i];
     nums[i] = "";
     if(nums.includes(mat)) {res = true; break;}
    }
 
 return res;
};
