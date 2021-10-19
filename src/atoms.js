import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: {
    name: "mani",
    family: "movassagh"
  } // default value (aka initial value)
});

export const loadingtext = atom({
  key: "loading",
  default: true
});

export default textState;
