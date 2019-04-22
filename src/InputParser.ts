export type InputLocations = Array<[number, number]>;

export interface InputDetails {
    SizeX: number;
    SizeY: number;
    Locations: InputLocations;
}

/**
 * Parse the entire user input.
 */
export const parseInput = (input: string): InputDetails | null => {
    const result = input.match(/^\s*(?<SizeX>\d+)[xX](?<SizeY>\d+)\s*(?<Locations>(?:\(\s*\d+\s*,\s*\d+\s*\)\s*)*)$/);

    if (result == null) {
        return null;
    }

    const details = result.groups as { SizeX: string, SizeY: string, Locations: string };

    return {
        SizeX: Number(details.SizeX),
        SizeY: Number(details.SizeY),
        Locations: details.Locations.length > 0 ? parseLocations(details.Locations) : [],
    };
};

/**
 * Parse a string of locations from user input.
 */
function parseLocations(input: string): InputLocations {
    let locations: InputLocations = [];
    const result = input.match(/^\(\s*(?<X>\d+)\s*,\s*(?<Y>\d+)\s*\)\s*(?<Remainder>.*)\s*$/);

    if (result) {
        const details = result.groups as { X: string, Y: string, Remainder: string };

        locations.push([Number(details.X), Number(details.Y)]);

        if (details.Remainder.length > 0) {
            locations = locations.concat(parseLocations(details.Remainder));
        }
    }

    return locations;
}
