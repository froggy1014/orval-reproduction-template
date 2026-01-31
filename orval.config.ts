import { defineConfig } from "orval";

export default defineConfig({
  petstore: {
    input: {
      target: "./openapi.yaml",
    },
    output: {
      mode: "tags-split",
      target: "./src/api/endpoint",
      schemas: "./src/api/model",
      httpClient: "axios",
      client: "axios",
      clean: true,
    },
  },
});
