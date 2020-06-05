import { Number, number } from "a";
// import { Number, number } from "./a";

const x: unknown = 42;

{
  Number.assert(x);
  x;
}

{
  const N = number();
  N.assert(x);
  x;
}
