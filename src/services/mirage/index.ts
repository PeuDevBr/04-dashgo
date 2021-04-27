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
      // user do tipo User, <Partial> user não precisa ter todos os campos de User
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api"; // api/users - para acessar as rotas
      this.timing = 750; // para cada chamada demorar 750ms para testar os carregamentos

      this.get("/users");
      // 'this.get()' - quando acessar a rota '/users' retorna toda a lista de usuários 'user'
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
