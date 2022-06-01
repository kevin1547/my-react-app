import { useLocalObservable } from "mobx-react-lite";
import { runInAction } from "mobx";
import axios from "axios";

const initialState = {
  phone: "",
  email: "",
  password: "",
  number: 10,
};

const SignUpStore = () => {
  const store = useLocalObservable(() => ({
    ...initialState,
    plusOne() {
      this.number = this.number + 1;
    },
    decreaseOne() {
      this.number = this.number - 1;
    },
    async signUpSubmitFunc(e) {
      e.preventDefault();
      const information = {
        phone: this.phone,
        email: this.email,
        password: this.password,
      };
      const SignUpMainItem = await axios({
        method: "POST",
        url: "https://evening-cliffs-38545.herokuapp.com/api/user",
        data: information,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      console.log(
        SignUpMainItem.data.status === "ok" ? "註冊成功" : "註冊失敗"
      );
    },
    async signInSubmitFunc(e) {
      e.preventDefault();
      const information = {
        phone: this.phone,
        email: this.email,
        password: this.password,
      };
      const SignInMainItem = await axios({
        method: "POST",
        url: "https://evening-cliffs-38545.herokuapp.com/api/user/login",
        data: information,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      console.log(SignInMainItem.data.msg);
    },
    updateData(dataKey, value) {
      runInAction(() => {
        this[dataKey] = value;
      });
    },
  }));

  return store;
};
export default SignUpStore;
