import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';

Homepage.propTypes = {
    
};

const RandomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}

function Homepage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    console.log('Hobby list:', hobbyList);

    const newId = RandomNumber();

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        };
        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>REDUX-HOOKS Home-page!</h1>
            <button onClick={handleAddHobbyClick}>Random</button>
            <HobbyList 
                hobbylist={hobbyList}
                activeid={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default Homepage;