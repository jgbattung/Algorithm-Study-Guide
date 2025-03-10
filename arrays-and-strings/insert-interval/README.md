You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Initial thoughts:
1. Intervals are already ordered, so I just have to look where the newInterval fits
2. You can use the solution in mergeIntervals problem where you check the interval[1] of the last interval and the [i][0] of the current interval to check if there is an overlap
3. But since the intervals are already ordered and non-overlapping, I can just check if the last intervals[1] is greater than or equal to the newInterval[0], then merge them if there is an overlap.
4. If not, continue to the next intervals

Doing the solution:
1. set lastInterval to the 2nd index of the last item in result 
2. If the lastInterval's 2nd index is greater than or equal to the first index of the new interval, there is an overlap, so merge
3. If there is no overlap, check the next interval

Things to think about:
1. If there is no overlap in between the firstInterval and the newInterval, how do you check the next one? The overlap can happen at the start of the next interval instead of the last. It can also happen at index[0] of the first interval4

Revised approach:
1. Push the newInterval array into the intervals array
2. Sort the array
3. Solve using the mergeInterval solution