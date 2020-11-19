import { UserModel } from 'src/model/user.model';

export const environment = {
  production: true,
  url: 'https://rockquest.herokuapp.com',
  user: new UserModel()
};
