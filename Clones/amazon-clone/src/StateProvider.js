import React, {createContext,useContext, useReducer} from "react";

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide the Data layer
export const StateProvider =  ({reducer, initialState, children}) => (
    <StateProvider.Provider value={useReducer(reducer, initialState)} > {children} </StateProvider.Provider>
);
//Pull Information from data layer
export const useStateValue = () => useContext(StateContext);