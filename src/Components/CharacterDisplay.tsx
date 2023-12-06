import {Character} from "../Model/Character.ts";
import {Origin} from "../Model/Origin.ts";
import './CharacterDisplay.css'

export default function CharacterDisplay(character: Character){



    return(

        <div class="container">
            <div class="head" >
                <img src={character.image} alt={character.name} class="image"/>
            </div>
            <div class="name">
                <h5>{character.name}</h5>
            </div>

            <div class="list">
                <li>
                    Status: {character.status}
                </li>
                <li>
                    Origin: {character.origin.name}
                </li>
                <li>
                    Location: {character.location.name}
                </li>
            </div>
            </div>
    )


}