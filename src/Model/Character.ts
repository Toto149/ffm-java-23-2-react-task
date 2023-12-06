import {Origin} from "./Origin.ts";

export interface Character  {
    id: number,
    name: string,
    status: string,
    origin: Origin,
    location: Origin,
    image:string
}