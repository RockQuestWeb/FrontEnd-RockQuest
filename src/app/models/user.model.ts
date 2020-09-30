import { Progress } from './progress.model';
import { Program } from './program.model';

export class User {

    _id: String;
    name: String;
    mail:  String;
    password: String;
    universityCode: Number;
    tickets: Number;
    progress: Progress;
    program: Program; 
}