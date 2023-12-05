import {Character} from "../Model/Character.ts";
import {Origin} from "../Model/Origin.ts";
import CharacterDisplay from "../Components/CharacterDisplay.tsx";
import './Blog.css'
export default function Blog({ characters } :{characters: Character[]}){




    return(
        <div class="blog">
            {characters.map((character: Character) =>
            <CharacterDisplay
                key={character.id}
                id={character.id}
                name={character.name}
                age={character.age}
                origin={character.origin}
                image={character.image}/>
            )}
                </div>

    )
}