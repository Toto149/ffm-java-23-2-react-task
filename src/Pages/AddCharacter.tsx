import {ChangeEvent, FormEvent, useState} from "react";
import {Origin} from "../Model/Origin.ts";
import {Character} from "../Model/Character.ts";

type AddCharacterProps = {
    addNewCharacter : (newCharacter: Character) => void
}
export default function AddCharacter(props:AddCharacterProps) {
    const [characterId, setCharacterId] = useState<number>(0)
    const [characterName, setCharacterName] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [origin, setOrigin] = useState<Origin>({
        name: "",
        url: ""
    })
    const [location, setLocation] = useState<Origin>({
        name: "",
        url: ""
    })
    const [imageUrl, setImageUrl] = useState<string>("")

    function handleInputId(event:ChangeEvent<HTMLInputElement>){
        setCharacterId(Number(event.target.value) + 850)
    }
    function handleInputName(event: ChangeEvent<HTMLInputElement>) {
        setCharacterName(event.target.value)
    }
    function handleInputStatus(event: ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.value)
    }
    function handleInputOrigin(event: ChangeEvent<HTMLInputElement>) {
        setOrigin({
            name:event.target.value,
            url:""
            })
    }
    function handleInputLocation(event: ChangeEvent<HTMLInputElement>) {
        setLocation({
            name: event.target.value,
            url:""
        })
    }
    function handleInputImageUrl(event: ChangeEvent<HTMLInputElement>){
        setImageUrl(event.target.value);
    }

    function createNewCharacter(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newCharacter:Character = {
            id: characterId,
            name:characterName,
            status:status,
            origin:origin,
            location:location,
            image:imageUrl
        }
        alert(newCharacter)
        props.addNewCharacter(newCharacter)
        setCharacterId(0)
        setCharacterName("")
        setStatus("")
        setOrigin( {
            name:"",
            url:""
        })
        setLocation({
            name:"",
            url:""
        })
        setImageUrl("")
    }

    return(
        <>
            <form>
                <h2>Submit this form to generate a new Character to the first page.</h2>
                <h3>First their name:</h3>
                <input type={"text"} value={characterName} defaultValue={"Give a name to the Character"} onChange={handleInputName}/>
                <h3>Their status (Alive, Dead, or Unknown):</h3>
                <input type={"text"} value={status} defaultValue={"Is the character 'Dead', 'Alive' or is his status 'Unknown'"} onChange={handleInputStatus}/>
                <h3>The name of the place of their origin:</h3>
                <input type={"text"} value={origin.name} defaultValue={"Please enter the name of their origin"} onChange={handleInputOrigin}/>
                <h3>The name of their location (i.e. where they currently live):</h3>
                <input type={"text"} value={location.name} defaultValue={"Please enter the name of the location"} onChange={handleInputLocation}/>
                <h3>An URL of an image of them, so it gets displayed in the gallery:</h3>
                <input type={"text"} value={imageUrl} defaultValue={""} onChange={handleInputImageUrl}/>
                <h3>You may also give them an Id:</h3>
                <input type={"number"} value={characterId} defaultValue={"Pleas enter an Id"} onChange={handleInputId}/>
                <button onSubmit={createNewCharacter}> Submit the Character</button>
            </form>

        </>
    )

}