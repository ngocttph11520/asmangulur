import {Spell} from "./spell";

export class Monster {
    'id': Number;
    'name': string;
    'image': string;
    'detail': string;
    'spells': Array<Spell>;
}