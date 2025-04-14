import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.get("/insurances", async () => {
    console.log('Captured a "GET /insurances" request');

    await delay();

    return HttpResponse.json([
      {
        id: 1,
        name: "Insurance A",
        description: "Description A",
      },
      {
        id: 2,
        name: "Insurance B",
        description: "Description B",
      },
    ]);
  }),
];
