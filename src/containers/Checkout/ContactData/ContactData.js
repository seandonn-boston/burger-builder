import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: ''
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your City'
        },
        value: ''
      },
      state: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your State'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zip Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', display: 'Cheapest'}
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,

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
        <Input elementType="" elementConfig="" value="" />
        <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
        <Input inputtype="input" type="text" name="street" placeholder="Your Street" />
        <Input inputtype="input" type="text" name="city" placeholder="Your City" />
        <Input inputtype="input" type="text" name="state" placeholder="Your State" />
        <Input inputtype="input" type="text" name="zipcode" placeholder="Your Zip Code" />
        <Input inputtype="input" type="text" name="country" placeholder="Your Country" />
        <Input inputtype="input" type="text" name="delivery method" placeholder="Your Delivery Method preferencwe" />
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
