import { UserModel } from 'src/model/user.model';

export const environment = {
  production: true,
  url: 'https://rockquest.herokuapp.com',
  user: new UserModel(),
  data: [],
  imageUrl: 'https://api.cloudinary.com/v1_1/nsdata/image/upload',
  cloudinayPass: 'gvjk53bh'
};
