import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbylist: PropTypes.array,
    activeid: PropTypes.number,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbylist: [],
    activeid: 0,
    onHobbyClick: null
};

function HobbyList(props) {
    const { hobbylist, activeid, onHobbyClick } = props;

    const handleClick = (hobby) => {
        if(onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return (
        <ul className="hobby-list">
            {hobbylist.map(hobby => (
                <li 
                key={hobby.id}
                className={hobby.id === activeid ? 'active' : ''}
                onClick={() => handleClick(hobby)}
                >
                    {hobby.title}
                </li>
            ))}
        </ul>
    );
}

export default HobbyList;