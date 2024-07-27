type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<CamelCase<U>>}`
  : S;

export type CamelCaseKeys<T> = {
  [K in keyof T as K extends `_${string}` ? K : CamelCase<Extract<K, string>>]: T[K] extends Record<string, any>
  ? CamelCaseKeys<T[K]>
  : T[K];
};
