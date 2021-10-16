import styles from './App.module.css'

import { useForm } from './useForm'

const App = () => {
  
  const initialState = {
    cartValue: Number,
    distance: Number,
    items: Number,
    date: Date
  };

  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );


  function loginUserCallback() {
    const {
      cartValue,
      distance,
      items,
      date
    } = values

    console.log(cartValue)
  }



  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div>
          <span>Cart value: </span>
          <input name="cartValue" onChange={onChange} type="number" required />
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
          <input type="date" name="date" onChange={onChange} required />
        </div>

        <div>
          <input type="submit" defaultValue="Calculate delivery price" />
        </div>
      </form>

      <div>
        <span>Delivery Fee Calculator: Price</span>
      </div>
    </div>
  )
}

export default App;