const i1 = [[1,3],[6,9]], n1 = [2,5]
const i2 = [[1,2],[3,5],[6,7],[8,10],[12,16]], n2 = [4,8]

var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = result[result.length - 1]

    if(lastInterval[1] >= intervals[i][0]) {
      lastInterval[1] = Math.max(lastInterval[1], intervals[i][1])
    } else {
      result.push(intervals[i])
    }
  }

  return result
}

insert(i1, n1)