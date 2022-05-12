import { Collection } from "discord.js";
import { readdirSync } from "fs";
export class SlashCommandHandler {
    constructor() {
        this.slashCommands = new Collection();
    }
    load(dir) {
        readdirSync(dir).forEach(async (dirs) => {
            const commandFiles = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
            for (const file of commandFiles) {
                const slashCommand = await import(`${process.cwd()}/${dir}/${dirs}/${file}`);
                this.slashCommands.set(slashCommand.data.name, slashCommand);
                console.log(`Commande chargé : ${slashCommand.data.name}`);
            }
        });
    }
}
