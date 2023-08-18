export async function fetchCars(make: string) {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

  const headers = {
    "X-RapidAPI-Key": "30b9a93a23mshc15e8ba50325dafp1513d9jsn380b88a1ad9c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(url + "?make=volkswagen", { headers: headers });

  const result = await response.json();

  return result;
}
