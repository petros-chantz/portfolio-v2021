import React,{useState} from "react";
import App from "../App";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./themes";

export default function Provider() {
    const [colorTheme, setColor] = useState(true);

    function handleThemeChange() {
        setColor(!colorTheme);
    }
    console.log(colorTheme);
    return (<>
         {  colorTheme ? 
                <ThemeProvider theme={light}>
                      <App handleThemeChange={handleThemeChange} colorTheme={colorTheme}/>
                </ThemeProvider>
            :
                <ThemeProvider theme={dark} >
                     <App handleThemeChange={handleThemeChange} colorTheme={colorTheme}/>
                </ThemeProvider>
        }
    </>);
}

          