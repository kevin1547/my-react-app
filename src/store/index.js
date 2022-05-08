import React, { createContext, useContext, useState } from "react";
import SignUpContext from "../Work/SignUp/store/SignUpStore";
import { DivStyle, ButtonStyle, DivTry, Div, BtnInDivTry } from "./Index.style";
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
  const [clickAlready, setClickAlready] = useState(0);
  const [btn, setBtn] = useState("show");

  function test() {
    setClickAlready(clickAlready + 1);
    setBtn("remove");
    if (clickAlready % 2 !== 0) {
      setBtn("show");
    }
  }
  return (
    <LightContext.Provider value={Light}>
      <DivStyle>
        <DivTry>
          <BtnInDivTry onClick={test}>{btn} the screen shot</BtnInDivTry>
          <Div>
            <LinkComponent clickAlready={clickAlready} test={test} />
          </Div>
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
