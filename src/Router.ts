import { InputLocations } from "./InputParser";
import Graph from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/Graph";
import GraphEdge from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphEdge";
import GraphVertex from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphVertex";
import TravelingSalesman from "dist-javascript-algorithms-and-data-structures/dist/algorithms/graph/travelling-salesman/bfTravellingSalesman";

/**
 * Use a readily available TSP algorithm to compute the best possible path, starting at (0,0), that visits
 * all other locations exactly once.
 *
 * Note! Because this uses a brute-force TSP implementation, the memory usage is... less than optimal. For
 * moderate or large input sizes, it makes sense to use a less-optimal solution.
 */
export const Route = (locations: InputLocations): InputLocations => {

  const graph = new Graph(false);
  const vertexes: GraphVertex[] = [];

  if (locations.length > 6) {
      console.log("Computing an optimal path for more than 6 locations may be a bit slow.");
      console.log("The current solver uses brute force TSP which must enumerate all possible routes O(n!).");
      console.log("Please be patient. :)");
  }

  // make origin the first stop
  locations.unshift([0, 0]);

  // convert all locations into vertices
  locations.forEach((_, index: number) => {
      vertexes.push(new GraphVertex(index));
  });

  // loop over all vertices and compute all possible edges
  vertexes.forEach((vertexStart: GraphVertex, indexStart: number) => {
      vertexes.forEach((vertexEnd: GraphVertex, indexEnd: number) => {
          // no self loops
          if (indexStart !== indexEnd) {
              graph.addEdge(new GraphEdge(
                  vertexStart,
                  vertexEnd,
                  getDistance(locations[indexStart], locations[indexEnd])),
              );
          }
      });
  });

  // compute the best possible path
  const path = TravelingSalesman(graph);
  const output: InputLocations = [];

  // convert vertices back to location tuples
  path.forEach((vertex: GraphVertex) => {
      output.push(locations[vertex.getKey()]);
  });

  return output;
};

/**
 * Uses a simple sorting algorithm to determine the route.
 */
export const SimpleRoute = (locations: InputLocations): InputLocations => {

    // make origin the first stop
    locations.unshift([0, 0]);

    locations.sort((a: [number, number], b: [number, number]): number => {

        const score = (location: [number, number]) => {
            return location[0] + location[1] * 5;
        };

        // stack same location
        if (a[0] === b[0] && a[1] === b[1]) {
            return 0;
        }

        return score(a) - score(b);
    });

    return locations;
};

/**
 * Get the distance between any two location coordinates.
 */
function getDistance(start: [number, number], end: [number, number]): number {

    const distanceX = start[0] > end[0] ? start[0] - end[0] : end[0] - start[0];
    const distanceY = start[1] > end[1] ? start[1] - end[1] : end[1] - start[1];

    return Math.sqrt( distanceX * distanceX + distanceY * distanceY );
}
