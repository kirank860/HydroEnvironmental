// Shared "hero may start animating" signal between <Preloader/> and <Motion/>.
let resolveFn: () => void = () => {};
const promise = new Promise<void>((r) => { resolveFn = r; });

export const heroReady = {
  promise,
  resolve: () => resolveFn(),
};
