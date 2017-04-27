const {sep} = require("path")

const filter = (json, params) => {
  let filtered = []
  json.forEach((item) => {
    let ok = true
    for (let param in params)
      if (item[param] != params[param])
        ok = false
    if (ok)
      filtered.push(item)
  })
  return filtered
}

const get = ({file, params}) => {
  let json
  try {
    json = require(`..${sep}data${sep}${file}.json`)
  } catch (e) {
    return
  }
  if (params)
    json = filter(json, params)
  return json
}

module.exports = {get: get}
