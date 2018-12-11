import React from 'react'
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router'
import classNames from 'classnames'
import * as R from 'ramda'

import {getCategoriesSelector, getActiveCategoryIdSelector} from '../../selectors'

const Categories = ({categories, activeCategoryId}) => {
    const renderCategory = (category, index) => {
        const getActiveState = R.propEq('id', activeCategoryId)
    
        const linkClass = classNames({
          'list-group-item': true,
          'active': getActiveState(category)
        })
      
        return (
          <Link
            to={`/categories/${category.id}`}
            className={linkClass}
            key={index}
          >
            {category.name}
          </Link>
        )
    }

    const renderAllCategory = () => {
        const linkClass = classNames({
          'list-group-item': true,
          'active': R.isNil(activeCategoryId)
        })
      
        return (
          <Link
            to='/'
            className={linkClass}
          >
            All
          </Link>
        )
    }

    return (
        <div>
            <div className='well'>
            <h4>Brand</h4>
            <div className='list-group'>
                {renderAllCategory()}
                {categories.map((category, index) => renderCategory(category, index))}
            </div>
            </div>
        </div>
    )
}

export default compose(
    withRouter,
    connect((state: AppState, ownProps) => {
        return ({
            categories: getCategoriesSelector(state),
            activeCategoryId: getActiveCategoryIdSelector(ownProps)
        });
    }, {

    }),
)(Categories)


