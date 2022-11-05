import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
    const [fromCurrency, setFromCurrency] = React.useState('CZK');
    const [toCurrency, setToCurrency] = React.useState('USD');
    const [rates, setRates] = React.useState({});

    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then((res) => res.json())
            .then((json) => {
                setRates(json.rates);
            })
            .catch((err) => {
                console.warn(err);
                alert('Failed to get information')
            });
    }, []);

  return (
    <div className="App">
      <Block value={0} currency="fromCurrency" onChangeCurrency={setFromCurrency} />
        <Block value={0} currency="toCurrency" onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default App;
