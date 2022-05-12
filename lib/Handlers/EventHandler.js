import { readdirSync } from "fs";
import { dirname } from "path";
export class EventHandler {
    constructor(client) {
        this.client = client;
    }
    async load(dir) {
        const eventFiles = readdirSync(dir).filter(files => files.endsWith(".js"));
        const baseDir = dirname(require.main.filename);
        for (const file of eventFiles) {
            const event = await import(`${baseDir}/${dir}/${file}`);
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(this, ...args));
            }
            else {
                this.client.on(event.name, (...args) => event.execute(this, ...args));
            }
        }
    }
}
