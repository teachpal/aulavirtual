// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: "(DEV)",
  apiUrl: 'http://localhost:4200',
  backend: {
    // baseURL: 'http://localhost:57497/api',
    // baseURLTesoreria: 'http://localhost:57511/api',
    // baseURLSeguridad : 'http://localhost:9864/api'
    baseURLSeguridad: "http://198.71.50.5:5000/api",
    baseURL:"http://198.71.50.5:5001/api",
    baseURLTesoreria: "http://198.71.50.5:5002/api"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
