import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider ({children}) {

    const [login, setLogin] = useState({});
    const [habitList, setHabitList] = useState({});
    const [todayHabits, setTodayHabits] = useState([]);

    return (
        <LoginContext.Provider value={{login, setLogin, habitList,setHabitList, todayHabits, setTodayHabits}}>
            {children}
        </LoginContext.Provider>
    )
}