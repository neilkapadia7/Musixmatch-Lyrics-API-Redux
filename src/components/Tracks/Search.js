import React, {useState} from 'react';
import {connect} from 'react-redux';
import { getTracks } from '../../actions/trackActions';
import PropTypes from 'prop-types';

const Search = ({getTracks}) => {
    const [search, setSearch] = useState('');

    const onChange = e => {
        setSearch(e.target.value);       
    }

    const onSubmit = e => {
        e.preventDefault();
        var keyword = search;
            var i = 0;
            for(i; i < keyword.length; i++) {
                keyword = keyword.replace(" ", "+");
            }
        console.log(keyword);
        getTracks(keyword)
        setSearch('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text' 
                    placeholder='Search Track' 
                    value={search} 
                    onChange={onChange} 
                    name='search'
                    required
                />
                <input type='submit' value='Get Tracks' />
            </form>
        </div>
    )
}

Search.propTypes = {
    getTracks: PropTypes.func.isRequired
}

export default connect(null, {getTracks})(Search);
