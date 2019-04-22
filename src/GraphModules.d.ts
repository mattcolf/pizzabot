/**
 * Add Typescript type declarations for an external library that does not have them.
 */

declare module "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/Graph" {

    import GraphEdge from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphEdge";
    import GraphVertex from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphVertex"

    export default class Graph {
        constructor(isDirected: boolean);
        addVertex(newVertex: GraphVertex): Graph;
        getVertexByKey(vertexKey: string): GraphVertex;
        getNeighbors(vertex: GraphVertex): GraphVertex[];
        getAllVertices(): GraphVertex[];
        getAllEdges(): GraphEdge[];
        addEdge(edge: GraphEdge): Graph;
        deleteEdge(edge: GraphEdge): void;
        findEdge(startVertex: GraphVertex, endVertex: GraphVertex): GraphEdge|null;
        findVertexByKey(vertexKey: string): GraphVertex;
        getWeight(): number;
        reverse(): Graph;
        getVerticesIndices(): any;
        getAdjacencyMatrix(): any;
        toString(): string;
    }
}

declare module "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphEdge" {

    import GraphVertex from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphVertex"

    export default class GraphEdge {
        constructor(startVertex: GraphVertex, endVertex: GraphVertex, weight: number);
        getKey(): string;
        reverse(): GraphEdge;
        toString(): string;
    }
}

declare module "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphVertex" {

    import GraphEdge from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphEdge";

    export default class GraphVertex {
        constructor(value: any);
        addEdge(edge: GraphEdge): GraphVertex;
        deleteEdge(edge: GraphEdge): void;
        getNeighbors(): GraphVertex[];
        getEdges(): GraphEdge[];
        getDegree(): number;
        hasEdge(requiredEdge: GraphEdge): boolean;
        hasNeighbor(vertex: GraphVertex): boolean;
        findEdge(vertex: GraphVertex): GraphEdge | null;
        getKey(): any;
        deleteAllEdges(): GraphVertex;
        toString(callback: (value: any) => string): string;
    }
}

declare module "dist-javascript-algorithms-and-data-structures/dist/algorithms/graph/travelling-salesman/bfTravellingSalesman" {

    import Graph from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/Graph"
    import GraphVertex from "dist-javascript-algorithms-and-data-structures/dist/data-structures/graph/GraphVertex"

    export default function bfTravellingSalesman(graph: Graph): GraphVertex[];
}
