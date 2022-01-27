import React, { useState, useEffect } from 'react';
import UserData from './UserData';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [data, setData] = useState(UserData);
  const [icon, setIcon] = useState(false);

  // useEffect(() => {
  //   userdata();
  // }, []);

  // const userdata = () => {
  //   fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c").then((result) => {
  //     result.json().then((resp) => {
  //       setData(resp);
  //     });
  //   });
  // };

  const handleInput = (e) => {
    setUser(e.target.value);

    if (user === '') {
      setIcon(true);
    }
  };

  const handleInputData = (e) => {
    e.preventDefault();
  };

  const remove = () => {
    setUser('');
  };

  return (
    <div className='container'>
      <div className='container__box'>
        <form onSubmit={handleInputData}>
          <div className='input__serchIcon'>
            <box-icon name='search' color='#323232'></box-icon>
          </div>
          <input
            type='text'
            value={user}
            onChange={handleInput}
            name='user'
            autoComplete='off'
            placeholder='Search Users'
          />

          {icon ? (
            <div className='input_removeIcon' onClick={remove}>
              <box-icon name='x' size='32px' color='#323232'></box-icon>
            </div>
          ) : null}
        </form>

        <ul>
          <div className='container__list'>
            {data
              .filter((val) => {
                if (user === '') {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(user.toLowerCase())
                ) {
                  return val;
                } else if (val.id.toLowerCase().includes(user.toLowerCase())) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <li>
                    <span>{item.id}</span>
                    <p>{item.name}</p>
                    <h4>{item.address}</h4>
                    <h4>{item.pincode}</h4>
                  </li>
                );
              })}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
