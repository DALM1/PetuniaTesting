# PetuniaTesting

TEST WEB (FRONT)

```
curl -X POST http://localhost:3010/tests/web/run \
-H "Content-Type: application/json" \
-d '{"testUrl": "http://localhost:3000"}'
```

TEST DE CHARGE

```
curl -X POST http://localhost:3010/tests/performance/run/k6 \
-H "Content-Type: application/json" \
-d '{}'
```
