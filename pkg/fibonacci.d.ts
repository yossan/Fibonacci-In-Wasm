/* tslint:disable */
/* eslint-disable */
/**
* @returns {Fibonacci}
*/
export function fibonacci_cal(): Fibonacci;
/**
*/
export class Fibonacci {
  free(): void;
/**
* @param {BigInt} nth
* @returns {BigInt}
*/
  get_nth(nth: BigInt): BigInt;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_fibonacci_free: (a: number) => void;
  readonly fibonacci_get_nth: (a: number, b: number, c: number, d: number) => void;
  readonly fibonacci_cal: () => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
