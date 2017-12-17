# sensors

```
npm run build
npm test
npm start
```

- There are two system components: api and web.
- Project top level has scripts to build, test, and run all system components.
- API aggregates stats using SensorService and keeps full precision floating points. API users can decide whether to use full precision or to round decimal places. Math functions could be extracted out into a math library.
- Web container keeps full precision for further extensibility. Web presenter formats precision to two decimal places. Format could be extracted out into a utility library. Redux can be used as complexity grows on UI state.
- Favor code readability over performance. No premature optimization.
- Only core functionality is fully unit tested.
- Logging would be great but I had no time.
