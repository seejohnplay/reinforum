export function sortBy(thing, prop) {
  return thing.sort((a,b) => b[prop] - a[prop])
}