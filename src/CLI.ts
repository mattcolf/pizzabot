import {InputDetails, InputLocations, parseInput} from "./InputParser";
import {Route, SimpleRoute} from "./Router";
import { Navigate } from "./Navigator";

export const cli = (params: string[]) => {

    let debug: boolean = false;

    if (params.length < 2 || params.includes("--help")) {
        printHelp(params);
        process.exit(1);
    }

    if (params.includes("--debug")) {
        debug = true;
    }

    const input = parseInput(params[1]);

    if (input === null) {
        console.log("Unable to parse input. Please read the help.\n");
        printHelp(params);
        process.exit(1);

        return;
    }

    if (input.Locations.length < 1) {
        console.log("You must specify at least one location. Please read the help.\n");
        printHelp(params);
        process.exit(1);

        return;
    }

    const outsideLocations = input.Locations.filter(([X, Y]) => {
        return X >= input.SizeX || Y >= input.SizeY;
    });

    if (outsideLocations.length > 0) {
        console.log(`All locations must fall inside the grid with size X=${input.SizeX} and Y=${input.SizeY}.`);
        outsideLocations.forEach(([X, Y]) => {
            console.log(`    - Location (${X},${Y}) falls outside the grid.`);
        });
        console.log("");
        printHelp(params);
        process.exit(1);

        return;
    }

    if (debug) {
        console.log("Received the following input locations.");
        console.log(input.Locations);
    }

    let route: InputLocations = [];

    if (input.Locations.length < 7) {
        // use optimal, but slow routing
        route = Route(input.Locations);
    } else {
        // use non-optimal, but faster routing
        route = SimpleRoute(input.Locations);
    }

    if (debug) {
        console.log("Determined the following route to all locations.");
        console.log(route);
    }

    // get directions for how to follow that route from the navigator
    const directions = Navigate(route);

    if (debug) {
        console.log("Determined the following navigation to all locations.");
    }

    // output the route
    console.log(directions);
};

function printHelp(params: string[]) {
    console.log([
        `Usage: ${params[0]} "NXxNY (AX, AY)[ (BX, BY)...]"`,
        "",
        "Where the following fields may be specified.",
        "    - `NX`: The size of the grid, on the `X` axis (horizontal).",
        "    - `NY`: The size of the grid, on the `Y` axis (vertical).",
        "    - `*X`: The X coordinate of a delivery location on the grid, where 0 is the origin.",
        "    - `*Y`: The Y coordinate of a delivery location on the grid, where 0 is the origin.",
        "",
        "However, there are some restrictions.",
        "    - `NX`: Must be an integer value greater than `0`.",
        "    - `NY`: Must be an integer value greater than `0`.",
        "    - `*X`: Must be an integer value, `0` or greater, and less than `NX`.",
        "    - `*Y`: Must be an integer value, `0` or greater, and less than `NY`.",
        "",
        "You must specify at least one delivery location. Here is an example to get you started.",
        "",
        `${params[0]} 5x5 (1, 3) (4, 4)`,
        "",
        "This command will create a 5x5 delivery grid with two delivery locations:",
        "    1: X=1,Y=3",
        "    2: X=4,Y=4.",
        "",
        "For additional help, please read the README.md file.",
    ].join("\n"));
}
