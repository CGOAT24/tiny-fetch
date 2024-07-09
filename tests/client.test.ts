import {beforeAll, afterAll, test, expect} from "vitest";
import {tinyFetch} from "../src/client";
import app from "./server.js";

let server;

beforeAll(() => {
  server = app.listen(3000);
});

afterAll((done) => {
  server.close(done);
});

test('GET / should return Hello World!', async () => {
  try {
    const { data } = await tinyFetch.get<{data: string}>(`http://localhost:3000/`);
    expect(data).toBe('Hello world!');
  }
  catch (err) {
    expect.unreachable();
  }
});

test('POST / should return data sent', async () => {
  let data = {
    x: 5
  };
  const response = await tinyFetch.post(`http://localhost:3000/`, data);
  expect(response).toEqual(data);
});

test('GET /error should return error', async () => {
    expect(await tinyFetch.get('http://localhost:3000/error')).toThrowError();
});