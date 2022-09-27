import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from './UserContext';




export default function UserInputs() {

    const { levelState, setLvl } = useUserContext();

    const { classState, setClass } = useUserContext();

    const [category, setCategory] = useState([]);

    const changeLevel = event => {
        setLvl(event.target.value);
    };

    const changeClass = event => {
        setClass(event.target.value);
    };

    useEffect(() => {
        const getCategory = async () => {
            const tempClasses = await axios.get('https://www.dnd5eapi.co/api/classes/');
            const classes = await tempClasses.data.results;
            setCategory(classes);
            setClass(classes[0].index);
        }
        getCategory();
    }, [])

    return (
        <div className='container'>
            <div className='container'>
                <label htmlFor='range1' className='form-label h3'> Level </label>
                <input id='range1' type="range" className="form-range" step="1" min="1" max="20" onChange={changeLevel} value={levelState} />
                <p className='h3 text-center'> {levelState} </p>
            </div>
            <select className="form-select form-select-lg mb-3 text-center" value={classState} onChange={changeClass}>
                {
                    category.map(x => <option key={x.index} value={x.index} > {x.name} </option>)
                }
            </select>
        </div>
    )
}
