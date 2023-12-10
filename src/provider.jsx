import { createContext, useContext, useState, useReducer } from "react";
import App from "./App";

const initData2 = {
    name: "U Chlebíčků",
    suma: 0,
    tables: [[0,[0,0]],
            [0,[0,0]]]
  }

const reducer = (state, action) => {
    
    if (action.type === "eat"){
            const [desk, stool, count] = action.payload
            state.tables[desk][1][stool] += 1
            state.tables[desk][0] += count
            state.suma += count
            console.log(action)
            return{...state};
    }
    
    return state;
}

export const AppContext = createContext(initData2);

//const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {
    const store = useReducer(reducer, initData2);
    return (
            <AppContext.Provider value={store}>
                {children}
            </AppContext.Provider>
        )
}
//export default useAppContext;