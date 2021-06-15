import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbylist: PropTypes.array,
    activeid: PropTypes.number,
};

HobbyList.defaultProps = {
    hobbylist: [],
    activeid: 0
};

function HobbyList(props) {
    const { hobbylist, activeid } = props;
    return (
        <ul className="hobby-list">
            {hobbylist.map(hobby => (
                <li key={hobby.id}>{hobby.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList;