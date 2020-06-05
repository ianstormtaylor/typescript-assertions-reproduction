export interface Asserter<T> {
  assert(x: unknown): asserts x is T;
}

export const create = <T>(): Asserter<T> => null as any;
export const number = () => create<number>();
export const Number = number();
