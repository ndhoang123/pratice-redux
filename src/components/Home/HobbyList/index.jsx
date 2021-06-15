import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
};

HobbyList.defaultProps = {
    hobbyList: []
};

function HobbyList(props) {
    const { hobbyList } = props;
    console.log(hobbyList);
    return (
        <ul className="hobby-list">
            {hobbyList.map(hobby => (
                <li key={hobby.id}>{hobby.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList;