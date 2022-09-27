import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ ...props }) => {
    
    const [levelState, setLvl] = useState(1);

    const [classState, setClass] = useState('');

    const [findingFeatures, setFindValue] = useState(true);

    const value = {
        levelState,
        setLvl,
        classState,
        setClass,
        findingFeatures,
        setFindValue
    }

    return <UserContext.Provider {...props} value={value} />;
}

export const useUserContext = () => {
    return useContext(UserContext);
}