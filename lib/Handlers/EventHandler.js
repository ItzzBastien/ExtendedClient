import { readdirSync } from "fs";
import * as path from "path";
export class EventHandler {
    constructor(client) {
        this.client = client;
    }
    async load(dir) {
        const eventFiles = readdirSync(dir).filter(files => files.endsWith(".js"));
        for (const file of eventFiles) {
            const event = await import(path.join(dir, file));
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(this, ...args));
            }
            else {
                this.client.on(event.name, (...args) => event.execute(this, ...args));
            }
        }
    }
}
