import { Personaje } from "./personaje.model";

export interface Raw {
    items: Personaje[];
    meta:  Meta;
    links: Links;
}

export interface Links {
    first:    string;
    previous: string;
    next:     string;
    last:     string;
}

export interface Meta {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}
