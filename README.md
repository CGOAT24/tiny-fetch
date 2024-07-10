# Tiny-fetch
Tiny-fetch is a wrapper for fetch with minimal size!

## Usage
```typescript
import { tinyFetch } from "@cgoat24/tiny-fetch/src/client"

const someData = await tinyFetch.get('/api/endpoint');

const result = await tinyFetch.post('/api/create', {
  name: 'tiny-fetch',
  awesome: true
});

await tinyFetch.delete(`/api/${id}`, {
  priority: 'high'
});
```