import { User } from './user.model';
import { Program } from './program.model';

export class Group {
    title: String;
    user: User; 
    programs: Program; 
}