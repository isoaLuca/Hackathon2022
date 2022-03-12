import { createServer, Model } from "miragejs";
import { userRoutes, usersDatas } from "./users.mock";

window.server = null

export const resetStorage = () => {
    window.server  && window.server.db._collections.forEach((collection) => {
		localStorage.removeItem(collection.name);
	});
}

export const loadMirage = () => {
    window.server = createServer({
        models: {
            users: Model,
        },

        seeds(server) {
            server.db._collections.forEach((collection) => {
                const storage = JSON.parse(localStorage.getItem(collection.name));
                if (storage) {
                    storage.forEach((data) => server.schema[collection.name].create(data));
                }
            });

            usersDatas(server);
        },

        routes() {
            userRoutes(this)
        }
    });
}