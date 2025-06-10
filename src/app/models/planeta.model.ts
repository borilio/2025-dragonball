import { Personaje } from "./personaje.model";

export interface Planeta {
    id:          number;
    name:        string;
    isDestroyed: boolean;
    description: string;
    image:       string;
    deletedAt:   null;
    characters:  Personaje[];
}