import {useEffect, useState} from "react";
import {Character} from "../Model/Character.ts";
import {Info} from "../Model/Info.ts";
import Blog from "./Blog.tsx";



export default function CharacterGallery(){
    const [characters1, setCharacters] = useState<Character[]>([])
    const [info1,setInfo] = useState<Info>({
        count:0,
        pages:0,
        next:"",
        prev:null
    });

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response) => response.json())
            .then((data) => {
                // Relevante Daten aus der API-Antwort extrahieren
                const infoData: Info = data.results;
                setInfo(infoData);
            })
            .catch((error) => console.error('Fehler beim Abrufen der Daten:', error));
    }, []);

    const fetchCharacters = function (url:string) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Relevante Daten aus der API-Antwort extrahieren
                const characterData: Character[] = data.results;

                // Setze den Zustand auf die neuen Charaktere und aktualisiere die Info
                setCharacters(characterData);
                setInfo({
                    count: data.info.count,
                    pages: data.info.pages,
                    next: data.info.next,
                    prev: data.info.prev
                });
                window.scrollTo({ top: 0, behavior: 'auto' });
            })
            .catch((error) => console.error('Fehler beim Abrufen der Daten:', error));
    };
    const fetchNextCharacters = () => {
        if (typeof info1.next === "string") {
            fetchCharacters(info1.next)
        }

    }
    const fetchPrevCharacters = () => {
        if (typeof info1.prev === "string") {
            fetchCharacters(info1.prev)
        }

    }
    useEffect(() => {
        fetchCharacters('https://rickandmortyapi.com/api/character/')
    }, []);





    return (
        <>
            {characters1.length>0 &&
                <Blog characters={characters1}/>}
            <button onClick={fetchPrevCharacters}>prev</button>
            <button onClick={fetchNextCharacters}>next</button>
        </>
    )
}