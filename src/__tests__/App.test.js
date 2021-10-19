import { render, fireEvent } from '@testing-library/react'
import App from '../App'

test('SURCHARGE ADDED: ITEMS IS MORE THAN 5', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "10"}})
    fireEvent.change(distance, {target: {value: "1000"}})
    fireEvent.change(items, {target: {value: "5"}})
    fireEvent.change(time, {target: {value: "2021-10-19T14:33"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("2.5")
})

test('SURCHARGE ADDED: PRICE IS LESS THAN 10', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "8.9"}})
    fireEvent.change(distance, {target: {value: "1000"}})
    fireEvent.change(items, {target: {value: "1"}})
    fireEvent.change(time, {target: {value: "2021-10-19T14:33"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("3.1")
})

test('FRIDAY RUSH: PRICE IS PLUS TO 1.1 COEF', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "10"}})
    fireEvent.change(distance, {target: {value: "1000"}})
    fireEvent.change(items, {target: {value: "1"}})
    fireEvent.change(time, {target: {value: "2021-10-22T17:00"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("2.2")
})

test('MAX FEE IS 15$', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "60"}})
    fireEvent.change(distance, {target: {value: "2200"}})
    fireEvent.change(items, {target: {value: "25"}})
    fireEvent.change(time, {target: {value: "2021-10-22T17:00"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("15")
})

test('FREE ORDER IF CART IS MORE THAN 100$', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "100"}})
    fireEvent.change(distance, {target: {value: "1000"}})
    fireEvent.change(items, {target: {value: "1"}})
    fireEvent.change(time, {target: {value: "2021-10-22T17:00"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("0")
})

test('DISTANCE: FIRST 1000M', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "10"}})
    fireEvent.change(distance, {target: {value: "1000"}})
    fireEvent.change(items, {target: {value: "1"}})
    fireEvent.change(time, {target: {value: "2021-10-19T14:00"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("2")
})

test('DISTANCE: ADDITION 500M', () => {
    const { getByTestId } = render(<App/>)

    const cartValue = getByTestId("cart-value")
    const distance = getByTestId("delivery-distance")
    const items = getByTestId("items")
    const time = getByTestId("time")
    const btnSubmit = getByTestId("btn-submit")
    const deliveryFee = getByTestId("delivery-fee")

    fireEvent.change(cartValue, {target: {value: "10"}})
    fireEvent.change(distance, {target: {value: "1499"}})
    fireEvent.change(items, {target: {value: "1"}})
    fireEvent.change(time, {target: {value: "2021-10-19T14:00"}})

    fireEvent.click(btnSubmit);

    expect(deliveryFee.textContent).toBe("3")
})