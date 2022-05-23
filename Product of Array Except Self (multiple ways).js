var productExceptSelf = function(nums)
{
 let L = 1, R = 1, len = nums.length;
 
 nums = [nums, []];
 nums[1].length = len;
    
 let i = len - 1;
 while(i > -1)
      {
       nums[1][i] = R;
       R *= nums[0][i];
       i--;
      }

 i = 0;
 while(i < len)
      {
       nums[1][i] *= L;
       L *= nums[0][i];
       i++;
      }
 
 return nums[1];
};

///////////

var productExceptSelf = function(nums)
{
 var res = [], i = 0, ii = 0, pos = 0, len = nums.length;
 
 res.length = len;
 res.fill(1);
 
 while(i < len)
      {
       if(pos == len) {i++; ii = 0; pos = 0;}
       if(ii == i) ii++;
       if(ii < len) res[i] *= nums[ii];
       pos++; ii++;
      }
  
 res.pop(); 
 return res;
};

///////////

var productExceptSelf = function(nums)
{
 let res = [], i = 0, ii = 0, pos = 0, len = nums.length;
 res.length = len; res.fill(1);
 
 while(i < len)
      {
       pos == len ? (i++, ii=0, pos=0) : null;
       ii == i ? ii++ : null;
       ii < len ? res[i] *= nums[ii] : null;
       pos++; ii++;
      }
  
 res.pop(); 
 return res;
};

///////////

var productExceptSelf = function(nums)
{
 let res = [], i = 0, ii = 0, len = nums.length;
 res.length = len; res.fill(1);

 nums.forEach(fe);
 function fe()
            {
             while(ii < len)
                  {
                   ii == i ? ii++ : null;
                   ii < len ? res[i] *= nums[ii] : null;
                   ii++;
                  }
             
             i++; ii = 0;
            }
  
 return res;
};

///////////

var productExceptSelf = function(nums)
{
 let i = 0, ii = 0, pos = 0, len = nums.length;
 
 nums.length = len*2;
 nums.fill(1, len, len*2);

 while(i < len)
      {
       pos == len ? (i++, ii=0, pos=0) : null;
       ii == i ? ii++ : null;
       ii < len ? nums[i+len] *= nums[ii] : null;
       pos++; ii++;
      }
 
 nums.splice(0, len);
 nums.pop();
 return nums;
};

///////////

var productExceptSelf = function(nums)
{
 let i = 0, ii = 1, len = nums.length;
 
 nums = [nums, []];
 nums[1].length = len;
 nums[1].fill(1, 0, len);
  
 while(i < len)
      {
       ii < len ? (nums[1][i] *= nums[0][ii], ii++) : null;
       ii >= len ? (ii=0, i++, nums[1][i] *= nums[0][ii], ii++) : null;
       ii == i ? ii++ : null;
      }
 
 nums[1].pop();
 return nums[1];
};
