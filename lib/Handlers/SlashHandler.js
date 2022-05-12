import { Collection } from "discord.js";
import { readdirSync } from "fs";
import { dirname } from "path";
export class SlashCommandHandler {
    constructor() {
        this.slashCommands = new Collection();
    }
    load(dir) {
        const baseDir = dirname(require.main.filename);
        readdirSync(dir).forEach(async (dirs) => {
            const commandFiles = readdirSync(`${baseDir}/${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
            for (const file of commandFiles) {
                const slashCommand = await import(`./${dir}/${dirs}/${file}`);
                this.slashCommands.set(slashCommand.data.name, slashCommand);
                console.log(`Commande chargé : ${slashCommand.data.name}`);
            }
        });
    }
}
