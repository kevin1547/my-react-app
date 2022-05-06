import { createContext, useContext, useState } from "react";
import SignUpWork from "../Work/SignUp/SignUpWork";
import SignUpContext from "../Work/SignUp/store/SignUpStore";

import { DivStyle, ButtonStyle } from "./Index.style";

export const RootStoreContext = createContext();
export const LightContext = createContext();
const RootStore = ({ children }) => {
  const SignUpStore = SignUpContext();
  const [Light, setLight] = useState(true);
  const changeLight = () => {
    setLight((prev) => !prev);
    console.log(Light);
  };
  return (
    <LightContext.Provider value={Light}>
      <DivStyle>
        <ButtonStyle onClick={changeLight}>Change Theme</ButtonStyle>
      </DivStyle>
      <RootStoreContext.Provider value={{ SignUpStore }}>
        {children}
        <SignUpWork />
      </RootStoreContext.Provider>
    </LightContext.Provider>
  );
};
export const useStore = () => useContext(RootStoreContext);

export default RootStore;
