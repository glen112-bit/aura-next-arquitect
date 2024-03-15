import { suma } from "./suma";

describe("suma()", () => {
	it("when receives 1 and 1, returns 2", () => {
		expect(suma(1, 1)).toBe(2);
	});
});
