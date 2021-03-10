class ShowplaceService {
  apiBase = '/api/countries';

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Ooops, Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    const data = await res.json();
    return data;
  };

  getAllCountries = async () => {
    const data = await this.getResource(this.apiBase)
    return data
  };

  getCountry = async (country) => {
    const res = await this.getResource(`${this.apiBase}/${country}`);
    return res[country];
  }
}

export {
  ShowplaceService
};
