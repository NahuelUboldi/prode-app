export function fetchData(url) {
  return fetch(url)
    .then((r) => r.json())
    .catch((err) => console.log(err));
}
