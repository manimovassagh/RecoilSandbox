import { useRecoilValue } from "recoil";
import textState from "./atoms";

export default function UserRecoilComponent() {
  const objectRetuen = useRecoilValue(textState);
  console.log(objectRetuen);
  return <div> Here i use it {objectRetuen.name}</div>;
}
