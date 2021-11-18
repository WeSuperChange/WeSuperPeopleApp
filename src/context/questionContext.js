import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const questionContext = createContext()



const QuestionContextProvider = ({ children }) => {
    const [polls, setPolls] = useState(null);

    useEffect(() => {
        let tmpPolls = [];
        const backend = process.env.REACT_APP_DEBUG
            ? process.env.REACT_APP_BACKEND_DEBUG
            : process.env.REACT_APP_BACKEND;
        axios
            .get(`${backend}/api/polls`)
            .then((res) => {
                res.data.data.forEach((e) => {
                    tmpPolls = [...tmpPolls, e];
                });
                setPolls([...tmpPolls]);
                //setPollsReady(true);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <questionContext.Provider value={{ polls }}>
            {children}
        </questionContext.Provider>
    )
}

export default QuestionContextProvider