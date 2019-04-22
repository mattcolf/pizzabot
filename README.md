Pizzabot
========

A simple command line application designed to accept delivery locations and find a route to navigate to 
all of them. This application is written in Typescript (Javascript).

## Requirements

Before starting, please ensure that all dependencies are installed.

- Node (8 or above) and NPM

## Running

You can run this application by doing the following.

### Setup

Before running the application, you must first install all dependencies using NPM. Since this is a Typescript 
application, you must also transpile the code into Javascript before executing it. Once complete, a runnable
version of the code will be saved in the `./dist` directory where it can be run.

```bash
npm install && npm run build
```

You can now run the application according to the guide in the *Execution* section below. You can also just
copy the following to make it easier to get started. For more detail, keep reading.

```bash
npm run build && ./dist/pizzabot.js "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"
```

### Execution

Once setup, you can run the `./dist/pizzabot.js` command. It takes a single argument in the following form.

```bash
./dist/pizzabot.js "NXxNY (AX, AY)[ (BX, BY)...]"
```

Where the following fields may be specified.

- `NX`: The size of the grid, on the `X` axis (horizontal).
- `NY`: The size of the grid, on the `Y` axis (vertical).
- `*X`: The X coordinate of a delivery location on the grid, where 0 is the origin.
- `*Y`: The Y coordinate of a delivery location on the grid, where 0 is the origin.

However, there are some restrictions.

- `NX`: Must be an integer value greater than `0`.
- `NY`: Must be an integer value greater than `0`.
- `*X`: Must be an integer value, `0` or greater, and less than `NX`.
- `*Y`: Must be an integer value, `0` or greater, and less than `NY`.

You must specify at least one delivery location. Here is an example to get you started.

```bash
./dist/pizzabot.js "5x5 (1, 3) (4, 4)"
```

This command will create a 5x5 delivery grid with two delivery locations - the first at X=1,Y=3 and the 
second at X=4,Y=4.

```
4 | | | | |X|
3 | |X| | | |
2 | | | | | |
1 | | | | | |
0 | | | | | |
  -----------
   0 1 2 3 4
```

### Output

Upon execution, this command will output a string of letters that indicate directions from the origin
to each delivery location on the grid. Each step in the directions will be one of the following.

- `N`: Move north (up)
- `S`: Move south (down)
- `E`: Move east (right)
- `W`: Move west (left)
- `D`: Make a delivery

So, for the example above, the program could produce the following result.

```
ENNNDEEEND
```

## Testing

This program comes packages with a test suite that you can fun as follows.

``` 
npm run test
```

Once run, you can view coverage reports in the `./coverage` directory.