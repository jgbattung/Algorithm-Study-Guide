Problem:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Initial thoughts:
1. To define the question better, each number in the answewr should equal the rest of the array except the current number
2. Loop through the nums array, multiplying each number except the current number
3. To check this, you need to tell that if it is not the current number, multiply it by the product.

Improved approach:
1. Double loop takes too long. Find a way that a single loop will get you the product
2. Create an array that is the same length as the nums array
3. Get the products of the numbers to the left of the current number
4. Use 2 loops. First loop gets the products to the left, the second to the right.
5. Initialize the leftProduct with 1 as there are no numbers to the left of the first number, so that it doesn't multiply by 0.
6. Store the results of the products to the left in ans array
7. Initialize the rightProduct to 1
8. Loop from the right, multiplying the current product ans[i] to get the product of the numbers to the left and the right
