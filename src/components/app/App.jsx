import React, { useEffect, useState } from 'react';
import Element from '../block-one';
import ShowplaceService from '../../services';

function App() {
  const showplacesService = new ShowplaceService();
  const [data, setData] = useState([]);
  useEffect(() => {
    showplacesService.getAllCountries().then((res) => setData(res))
  }, []);
  return (
    <div>
      <Element data={data} />
    </div>
  )
}

export default App;
