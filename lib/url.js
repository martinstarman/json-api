const params = function (str) {
  let ret = {}
  str.split("&").forEach((chunk) => {
    let param = chunk.split("=")
    ret[param[0]] = param[1]
  })
  return ret
}

const parse = function (url) {
  if (url.charAt(0) === "/")
    url = url.slice(1)
  let chunks = url.split("?")
  let file = chunks[0].slice(-1) === "/" ? chunks[0].slice(0, -1) : chunks[0]
  if (chunks.length > 1)
    return {file: file, params: params(chunks[1])}
  return {file: file}
}

module.exports = {parse: parse}
