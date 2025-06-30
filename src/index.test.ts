import {center, ljust, rjust} from "./index"

if (import.meta.vitest) {
    const {it, expect} = import.meta.vitest
    const s = "hello"

    it("ljust", () => {
        expect(ljust(s, 8, "*")).toBe(`${s}***`)
    })
    it("rjust", () => {
        expect(rjust(s, 8, "*")).toBe(`***${s}`)
    })
    it("center", () => {
        expect(center(s, 8, "*")).toBe(`*${s}**`)
    })
    it("center symmetrical", () => {
        expect(center(s, 9, "*")).toBe(`**${s}**`)
    })
}
