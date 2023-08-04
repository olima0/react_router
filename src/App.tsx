import React from "react";
import {BrowserRouter} from "react-router-dom"
import { GlobalStyle, Main } from "./styles/GlobalStyle";
import {RouterSoftware} from "./routes"


export function App() {

  return (
    
    <BrowserRouter>
      <GlobalStyle />
      <RouterSoftware />
    </BrowserRouter>
    
      
    
  )
}

