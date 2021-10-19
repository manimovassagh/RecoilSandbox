import { useRecoilValue } from "recoil";
import textState from "./atoms";
import {loadingtext} from './atoms'
import {useRecoilState} from 'recoil';
export default function SomeComp(){

const [loading,setLoading]=useRecoilState(loadingtext)
const name = useRecoilValue(textState);
  
  return(<h1> check it out bitch
    <br/>
<button onClick={()=>setLoading(!loading)}>change Login Status</button>
    <h1> {loading? <div>LoggedIn</div> :<div>LoggedOut</div> }</h1>
     <span role='img' aria-label='just a bitch'>
       😁
       </span>
       {name.name}{'  '}
       {name.family}
       </h1>) 
}