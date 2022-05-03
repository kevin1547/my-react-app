import { useLocalObservable } from "mobx-react-lite";

const initialState = {
  phone: "",
  email: "abcd@gmail.com",
  password: "",
};
const SignUpStore = () => {
  const store = useLocalObservable(() => ({
    ...initialState,
  }));
  return store;
};
export default SignUpStore;
