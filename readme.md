# stuckapi

Create read only API from your data with one command.

## Usage

- Add your data in json files to ```data``` dir.
- File name equals resource name, e.g. ```users.json``` equals ```/users```
- Run ```npm start```.
- Go to ```localhost:3000/<your-api-endpoint>```

### Filtering

You can filter data passing properties as parameters. E.g. ```example.json``` with

```
[{
    a:1,
    b:2,
    c:3
}, {
    a:4,
    b:5,
    c:6
}]
```

Request ```http://localhost:3000/example?a=4``` returns

```
[{
    a:4,
    b:5,
    c:6
}]
```

### Run server

```npm start```

### Run tests
```npm test```
