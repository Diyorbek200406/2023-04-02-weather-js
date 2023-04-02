const KEY = "dcdd8a5a9fde98bf810ed3b884c0e992";

// request getData
const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  const request = await fetch(base + query);
  const data = await request.json();
  loader(false);
  return data;
};


