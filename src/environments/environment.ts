// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loanManagers: 'http://localhost:8000/api/stats/loans_managers', // 8088
  loanBank: 'http://localhost:8000/api/stats/loans_bank',
  accountManagers: 'http://localhost:8000/api/stats/accounts_managers',
  accountBank: 'http://localhost:8000/api/stats/accounts_bank',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
