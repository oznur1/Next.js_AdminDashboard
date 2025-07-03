import React, { FC } from 'react'
import LineGraph from '../graphics/line-graph'

const SalesChart:FC = () => {

     // siparişlerine verine göre grafik datassı oluştur
  const data = {
    labels: orders.map((order) => order.order_date),
    datasets: [
      {
        label: "Satış Tutarı",
        data: orders.map((order) => order.total_price),
        backgroundColor: "rgba(0,150,255,0.5)",
        borderColor: "rgba(0,150,255,1)",
        borderWidth: 2,
        fill: true,
        borderDash: [10, 10], // [çizgi uzunluğu, boşluk uzunluğu]
        tension: 0.4, // eğrilik için (opsiyonel)
      },
    ],
  };

  return (
    <div className='bg-white rounded-lg p-5'>
        <h2 className='subitl'>Satışlar</h2>
      

      <LineGraph data={data}/>
    </div>
  )
}

export default SalesChart
