import React, { useEffect, useState } from 'react';
import Element from '../block-one';
import ShowplaceService from '../../services';

function App() {
  const showplacesService = new ShowplaceService();
  const [data, setData] = useState([]);
  useEffect(() => {
    //showplacesService.getCountry('italy').then((res) => setData(res))
    showplacesService.getAllCountries.then((res) => setData(res))
    // setData(showplacesService.getCountry('italy'));
  }, []);
  return (
    <div>
      {/* <Element data={data} /> */}
      {data[0].name}
    </div>
  )
}

export default App;
