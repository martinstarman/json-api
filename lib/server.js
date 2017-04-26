const {send} = require("micro")
const {parse} = require("./url")
const {get} = require("./resolve")

module.exports = (req, res) => {
  if (req.url === "/favicon.ico")
    return send(res, 200, "")
  if (req.method === "GET") {
    let data = get(parse(req.url))
    return send(res, data ? 200 : 204, data)
  }
  send(res, 405, "Method Not Allowed")
}
