import { useState } from 'react'
import styles from './App.module.css'
import calculator from './calculator'
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

    var fee = calculator(+cartValue, +distance, +items, date)
    setDeliveryFee(fee)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <span>Cart value </span>
          <input data-testid="cart-value" name="cartValue" placeholder = "€" onChange={onChange} type="number" min="0" step=".01" required />
        </div>

        <div>
          <span>Delivery distance </span>
          <input data-testid="delivery-distance" name="distance" placeholder = "m" onChange={onChange} min="0" type="number" required />
        </div>

        <div>
          <span>Amount of items </span>
          <input data-testid="items" name="items" onChange={onChange} type="number" min="0" required />
        </div>

        <div>
          <span>Time </span>
          <input data-testid="time" type="datetime-local" name="date" onChange={onChange} required />
        </div>

        <div>
          <input data-testid="btn-submit" type="submit" value="Calculate delivery price" />
        </div>
      </form>

      <div>
        <span>Delivery Price: </span>
        <span data-testid="delivery-fee">{deliveryFee}</span> €
      </div>
    </div>
  )
}

export default App;