import { createContext, useContext, useState, useReducer } from "react";
import App from "./App";

const initData2 = {
    name: "U Chlebíčků",
    suma: 0,
    tables: [[0,[0,0]],
            [0,[0,0]]]
  }

const reducer = (state, action) => {
    //console.log(state);
    //console.log(action);


    if (action.typeof === "eat"){
        const [table, stool, count] = action.payload;

    // Create a new copy of the state to avoid modifying the original state directly
    const newState = {
      ...state,
      tables: state.tables.map((tableData, index) => {
        if (index === table) {
          // Update the specific table and stool
          return [
            tableData[0] + count,
            tableData[1].map((stoolValue, stoolIndex) =>
              stoolIndex === stool ? stoolValue + 1 : stoolValue
            ),
          ];
        }
        return tableData;
      }),
      suma: state.suma + count,
    };

    return newState;
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