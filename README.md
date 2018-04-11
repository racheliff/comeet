# Weather Project

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

The project show which weather station (or city) has the most convenient weather in terms of temperature and humidity (the ideal is 21°C, 50%). Below the winning weather station, show the following leading ones.

## Config parameters:

"appId": app ID for the openweathermap API.

"box_coordinates": the bounding box coordinates and zoom '-180,-30,180,45,30'.

"url": url for openweathermap API.

"units": units type.

"sign_units": the sign of the temperature units like '℃'.

"required_temperature": required temperature: 21℃,

"required_humidity": required humidity 50%,

"approximation_result_count": amount of approximatly results.

"hours_refreshing_data": amount of hours we assume that the temperatures can be change to refreash the data.

#### Why did I choose these coordinates?

This is the [data in a geographic coordinate system](https://gis.stackexchange.com/questions/9569/why-are-there-both-square-and-rectangle-world-maps) (latitude-longitude).

and [this is the heat map temperatures in the world](https://commons.wikimedia.org/wiki/File:Annual_Average_Temperature_Map.jpg)
So I took the middle rectangle for the bounding box that the weather can be what we look for:
(-180, -30)(180, 45)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
