import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as R from 'ramda'

import {getBasketPhonesWithCount, getTotalBasketPrice} from '../../selectors'
import {removePhoneFromBasket, cleanBasket, basketCheckout} from '../../actions/'
import Navigation from '../../components/navigation/'

const Basket = ({phones, totalPrice, removePhoneFromBasket, cleanBasket, basketCheckout}) => {
    const isBasketEmpty = R.isEmpty(phones)
  
    const renderContent = () => {
      return (
        <div>
          {isBasketEmpty && <div>Your shopping cart is empty</div>}
  
          <div className='table-responsive'>
            <table className='table-bordered table-striped table-condensed cf'>
              <tbody>
              {phones.map((phone, index) => (
                <tr
                  key={index}
                  className='item-checout'
                >
                  <td className='first-column-checkout'>
                    <img
                      className='img-thumbnail'
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>${phone.price}</td>
                  <td>{phone.count}</td>
                  <td>
                      <span
                        className='delete-cart'
                        onClick={() => removePhoneFromBasket(phone.id)}
                      />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {
            R.not(isBasketEmpty) &&
            <div className='row'>
              <div className='pull-right total-user-checkout'>
                <b>Total:</b>
                ${totalPrice}
              </div>
            </div>
          }
        </div>
      )
    }
  
    const renderSidebar = () => (
        <div>
            <Link
            className='btn btn-info'
            to='/'
            >
            <span className='glyphicon glyphicon-info-sign'/>
            <span>Continue shopping!</span>
            </Link>
            {
            R.not(isBasketEmpty) &&
            <div>
                <button
                onClick={cleanBasket}
                className='btn btn-danger'
                >
                <span className='glyphicon glyphicon-trash' />
                Clear cart
                </button>
                <button
                className='btn btn-success'
                onClick={() => basketCheckout(phones)}
                >
                <span className='glyphicon glyphicon-envelope' />
                Checkout
                </button>
            </div>
            }
        </div>
    )
  
    return (
      <>
        <Navigation />
        <div className='view-container'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                {renderContent()}
                </div>
                <div className='col-md-3 btn-user-checkout'>
                {renderSidebar()}
                </div>
            </div>
            </div>
        </div>
      </>
    )
}
  

export default connect((state: AppState) => {
  return ({
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  });
},{
    removePhoneFromBasket,
    cleanBasket,
    basketCheckout
  }
)(Basket)
