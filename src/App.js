import "./styles.css";
import { RecoilRoot } from "recoil";
import UserRecoilComponent from "./RecoilUserComponent";
import SomeComp from "./SomeComp";
export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <SomeComp/>
        <UserRecoilComponent />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </RecoilRoot>
  );
}
