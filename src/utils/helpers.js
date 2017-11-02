export function sortBy(thing, prop) {
  return thing.sort((a,b) => Date.parse(b[prop]) - Date.parse(a[prop]))
}