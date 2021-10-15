const rewire = require("rewire")
const post_list = rewire("./post-list")
const dateFormat = post_list.__get__("dateFormat")
// @ponicode
describe("dateFormat", () => {
    test("0", () => {
        let callFunction = () => {
            dateFormat("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            dateFormat("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            dateFormat("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            dateFormat("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            dateFormat(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
