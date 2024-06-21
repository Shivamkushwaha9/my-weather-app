import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {

  const weather = useWeather();

  useEffect(() => {
    weather.fetchUserData();
  },[]);

  return (
    <div className='main'>
      <h1 className='weather'>Weather API</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
