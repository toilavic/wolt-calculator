import { useState } from 'react'
import styles from './App.module.css'
import { checkPrice } from './functions/checkPrice'
import { useForm } from './useForm'

const App = () => {

  const initialState = {
    cartValue: Number,
    distance: Number,
    items: Number,
    date: Date
  };

  const { onChange, onSubmit, values } = useForm(
    calculateFee,
    initialState
  );

  const [deliveryFee, setDeliveryFee] = useState(0)

  function calculateFee() {

    var {
      cartValue,
      distance,
      items,
      date
    } = values

    var fee = checkPrice(+cartValue, +distance, +items, date)
    setDeliveryFee(fee)
  }



  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div>
          <span>Cart value: </span>
          <input name="cartValue" onChange={onChange} type="number" step=".01" required />
        </div>

        <div>
          <span>Delivery distance: </span>
          <input name="distance" onChange={onChange} type="number" required />
        </div>

        <div>
          <span>Amount of items: </span>
          <input name="items" onChange={onChange} type="number" required />
        </div>

        <div>
          <span>Time: </span>
          <input type="datetime-local" name="date" onChange={onChange} required />
        </div>

        <div>
          <input type="submit" defaultValue="Calculate delivery price" />
        </div>
      </form>

      <div>
        <span>Delivery Fee Calculator: {deliveryFee}</span>
      </div>
    </div>
  )
}

export default App;