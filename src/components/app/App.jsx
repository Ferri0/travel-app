import React, { useEffect, useState } from 'react';
import {ShowplaceService} from '../../services';
import Element from '../block-one';
import { Spinner } from "../spinner";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const showplacesService = new ShowplaceService();
    showplacesService.getCountry('italy').then((res) => setData(res))
  }, []);

  return (
    <div>
      <Element data={data} />
      <Spinner />
    </div>
  )
}

export { App };
