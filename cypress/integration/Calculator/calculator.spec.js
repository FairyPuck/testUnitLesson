import useCalculator from "../../../src/hooks/useCalculator";

describe('Addition test', () => {
    it('Addition test', () => {
        expect(useCalculator().addition("1", "2")).to.equal("3")
    })
})

describe('Substraction test', () => {
    it('Substraction test', () => {
        expect(useCalculator().substraction("2", "1")).to.equal("1")
    })
})

describe('Square test', () => {
    it('Square test', () => {
        expect(useCalculator().square("2")).to.equal("4")
    })
})

describe('Modulo test', () => {
    it('Modulo test', () => {
        expect(useCalculator().modulo("5", "2")).to.equal("1")
    })
})

describe('Division test', () => {
    it('Modulo test', () => {
        expect(useCalculator().division("6", "2")).to.equal("3")
    })
})

describe("Calculator", () => {
    it("Test addition", () => {
        cy.visit("http://localhost:3000");
        cy.contains("1").click();
        cy.contains("+").click();
        cy.contains("2").click();
        cy.contains("=").click();
        cy.get(".result").contains("3");
        cy.contains("C").click();
    });
    it("Test substraction", () => {
        cy.visit("http://localhost:3000");
        cy.contains("2").click();
        cy.contains("-").click();
        cy.contains("1").click();
        cy.contains("=").click();
        cy.get(".result").contains("1");
        cy.contains("C").click();
    });
    it("Test modulo", () => {
        cy.visit("http://localhost:3000");
        cy.contains("3").click();
        cy.contains("%").click();
        cy.contains("2").click();
        cy.contains("=").click();
        cy.get(".result").contains("1");
        cy.contains("C").click();
    });
    it("Test division", () => {
        cy.visit("http://localhost:3000");
        cy.contains("4").click();
        cy.contains("/").click();
        cy.contains("2").click();
        cy.contains("=").click();
        cy.get(".result").contains("2");
        cy.contains("C").click();
    });
    it("Test square", () => {
        cy.visit("http://localhost:3000");
        cy.contains("3").click();
        cy.contains("√x").click();
        cy.contains("=").click();
        cy.get(".result").contains("9");
        cy.contains("C").click();
    });
});
