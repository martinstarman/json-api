const assert = require("assert")
const {get} = require("../lib/resolve")

describe("resolve", () => {

  it("should return all data", () => {
    let data = get({file: "users"})
    assert.deepEqual(data, [
      {
        "id": 1,
        "name": "John Doe",
        "age": 34
      },
      {
        "id": 2,
        "name": "Joe Sixpack",
        "age": 46
      }
    ])
  })

})
