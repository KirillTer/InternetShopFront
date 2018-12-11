import React from 'react'
import {compose, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import {searchPhone} from '../../actions/'

const handleSubmit = (event, value, searchPhone) => {
    console.log('!', value)
    event.preventDefault();
    searchPhone(value)
}

const Search = withStateHandlers(
    ({ initialValue = '' }) => ({
        value: initialValue,
      }),
      {
        setValue: ({value}) => (val) => ({
            value: val.target.value,
        }),
      })(
    ({value, setValue, searchPhone}) => {
    return (
        <div>
        <div className='well blosd'>
            <h3 className='lead'>Search</h3>
            {/* <div className='input-group'> */}
            <form onSubmit={(event) => handleSubmit(event, value, searchPhone)}>
                <input
                onChange={(event) => setValue(event)}
                type='text'
                className='form-control'
                />
            </form>
            {/* </div> */}
        </div>
        </div>
    )
})

export default compose(
    connect((state: AppState) => {
        return ({

        });
    }, {
        searchPhone
    }),
)(Search)
