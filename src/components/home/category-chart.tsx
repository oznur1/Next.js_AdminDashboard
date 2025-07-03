import React, { FC } from 'react'



const CategoryChart:FC = () => {

  const labels=["January","February","March", "April", "May","June","July"];
  
  const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[12,19,3,5,2,310],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};



  return (
    <div>
      <div className='bg-white rounded-lg p-5'>
        <h2 className='subitl'>Kategoriler</h2>
        
      
    </div>
    </div>
  )
}

export default CategoryChart
