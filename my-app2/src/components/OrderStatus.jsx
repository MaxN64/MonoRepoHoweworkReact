// import React from 'react'

function OrderStatus({orderId, status }) {
  return (
    <p>
      Заказ  {status} : №{orderId} 
    </p>
  );
}

export default OrderStatus;

