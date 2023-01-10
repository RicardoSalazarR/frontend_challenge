import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeVisibilitiy } from '../store/slices/showCard.slice';
import { useSelector } from 'react-redux';

const CharacterCard = () => {
    const dispatch = useDispatch()
    const [character, setCharacter] = useState([])
    const url = useSelector(state => state.url)

    useEffect(() => {
        if (url) {
            axios.get(url)
                .then(res => setCharacter(res.data))
        }

    }, [character,url])
    return (
        <div className='character-container'>
            <div
                className='closeCard-icon'
                onClick={e => setTimeout(() => dispatch(changeVisibilitiy(false)), 100)}>
                <box-icon name='x' color='white'></box-icon>
            </div>
            {!character.image ? <div /> : <img src={character.image} alt="" className='charcterCard-image' />}
            
            <p className='card-content'><b>Character Name:</b>{character.name}</p>
            <p className='card-content'><b>Status:</b>{character.status}</p>
            <p className='card-content'><b>Species:</b>{character.species}</p>
            <p className='card-content'><b>Origin:</b>{character.origin?.name}</p>
        </div>
    );
};

export default CharacterCard;