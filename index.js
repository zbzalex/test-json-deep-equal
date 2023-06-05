function isArray(o) {
  return o instanceof Array
}

function isObj(o) {
  return o instanceof Object
}

function isSame(o1, o2) {
  return typeof o1 && typeof o2
}

var areDeeplyEqual = function(o1, o2) {
  if (isSame(o1, o2)) {
    let isArray_ = isArray(o1)
    if (isArray_) {
      if (isArray(o2)) {
        return o1.length === o2.length && o1.every((_, i) => areDeeplyEqual(o1[i], o2[i]))
      } else {
        return false
      }
    } else {
        if (isObj(o1) && !isArray(o2)) {
          return Object.keys(o1).every((v) => areDeeplyEqual(o1[v], o2[v]))
        } else {
          return o1 === o2
        }
    }
  }
  
  return false
};

console.log(areDeeplyEqual(
 {"0":1},
 [1]
//  {"x":1,"y":2},
//  {"x":1,"y":2}
))

