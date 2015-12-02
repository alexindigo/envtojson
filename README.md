# env-to-json

[![Build Status](https://travis-ci.org/ArnaudRinquin/envtojson.svg)](https://travis-ci.org/ArnaudRinquin/envtojson)

Convert current env variables to JSON

```bash
npm envtojson
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
