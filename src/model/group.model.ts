import { UserModel } from '../model/user.model';

export class GroupModel {
    title: string;
    users: UserModel[];
}