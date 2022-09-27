import { useEffect, useState } from 'react'
import { useUserContext } from './UserContext';
import axios from 'axios';
import Feature from './Feature'

export default function FeaturesDis() {

    const [features, setFeatures] = useState([]);

    const { levelState, classState } = useUserContext();

    const { findingFeatures, setFindValue } = useUserContext();

    useEffect(() => {
        const getFeatures = async () => {
            const featureList = await axios.get('https://www.dnd5eapi.co/api/features/')
                .then(res => res.data.results);
            const finalList = await Promise.all(featureList.map(x =>
                axios.get('https://www.dnd5eapi.co' + x.url)
                    .then(res => res.data)));
            setFeatures(finalList);
        }
        getFeatures();
    }, [])

    useEffect(() => {
        if (features.length > 0)
            setFindValue(false);
    }, [features])


    const setFeatureDisplay = () => {
        if (findingFeatures) {
            return (<div className='container text-center'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
        }
        else {
            let resultado = []
            for (let i = 0; i < features.length; i++) {
                const element = features[i];
                // Cambiar si se agrega soporte a subclases
                if (element.class.index === classState && element.level <= levelState && (typeof element.subclass === 'undefined')) {
                    resultado.push(
                        <Feature title={element.name} id={i} key={element.index} level={element.level}>
                            {element.desc}
                        </Feature>
                    );
                }
            }
            const sortedRes = resultado.sort((a, b) => {
                if (a.props.level === Infinity)
                    return 1;
                else if (isNaN(a.props.level))
                    return -1;
                else
                    return a.props.level - b.props.level;
            }
            );
            return sortedRes;
        }

    };

    return (
        <div className='container'>
            <div className="card rounded-0">
                <div className="card-header h3">
                    Features
                </div>
                <div className="card-body">
                    <div className="accordion" id="featureAccordion">
                        {
                            setFeatureDisplay()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
