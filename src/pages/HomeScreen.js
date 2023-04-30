import React, {useEffect, useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import ActivityCard from '../components/ActivityCard';
import axios from 'axios';

function HomeScreen() {
  const [list, setList] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const {data} = await axios({
        method: 'GET',
        // url: `https://todo.api.devcode.gethired.id/activity-groups?email=indrapuji@gmail.com`,
        url: `https://todo.api.devcode.gethired.id/activity-groups?email=ivan@skyshi.com`,
      });
      console.log(data.data);
      setList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='app-container'>
      <div className='todo-header'>
        <h1 data-cy='activity-title'>Activity</h1>
        <button data-cy='activity-add-button' className='button'>
          <span className='icon-plus'>
            <FaPlus />
          </span>
          Tambah
        </button>
      </div>
      <ActivityCard data={list} className='parent' />
    </div>
  );
}

export default HomeScreen;
