# Node.js Challenge: Microservice Starter

## Goal
To test your ability to be self sufficient, work with 3rd party data, and write code. You have about 4 hours to complete the challenge and at the end you’ll present your work.

## Challenge
You are provided a trivialized API below that we use on an internal project. Your job is to write a Node.js web server that will function as a translator between a data source of your choice and the provided API. In other words the server you write will implement the provided API by making calls to a data source.
The data source can be any kind of public data: a downloaded CSV, data you manually scrapped from a website, or a public API.
This repo is your project seed with getting started instructions and an example translator.

## Evaluation
At the end of the alotted time you will join up with the Collinear Team and walk us through your approach. Be prepared for questions.

## Usage

```js
$ npm start
```

## API

### Get server info (`/`)
Returns:
* server: Object
    * name: string
    * apiVersion: string
* availableDataSeries: Object
    * \<seriesName>: Object
        * name
        * description


### Get data (`/api/:seriesName`)
Returns:
* format: "date"
* initialDataSet: Array
    * Array
        * \<UNIX timestamp>: number
        * \<dataValue>: number
