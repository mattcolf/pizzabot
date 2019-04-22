import { parseInput, InputDetails } from "../src/InputParser";

describe("Input Parser", () => {

    it("parses simple input correctly", () => {

        const input = "5x5 (1,2) (3,4)";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [
                [1, 2],
                [3, 4],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("parses multi-digit grid size input correctly", () => {

        const input = "50x50 (1,2) (3,4)";

        const output = {
            SizeX: 50,
            SizeY: 50,
            Locations: [
                [1, 2],
                [3, 4],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("parses multi-digit location input correctly", () => {

        const input = "5x5 (10,20) (3,4)";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [
                [10, 20],
                [3, 4],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("parses input with extra whitespace correctly", () => {

        const input = "    5x5      (  1  ,   2    )   (  3  ,  4  )  ";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [
                [1, 2],
                [3, 4],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("parses input with no whitespace correctly", () => {

        const input = "5x5(1,2)(3,4)";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [
                [1, 2],
                [3, 4],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("parses input with no locations", () => {

        const input = "5x5";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });


    it("parses a known input correctly", () => {
        const input = "5x5 (1, 3) (4, 4)";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [
                [1, 3],
                [4, 4],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("parses a known input correctly", () => {
        const input = "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)";

        const output = {
            SizeX: 5,
            SizeY: 5,
            Locations: [
                [0, 0],
                [1, 3],
                [4, 4],
                [4, 2],
                [4, 2],
                [0, 1],
                [3, 2],
                [2, 3],
                [4, 1],
            ],
        } as InputDetails;

        expect(parseInput(input)).toEqual(output);
    });

    it("handles badly formatted input", () => {

        const input = "55 not a valid format :(";
        expect(parseInput(input)).toEqual(null);
    });

    it("handles badly formatted location inputs", () => {

        const input = "5x5 [1,2]";
        expect(parseInput(input)).toEqual(null);
    });
});
