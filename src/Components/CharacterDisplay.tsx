import {Character} from "../Model/Character.ts";
import {Origin} from "../Model/Origin.ts";
import './CharacterDisplay.css'

export default function CharacterDisplay(character: Character){



    return(
        <div class="container">
            <div>
            <div class="head" >
                <img src={character.image} alt={character.name} class="image"/>
            </div>
            <div class="name">
                <h3>{character.name}</h3>
            </div>
            </div>
            <div class="list">
                <li>
                    Age: {character.age}
                </li>
                <li>
                    Origin: {character.origin.name}
                </li>
            </div>
        </div>
    )


}