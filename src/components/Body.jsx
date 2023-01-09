import React from 'react';
import axios from 'axios'
import Sidebar from './Sidebar'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import { changeVisibilitiy } from '../store/slices/showCard.slice';
import { changeUrl } from '../store/slices/characterUrl.slice';

const Body = () => {
    const show2 = useSelector(state=>state.showCard)

    const userName = useSelector(state => state.username)
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const array2 = []
        for (let index = 0; index < 8; index++) {
            const id = Math.floor(Math.random() * (826) + 1)
            array2.push(id)
        }
        axios.get(`https://rickandmortyapi.com/api/character/${array2}`)
            .then(res => setCharacters(res.data))
    }, [])
    const dispatch = useDispatch()

    const newUrl = (url) => {
        
            dispatch(changeUrl(url))
    }
    return (
        <div className='Home'>
            <Sidebar />
            <div className='body-container'>
                <div className='bar-container'>
                    <box-icon name='menu-alt-left'></box-icon>
                    <div>
                        <box-icon name='user' type='solid' ></box-icon>
                        <span>{userName}</span>
                    </div>
                </div>
                <div className='header-container'>
                    <h1>Hero Header</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi ratione nam quia, laboriosam reprehenderit voluptate maxime dolores dignissimos nesciunt inventore praesentium soluta tenetur culpa nobis iusto iste dolore quaerat pariatur, nostrum et. Omnis commodi ducimus blanditiis aut enim doloribus repellat vero.</p>
                </div>
                <div className='characters-container'>
                    {
                        characters.map(character => (
                            // <Link to={`/character/${character.id}`} className='character-card' key={character.id}>
                            //     <img src={character.image} alt="" /> 
                            //     <h3>{character.name}</h3>
                            // </Link> 
                            <div
                                className={`character-card`}
                                key={character.id}
                                onClick={() => {
                                    
                                        newUrl(character.url)
                                        
                                    dispatch(changeVisibilitiy(true))
                                }}
                            >
                                <div className={show2 ? '' : 'hide'}>
                                    <CharacterCard />
                                </div>
                                <img src={character.image} alt="" />
                                <h3>{character.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Body;