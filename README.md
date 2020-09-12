# Mars Rover

This is my submission for the dealerOn candidate code challenge. I chose to do the mars rover problem using Typescript.

## Thought Process

By putting the expected input values that we are testing for in separate rover objects it allows us to handle each rover separately. Also, since a rover’s current position and heading are represented by a triple X Y Z it made sense to use Typescript's ability to validate types to ensure that the X Y Z values we receive are the expected type the function needs(i.e string, numbers, etc): ```typescript
var s = "JavaScript syntax highlighting";
alert(s);

```

## Compile and run

Firstly, run `npm i` to install a few dependencies. After that, do `npm run start` from the terminal or command line followed by `tsc Rover.ts` and open the index.html file in a browser. The executed code can be seen in the browser's console.
```
