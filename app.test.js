
const test = require("node:test");
const assert = require("node:assert");
const { getMessage } = require("./app");

test("customer API returns a message", () => {
  assert.strictEqual(
    getMessage(),
    "Customer API is running"
  );
});
