class ShowplaceService {
  apiCountryBase = '/api/countries';

  apiWeatherKey = 'c16994fc025240af68d42239b19a63b1'

  apiWeatherBase = (country = 'ukraine', lang = 'en') => `https://api.openweathermap.org/data/2.5/weather?q=${country}&lang=${lang}&appid=${this.apiWeatherKey}&units=metric`;

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Ooops, Could not fetch ${url}` +
        `, received ${res.status}`);
    }

    const data = await res.json();
    return data;
  };

  getAllCountries = async () => {
    const countries = await this.getResource(this.apiCountryBase);
    return countries;
  };

  getCountry = async (country) => {
    const data = await this.getResource(this.apiCountryBase);
    const res = data.find((item) => item.name === country);
    return res;
  }

  getWeather = async (country, lang) => {
    const weather = await this.getResource(this.apiWeatherBase(country, lang));
    return this.transformWeather(weather);
  }

  getCurrency = async () => {
    fetch('https://api.exchangeratesapi.io/latest?symbols=USD,UAN')
      .then((result) => result.json())
      .then(data => console.log(data))
      .catch((err) => console.log(err));
  }

  transformWeather = (weather) => ({
    weather: weather.weather[0],
    name: weather.name,
    country: weather.sys.country,
    main: weather.main
  })
}

export {
  ShowplaceService
};
