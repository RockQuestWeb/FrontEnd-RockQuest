import { Npc } from './npc.model'; 
import { Object } from './object.model';
import { Category } from './category.model';

export class Mission{
    creator: String;
    title: String;
    mechanical: String;
    reward: String;
    NPC: Npc; 
    object: Object; 
    category: Category; 
}