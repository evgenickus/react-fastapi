import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import axios from "axios"
import CryptocurrencyCard from './components/CryptocurrencyCard';

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}

const App = () => {
  const [cryptodata, setCryptodata] = useState([])
  const [id, setId] = useState(null)

  
  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrencies').then(resp =>{
      const cryptodata = resp.data

      const menuItems = [
        getItem("Список криптовалют", "top", null,
        cryptodata.map(item => {
          return {label: item.name, key: item.id}
          }),
        "group",
        )
      ]
      setCryptodata(menuItems)
    })
  }; 


  useEffect(() => {
    fetchCurrencies()
  }, []);

  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='flex'>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['top']}
        mode="inline"
        items={cryptodata}
        className="h-screen overflow-scroll"
      />
      <CryptocurrencyCard id={1}/>
    </div>
  );
};
export default App;