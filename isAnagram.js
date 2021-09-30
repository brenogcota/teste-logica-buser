function isAnagrama (p1, p2) {
  p1 = p1.split('')
  p2 = p2.split('')

  if(p1 == p2) return true;
  if(p1.length != p2.length) return false;


  Array.prototype.isAnagram = (function() {
    return this.reduce((acc, item) => {
                    if(acc[item]) {
                      acc[item] = ++acc[item]
                      return acc
                    }

                    return {
                      ...acc,
                      [item]: 1
                    }
                  }, {})
  })

  const p1Result = p1.isAnagram()

  const p2Result = p2.isAnagram()

  for(item in p1Result) {
    if(p1Result[item] != p2Result[item]) return false
  }

  return true
}
