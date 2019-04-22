import { InputLocations } from "./InputParser";

/**
 * A simple navigation algorithm that determines which way to navigate from one location to another
 * by going in a straight line as much as possible. This navigator will always try to move E/W
 * before moving N/S.
 */

export const Navigate = (locations: InputLocations): string => {
    return doNavigate(locations[0], locations[1], locations.slice(2));
};

function doNavigate(current: [number, number], next: [number, number], remainder: InputLocations): string {
    let route = "";

    // X
    if (current[0] < next[0]) {
        // Move East
        route += "E".repeat(next[0] - current[0]);
    } else {
        // Move West
        route += "W".repeat(current[0] - next[0]);
    }

    // Y
    if (current[1] < next[1]) {
        // Move North
        route += "N".repeat(next[1] - current[1]);
    } else {
        // Move South
        route += "S".repeat(current[1] - next[1]);
    }

    // Deliver
    route += "D";

    // Navigate to next stop
    return remainder.length > 0 ? route += doNavigate(next, remainder[0], remainder.slice(1)) : route;
}
