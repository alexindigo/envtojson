# envtojson-cli

[![Build Status](https://travis-ci.com/alexindigo/envtojson.svg)](https://travis-ci.com/alexindigo/envtojson)

_CLI version of [envtojson](https://github.com/ArnaudRinquin/envtojson) package._

Convert current env variables to JSON

```bash
npx envtojson-cli
```

## Usage `envtojson [indent]`

```bash
$ envtojson
> {"PATH":".bin:./node_modules/.bin","NODE_ENV":"dev",...}

$ envtojson 2
> {
>   "PATH":".bin:./node_modules/.bin",
>   "NODE_ENV":"dev",
>   ...
> }

$ envtojson 2 > env.json && cat env.json
> {
>   "PATH":".bin:./node_modules/.bin",
>   "NODE_ENV":"dev",
>   ...
> }
```
