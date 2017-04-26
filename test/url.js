const assert = require("assert")
const {parse} = require("../lib/url")

describe("url", () => {

  it("should parse url with leading slash", () => {
    let parsed = parse("/endpoint")
    assert.deepEqual(parsed, {file: "endpoint"})
  })

  it("should parse url with leading and trailing slash", () => {
    let parsed = parse("/endpoint/")
    assert.deepEqual(parsed, {file: "endpoint"})
  })

  it("should parse url with params", () => {
    let parsed = parse("/endpoint/?a=b&c=d")
    assert.deepEqual(parsed, {file: "endpoint", params: {a: "b", c: "d"}})
  })

})
