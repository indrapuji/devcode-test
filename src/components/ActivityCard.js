import React from 'react';
import {TbTrash} from 'react-icons/tb';
import {useNavigate} from 'react-router-dom';

function ActivityCard({data}) {
  const navigate = useNavigate();

  const handleDetail = (idItem) => {
    navigate(`/detail/${idItem}`);
  };
  return (
    <div className='parent'>
      {data &&
        data.map((item) => (
          <div key={item.id} className='activity-card' data-cy='activity-item' onClick={() => handleDetail(item.id)}>
            <div className='activity-body'>
              <h4 data-cy='activity-item-title'>{item.title}</h4>
            </div>
            <div className='card-footer'>
              <span data-cy='activity-item-date'>29 April 2023</span>
              <TbTrash size={25} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default ActivityCard;
