const {sep} = require("path")

const get = ({file, params}) => {
  try {
    return require(`..${sep}data${sep}${file}.json`)
  } catch (e) {}
}

module.exports = {get: get}
