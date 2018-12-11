import React from 'react'
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import * as R from 'ramda'

import {fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories} from '../../actions/'
import {getPhonesSelector} from '../../selectors'

const renderPhone = (phone, index, addPhoneToBasket) => {
  const shortDescription = `${R.take(60, phone.description)}...`
  return (
    <div className='col-sm-6 col-md-6 col-lg-4 book-list' key={index}>
      <div className='thumbnail'>
        <img
          className='img-thumbnail'
          src={phone.image}
          alt={phone.name}
        />
        <div className='caption'>
          <h4 className='float-right'>${phone.price}</h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </h4>
          <p>{shortDescription}</p>
          <p className='itemButton'>
            <button
              className='btn btn-primary'
              onClick={() => addPhoneToBasket(phone.id)}
            >
              Buy Now!
            </button>
            <Link
              to={`/phones/${phone.id}`}
              className='btn btn-default'
            >
              More info
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

const Phones = ({phones, loadMorePhones, addPhoneToBasket, fetchCategories}) => (
    <div>
        <div className='books row'>
            {phones.map((phone, index) => renderPhone(phone, index, addPhoneToBasket))}
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <button
                onClick={loadMorePhones}
                className='float-right btn btn-primary'>
                    Load More
                </button>
            </div>
        </div>
    </div>
)

export default compose(
    connect((state: AppState, ownProps) => {
        return ({
            phones: getPhonesSelector(state, ownProps)
        });
    }, {
        fetchPhones,
        loadMorePhones,
        addPhoneToBasket,
        fetchCategories
    }),
  
    lifecycle({
      componentDidMount() {
        const {
            fetchPhones,
            fetchCategories
        } = this.props
        fetchPhones()
        fetchCategories()
      }
    })
  )(Phones)