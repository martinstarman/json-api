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

  it("should filter data by one param", () => {
    let data = get({file: "users", params: {id: 1}})
    assert.deepEqual(data, [
      {
        "id": 1,
        "name": "John Doe",
        "age": 34
      }
    ])
  })

  it("should filter data by multiple params", () => {
    let data = get({file: "users", params: {id: 1, age: 34}})
    assert.deepEqual(data, [
      {
        "id": 1,
        "name": "John Doe",
        "age": 34
      }
    ])
  })

  it("should return empty array when no data match filters", () => {
    let data = get({file: "users", params: {id: 1, age: 35}})
    assert.deepEqual(data, [])
  })

})
