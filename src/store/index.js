import React, { createContext, useContext, useState } from "react";
import SignUpContext from "../Work/SignUp/store/SignUpStore";
import { DivStyle, ButtonStyle, DivTry, BtnInDivTry } from "./Index.style";
/// /////////////////////
import LinkComponent from "../components/Link/LinkComponent";

export const RootStoreContext = createContext();
export const LightContext = createContext();
const RootStore = ({ children }) => {
  const SignUpStore = SignUpContext();
  const [Light, setLight] = useState(true);
  const changeLight = () => {
    setLight((prev) => !prev);
  };
  return (
    <LightContext.Provider value={Light}>
      <DivStyle>
        <DivTry>
          <LinkComponent />
        </DivTry>
        <ButtonStyle onClick={changeLight}>Change Theme</ButtonStyle>
      </DivStyle>
      <RootStoreContext.Provider value={{ SignUpStore }}>
        {children}
      </RootStoreContext.Provider>
    </LightContext.Provider>
  );
};
export const useStore = () => useContext(RootStoreContext);

export default RootStore;
