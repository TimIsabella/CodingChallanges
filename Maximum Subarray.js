function maxSubArray(nums)
{
 let M = -Infinity, len = nums.length, i = 0;
 nums.push(0);
  
 for(; i < len; i++)
    {
     nums[len] + nums[i] > nums[i] ? nums[len] += nums[i] : nums[len] = nums[i];
     M < nums[len] ? M = nums[len] : null;
    }
  
 return M;
}
