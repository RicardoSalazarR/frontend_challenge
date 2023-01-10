import React from 'react';

const CharacterCard = ({characterInfo,changeVisibility}) => {
    return (
        <div className='character-container'>
            <div
                className='closeCard-icon'
                onClick={e => changeVisibility()}>
                <box-icon name='x' color='white'></box-icon>
            </div>
            {!characterInfo.image ? <div /> : <img src={characterInfo.image} alt="" className='charcterCard-image' />}

            <p className='card-content'><b>Name:</b>{characterInfo.name}</p>
            <p className='card-content'><b>Status:</b>{characterInfo.status}</p>
            <p className='card-content'><b>Species:</b>{characterInfo.species}</p>
            <p className='card-content'><b>Origin:</b>{characterInfo.origin}</p>
        </div>
    );
};

export default CharacterCard;