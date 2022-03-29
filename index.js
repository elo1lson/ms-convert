var convert = function(ms) {
    if(isNaN(ms)){
        throw new Error(e, 'is not a number')
    }
    var s = ms / 1000
    var min = s / 60
    var hour = min / 60
    var days = hour / 24
    var week = days / 7
    var moth = week / 30
    var exate = function() {
      return {
        s,
        min,
        hour,
        days,
        week,
        moth
      }
    }
    return {
      s: Math.trunc(s),
      min: Math.trunc(min),
      hour: Math.trunc(hour),
      days: Math.trunc(days),
      week: Math.trunc(week),
      moth: Math.trunc(moth),
      exate
    }
  

}

module.exports = convert