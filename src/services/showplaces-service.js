class ShowplaceService {
  apiCountryBase = '/api/countries';

  apiWeatherKey = 'c16994fc025240af68d42239b19a63b1'

  apiWeatherBase = (country = 'ukraine') => `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${this.apiWeatherKey}`;

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

  getWeather = async (country) => {

    const weather = await this.getResource(this.apiWeatherBase(country));
    // {
    //   country: "UA",
    //   main: {
    //     feels_like: 263.91,
    //     grnd_level: 995,
    //     humidity: 96,
    //     pressure: 1015,
    //     sea_level: 1015,
    //     temp: 271.94,
    //     temp_max: 271.94,
    //     temp_min: 271.94,
    //   },
    //   name: "Ukraine",
    //   weather: {
    //     description: "light snow",
    //     icon: "13n",
    //     id: 600,
    //     main: "Snow",
    //   }
    // }
    return this.transformWeather(weather);
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
