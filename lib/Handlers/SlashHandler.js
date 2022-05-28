import { Collection } from "discord.js";
import { readdir } from "fs/promises";
import * as path from "path";
export class SlashCommandHandler {
    constructor() {
        this.slashCommands = new Collection();
    }
    async load(dir, deepth = 0) {
        if (deepth < 0)
            throw new Error("Deepth must be greater than 0");
        const files = await readdir(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            if (deepth > 0) {
                await this.load(filePath, deepth - 1);
            }
            else {
                const slashCommand = await import(`file://${path.resolve(filePath)}`);
                this.slashCommands.set(slashCommand.data.name, slashCommand);
            }
        }
    }
}
