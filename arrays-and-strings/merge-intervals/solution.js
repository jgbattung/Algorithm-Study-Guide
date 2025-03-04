const i1 = [[1,3],[2,6],[8,10],[15,18]];
const i2 = [[1,4],[4,5]]
const i3 = [[1,4],[0,4]]
const i4 = [[1,4],[0,0]]
const i5 = [[1,4],[0,1]]

var merge = function(intervals) {
  let int = [];
  for (let i=0; i < intervals.length; i++) {
    if (i === intervals.length - 1) {
      int.push(intervals[i])
      return int
    }

    if (intervals[i + 1][0] < intervals[i][0] && intervals[i + 1][1] < intervals[i][1]) {
      int.push(intervals[i + 1], intervals[i])
      i++
    } else if (intervals[i][1] >= intervals[i + 1][0] || intervals[i][0] === intervals[i + 1][1]) {
      int.push([Math.min(intervals[i][0], intervals[i + 1][0]), Math.max(intervals[i][1], intervals[i + 1][1])])
      i++
    } else {
      int.push(intervals[i])
    }
  }
  return int
};

// merge(i1);
// merge(i2);
// merge(i3);
// merge(i4)
merge(i5)