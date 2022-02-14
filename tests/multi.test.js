const multi = require("../src/mult")

it("should return correct multi", () => {
	const result = multi(2, 5)
	expect(result).toBe(10)
})
