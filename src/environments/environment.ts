// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { UserModel } from 'src/model/user.model';

export const environment = {
  production: false,
  url: 'https://rockquest.herokuapp.com',  
  user: new UserModel(),
  data: [],
  imageUrl: 'https://api.cloudinary.com/v1_1/nsdata/image/upload',
  cloudinayPass: 'gvjk53bh'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
