import React, { useState } from "react";
import App from "../App";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./themes";
import {
  FourKScreen,
  LaptopLScreen,
  LaptopScreen,
  TabletScreen,
  MobileLScreen,
  MobileMScreen,
  MobileSScreen,
} from "./useScreenType";

export default function Provider() {
  const [colorTheme, setColor] = useState(true);

  function handleThemeChange() {
    setColor(!colorTheme);
  }
  console.log(colorTheme);
  return (
    <>
      {colorTheme ? (
        <ThemeProvider theme={light}>
          <FourKScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 300px 0px 300px"
            />
          </FourKScreen>
          <LaptopLScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 200px 0px 200px"
            />
          </LaptopLScreen>
          <LaptopScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 100px 0px 100px"
            />
          </LaptopScreen>
          <TabletScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 90px 0px 90px"
            />
          </TabletScreen>
          <MobileLScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 40px 0px 40px"
            />
          </MobileLScreen>
          <MobileMScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 40px 0px 40px"
            />
          </MobileMScreen>
          <MobileSScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 40px 0px 40px"
            />
          </MobileSScreen>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={dark}>
          <FourKScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 300px 0px 300px"
            />
          </FourKScreen>
          <LaptopLScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 200px 0px 200px"
            />
          </LaptopLScreen>
          <LaptopScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 100px 0px 100px"
            />
          </LaptopScreen>
          <TabletScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 90px 0px 90px"
            />
          </TabletScreen>
          <MobileLScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 40px 0px 40px"
            />
          </MobileLScreen>
          <MobileMScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 40px 0px 40px"
            />
          </MobileMScreen>
          <MobileSScreen>
            <App
              handleThemeChange={handleThemeChange}
              colorTheme={colorTheme}
              padding="20px 40px 0px 40px"
            />
          </MobileSScreen>
        </ThemeProvider>
      )}
    </>
  );
}
