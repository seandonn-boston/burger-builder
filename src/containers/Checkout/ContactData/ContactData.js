import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    deliveryMethod: '',
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sean Donn',
        email: 'sean@seandonn.io',
        address: {
          street: '125 Summer Street',
          city: 'Boston',
          state: 'MA',
          zipCode: '02110',
          country: 'USA'
        }
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(res => {
          this.setState({loading: false});
          this.props.history.push('/');
      })
      .catch(err => {
          this.setState({loading: false});
      });
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
        <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
        <input className={classes.Input} type="text" name="city" placeholder="Your City" />
        <input className={classes.Input} type="text" name="state" placeholder="Your State" />
        <input className={classes.Input} type="text" name="zipcode" placeholder="Your Zip Code" />
        <input className={classes.Input} type="text" name="country" placeholder="Your Country" />
        <input className={classes.Input} type="text" name="delivery method" placeholder="Your Delivery Method preferencwe" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER NOW</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data!</h4>
        {form}
      </div>
    );
  };
}

export default ContactData;
