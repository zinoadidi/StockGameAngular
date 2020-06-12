# StockGameAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Task 
[See TE_-_Stock_Game.pdf file.](TE_-_Stock_Game.pdf)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Docker
- Build application with prod flag as Stock API has some cors issues with non angular local api calls, solution was to make a copy of api data available locally for this use case.
you can find the data at [src/assets/local-api-data.json](src/assets/local-api-data.json)
<br/> 
`ng build --configuration=production`

- Run docker-compose file
`docker-compose up`

- Application will be live at [http://localhost:80/](http://localhost:80/).
