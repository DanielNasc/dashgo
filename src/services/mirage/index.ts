import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      // gera dados falsos em massa
      user: Factory.extend({
        name(i: number) {
          return `User ${i}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        created_at() {
          return faker.date.recent(15);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 100);
    },
    routes() {
      this.urlPrefix = "http://localhost:3000";
      this.namespace = "api";
      this.timing = 750;

      // shorthands
      this.get("/users");
      this.post("/users");

      // para nao prejudicar as rotas de api do next
      this.namespace = "";
      this.passthrough(); //
    },
  });

  return server;
}
