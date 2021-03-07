import React, { useEffect, useState } from 'react';
import Element from '../block-one';
import ShowplaceService from '../../services';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const showplacesService = new ShowplaceService();
    showplacesService.getCountry('italy').then((res) => setData(res))
  }, []);

  return (
    <div>
      <Element data={data} />
    </div>
  )
}

export { App };
