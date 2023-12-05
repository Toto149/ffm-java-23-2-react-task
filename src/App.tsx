
import './App.css'
import Blog from "./Pages/Blog.tsx";
import {Character} from "./Model/Character.ts";
import {Origin} from "./Model/Origin.ts";


function App() {

    const origin: Origin = {
        name:"Earth",
        url:" "
    }
    const character:Character = {
        id: 2,
        name:"Morty Smith",
        age:15,
        origin: origin,
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    }
    const characters1: Character[]=[character,character,character,character];
  return (
    <>
        {characters1 &&
        <Blog characters={characters1}/>}
    </>
  )
}

export default App
