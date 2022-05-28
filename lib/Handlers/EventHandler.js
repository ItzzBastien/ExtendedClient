import { readdir } from "fs/promises";
import * as path from "path";
export class EventHandler {
    constructor(client) {
        this.client = client;
    }
    async load(dir) {
        const eventFiles = (await readdir(dir)).filter(file => file.endsWith(".js"));
        for (const file of eventFiles) {
            const event = await import(`file://${path.resolve(dir, file)}`);
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(this, ...args));
            }
            else {
                this.client.on(event.name, (...args) => event.execute(this, ...args));
            }
        }
    }
}
