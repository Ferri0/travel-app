const compose = (...funcs) => (comp) => funcs.reduceRight((wrapped, fn) => fn(wrapped), comp);

export {
  compose
};
