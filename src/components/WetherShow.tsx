import React, { FC } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../hook';
import { addWether, setIsLoading } from '../redux/mainSlice';
import { ServerAns, WetherType } from '../types/types';
import spinner from '../imgs/loading.gif'

const WetherShow: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, wetherOb } = useAppSelector((state) => state.main);

  React.useEffect(() => {
    const fetchData = async () => {
      const result: ServerAns = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=aec213058af3596a38a337c6e2f26d41&units=metric',
      );
      const readyOb: WetherType = {
        feels_like: result.data.main.feels_like,
        name: result.data.name,
        temp: result.data.main.temp,
        main: result.data.weather[0].main,
        icon: result.data.weather[0].icon,
      };
      await dispatch(addWether(readyOb));
      dispatch(setIsLoading());
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="title">Weather widget</h1>
      <div className="container">
        {isLoading === false ? (
          <>
            <div className="place">{wetherOb.name}</div>
            <div className="stan">{wetherOb.main}</div>
            <div className="temp">
              <span className="tempData">{Math.round(wetherOb.temp)}</span> °C
            </div>
            <div className="tempFill">
              Feels like <span className="feelData">{Math.round(wetherOb.feels_like)}</span> °C
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${wetherOb.icon}.png`}
              className="icon"
              alt="wether icon"
            />
          </>
        ) : (
          <img className='spinner' src={spinner} alt="loading" />
        )}
      </div>
    </>
  );
};

export default WetherShow;
