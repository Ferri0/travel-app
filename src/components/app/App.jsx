import React, { useEffect, useState } from 'react';
import Element from '../block-one';
import ShowplaceService from '../../services';

function App() {
  const showplacesService = new ShowplaceService();
  const [data, setData] = useState([]);
  const [currentCountry, setcurrentCountry] = useState({});
  useEffect(() => {
    showplacesService.getAllCountries().then((res) => setData(res))
    showplacesService.getCountry('england').then((res) => setcurrentCountry(res))
  }, []);
  return (
    <div>
      <Element data={data} />
      <div>{currentCountry.name}</div>
    </div>
  )
}

export default App;
