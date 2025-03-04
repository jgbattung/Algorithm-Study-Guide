const i1 = [[1,3],[2,6],[8,10],[15,18]];
const i2 = [[1,4],[4,5]]
const i3 = [[1,4],[0,4]]
const i4 = [[1,4],[0,0]]
const i5 = [[1,4],[0,1]]
const i6 = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = result[result.length - 1]

    if (lastInterval[1] >= intervals[i][0]) {
      lastInterval[1] = Math.max(lastInterval[1], intervals[i][1])
    } else {
      result.push(intervals[i])
    }
  }
  return result
}

merge(i1)
merge(i2)
merge(i3)
merge(i4)
merge(i5)
merge(i6)