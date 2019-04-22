import { InputLocations } from "../src/InputParser";
import { Navigate } from "../src/Navigator";

describe("Navigator", () => {

    it("navigates when there is no choice of direction", () => {

        const input: InputLocations = [
            [0, 0],
            [0, 4],
            [4, 4],
            [4, 0],
        ];

        const output = "NNNNDEEEEDSSSSD";

        expect(Navigate(input)).toEqual(output);
    });

    it("navigates when there is a choice of direction", () => {

        const input: InputLocations = [
            [0, 0],
            [4, 4],
            [0, 4],
            [4, 0],
        ];

        const output = "EEEENNNNDWWWWDEEEESSSSD";

        expect(Navigate(input)).toEqual(output);
    });

    it("navigates when there are only two locations", () => {

        const input: InputLocations = [
            [0, 0],
            [0, 4],
        ];

        const output = "NNNND";

        expect(Navigate(input)).toEqual(output);
    });

    it("delivers when no movement is necessary", () => {

        const input: InputLocations = [
            [0, 0],
            [0, 0],
            [0, 0],
        ];

        const output = "DD";

        expect(Navigate(input)).toEqual(output);
    });
});
