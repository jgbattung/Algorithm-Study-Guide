Problem:
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Initial thoughts:
1. I need to check which intervals has values that overlap
2. If the end of the previous interval is greater than or equal to the start of the next interval, there is an overlap.
3. If there is an overlap, combine the start of the previous interval with the end of the next interval
4. Skip over the next interval in the loop 

Address failing test case
1. It is possible to have an interval whose start is smaller than the previous intervals start or vice versa ([[1,4],[0,4]])
2. Add checks to see which values need to be combined

Another failing test case
1. intervals = [[1,4],[0,0]]
2. In this case, both start and end of the next interval in smaller.
3. Add another if check

Another failing test case
1. intervals = [[1,4],[0,1]]