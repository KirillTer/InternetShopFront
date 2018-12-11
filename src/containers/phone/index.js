import React from 'react'
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import * as R from 'ramda'

import {fetchPhoneById, addPhoneToBasket} from '../../actions/'
import {getPhoneByIdSelector} from '../../selectors'
import BasketCart from '../../components/basketCart/'
import Navigation from '../../components/navigation/'

const renderFields = (phone) => {
    const columnFields = R.compose(
        R.toPairs,
        R.pick([
          'cpu',
          'camera',
          'size',
          'weight',
          'display',
          'battery',
          'memory'
        ])
      )(phone)
    return columnFields.map(([key, value]) => (
    <div className='column' key={key}>
        <div className='ab-details-title'>
        <p>{key}</p>
        </div>
        <div className='ab-details-info'>
        {value}
        </div>
    </div>
    ))
}

  
const renderContent = (phone) => {
    return (
        <div className='thumbnail'>
            <div className='row'>
            <div className='col-md-6'>
                <img
                className='img-thumbnail'
                src={phone.image}
                alt={phone.name}
                />
            </div>
            <div className='col-md-6'>
                {renderFields(phone)}
            </div>
            </div>
            <div className='caption-full'>
            <h4 className='pull-right'>${phone.price}</h4>
            <h4>{phone.name}</h4>
            <p>{phone.description}</p>
            </div>
        </div>
    )
}

const renderSidebar = (phone, addPhoneToBasket) => {
    return (
        <div>
        <p className='lead'>Quick shop</p>
        <BasketCart />
        <div className='form-group'>
            <h1>{phone.name}</h1>
            <h2>${phone.price}</h2>
        </div>
        <Link to='/' className='btn btn-info btn-block'>Back to store</Link>
        <button
            type='button'
            className='btn btn-success btn-block'
            onClick={() => addPhoneToBasket(phone.id)}
        >
            Add to cart
        </button>
        </div>
    )
}


const Phone = ({phone, addPhoneToBasket}) => (
    <>
    <Navigation />
    <div className='view-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            {phone && renderContent(phone)}
          </div>
          <div className='col-md-3'>
            {phone && renderSidebar(phone, addPhoneToBasket)}
          </div>
        </div>
      </div>
    </div>
    </>
)

export default compose(
    connect((state: AppState) => {
        return ({
            phone: getPhoneByIdSelector(state, state.phonePage.id)
        });
    }, {
        fetchPhoneById,
        addPhoneToBasket
    }),
  
    lifecycle({
      componentDidMount() {
        const {
            fetchPhoneById,
            params
        } = this.props
        fetchPhoneById(params.id)
      }
    })
  )(Phone)