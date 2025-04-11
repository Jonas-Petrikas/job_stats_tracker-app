import { createContext, useState } from "react";

const Data = createContext();

export const DataProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);
    return (
        <Data.Provider value={{
            applications, setApplications
        }}>
            {children}
        </Data.Provider>
    )
}
export default Data;