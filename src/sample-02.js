const { default: axios } = require("axios");

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

async function* apiRequest(endpoint) {
  const response = await api.get(endpoint);
  const planets = yield response;

  const [first] = planets;
  return first;
}

async function main() {
  const generator = apiRequest("/planets");

  const { value: response } = await generator.next();
  const { data } = response;

  const planets = data.results.map((item) => {
    const { name, diameter, climate } = item;
    return { name, diameter, climate };
  });

  const result = await generator.next(planets);
  console.log(result);
}

main();
