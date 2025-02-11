Problem:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Initial thoughts:
1. To define the question better, each number in the answewr should equal the rest of the array except the current number
2. Loop through the nums array, multiplying each number except the current number
3. To check this, you need to tell that if it is not the current number, multiply it by the product.