const params = function (str) {
  let ret = {}
  if (str.charAt(0) === "?")
    str = str.slice(1)
  str.split("&").forEach((chunk) => {
    let param = chunk.split("=")
    ret[param[0]] = param[1]
  })
  return ret
}

const parse = function (url) {
  if (url.charAt(0) === "/")
    url = url.slice(1)
  let chunks = url.split("/")
  if (chunks.length === 1) // endpoint
    return {file: chunks[0]}
  else if (chunks.length === 2 && !chunks[1]) // endpoint/
    return {file: chunks[0]}
  else
    return {file: chunks[0], params: params(chunks[1])} // endpoint/?a=1&b=2
}

module.exports = {parse: parse}
