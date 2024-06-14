import React, { createContext } from 'react'
import useFetch from '../hook/useFetch';
import { getBookUrl } from '../service/booksUrl.service';

export const apiContext=createContext({loading:false,error:null,data:null});
const ApiContextProvider = ({children}) => {
    const {loading,error,data}=useFetch(getBookUrl,"books")
  return (
    <apiContext.Provider value={{loading,error,data}}>{children}</apiContext.Provider>
  )
}

export default ApiContextProvider