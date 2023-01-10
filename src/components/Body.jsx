import React from 'react';
import axios from 'axios'
import Sidebar from './Sidebar'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

const Body = () => {
    const [isVisible,setIsVisible] = useState(false)
    const userName = useSelector(state => state.username)
    const [characters, setCharacters] = useState([])
    const [characterInfo, setCharacter] = useState({})
    useEffect(() => {
        const array2 = []
        for (let index = 0; index < 8; index++) {
            const id = Math.floor(Math.random() * (826) + 1)
            array2.push(id)
        }
        axios.get(`https://rickandmortyapi.com/api/character/${array2}`)
            .then(res => setCharacters(res.data))
    }, [])
    const changeVisibility = ()=>{
        setIsVisible(!isVisible)
    }
    return (
        <div className='Home'>
            <Sidebar />
            <div className='body-container' onClick={e=>{isVisible&&changeVisibility()}}>
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
                            <div className={`character-card`} key={character.id}
                                onClick={() => {
                                    changeVisibility()

                                    setCharacter({
                                        image: character.image,
                                        name: character.name,
                                        status: character.status,
                                        species: character.species,
                                        origin: character.origin?.name
                                    })}}>
                                <img src={character.image} alt="" />
                                <h3>{character.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={isVisible ? '' : 'hide'}>
                <CharacterCard characterInfo={characterInfo} changeVisibility={changeVisibility}/>
            </div>
        </div>
    );
};

export default Body;