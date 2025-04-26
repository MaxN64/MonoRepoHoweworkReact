
import Greeting from "./components/Greeting";
import OrderStatus from "./components/OrderStatus";
import ShoppingList from "./components/ShoppingList";



function App() {
  const  userName = 'Алексей';
  const products = ['Хлеб', 'Молоко', 'Яйца'];
  const order = [
    { orderId: 101, status: 'обработан'},
    { orderId: 102, status: 'в пути' },
    { orderId: 103, status: 'доставлен' },
  ];


  return (
    <div>
<Greeting name={userName} />
<hr />

<h2>Список покупок</h2>
<ShoppingList item={products} />
<hr />

<h2>Статусы заказов</h2>
<hr />
{order.map(o => (
  <OrderStatus
  key={o.orderId}
  orderId={o.orderId}
  status={o.status}
        />
))}

    </div>
  );
}

export default App;

