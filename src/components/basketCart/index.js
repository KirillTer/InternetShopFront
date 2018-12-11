import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import {getTotalBasketCount, getTotalBasketPrice} from '../../selectors'

const BasketCart = ({totalBasketCount, totalPrice}) => (
  <div className='cart'>
    <div className='dropdown'>
      <Link
        to='/basket'
        id='dLabel'
        className='btn btn-primary btn-block btn-lg'
      >
        <i className='fa fa-fa-shopping-cart' />
        <span>{totalBasketCount} - item(s) - ${totalPrice}</span>
      </Link>
    </div>
  </div>
)

export default connect((state: AppState) => {
  return ({
      totalBasketCount: getTotalBasketCount(state),
      totalPrice: getTotalBasketPrice(state)
  });
})(BasketCart)
