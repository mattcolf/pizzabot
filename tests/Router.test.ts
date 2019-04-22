import { InputLocations } from "../src/InputParser";
import {Route, SimpleRoute} from "../src/Router";

describe("Router", () => {

    it("adds origin to locations", () => {

        const input: InputLocations = [
            [1, 1],
        ];

        const output: InputLocations = [
            [0, 0],
            [1, 1],
        ];

        expect(Route(input)).toEqual(output);
    });

    it("adds origin to locations - simple", () => {

        const input: InputLocations = [
            [1, 1],
        ];

        const output: InputLocations = [
            [0, 0],
            [1, 1],
        ];

        expect(SimpleRoute(input)).toEqual(output);
    });

    it("handles no routing necessary", () => {

        const input: InputLocations = [
            [1, 1],
            [1, 1],
        ];

        const output: InputLocations = [
            [0, 0],
            [1, 1],
            [1, 1],
        ];

        expect(Route(input)).toEqual(output);
    });

    it("handles no routing necessary - simple", () => {

        const input: InputLocations = [
            [1, 1],
            [1, 1],
        ];

        const output: InputLocations = [
            [0, 0],
            [1, 1],
            [1, 1],
        ];

        expect(SimpleRoute(input)).toEqual(output);
    });

    it("determines correct order along y", () => {

        const input: InputLocations = [
            [0, 1],
            [0, 3],
            [0, 2],
        ];

        const output: InputLocations = [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ];

        expect(Route(input)).toEqual(output);
    });

    it("determines correct order along x", () => {

        const input: InputLocations = [
            [1, 0],
            [3, 0],
            [2, 0],
        ];

        const output: InputLocations = [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ];

        expect(Route(input)).toEqual(output);
    });

    it("handles returning to the same location multiple times", () => {

        const input: InputLocations = [
            [1, 0],
            [3, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ];

        const output: InputLocations = [
            [0, 0],
            [1, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [3, 0],
        ];

        expect(Route(input)).toEqual(output);
    });
});
