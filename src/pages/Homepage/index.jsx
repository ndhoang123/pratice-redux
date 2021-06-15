import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

Homepage.propTypes = {
    
};

function Homepage(props) {
    const hobbyList = useSelector(state => state.list);
    console.log('Hobby list:', hobbyList);

    return (
        <div className="home-page">
            <h1>REDUX-HOOKS Home-page!</h1>
        </div>
    );
}

export default Homepage;