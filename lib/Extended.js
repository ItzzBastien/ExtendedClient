import { Client } from "discord.js";
import { EventHandler } from "./Handlers/EventHandler.js";
import { SlashCommandHandler } from "./Handlers/SlashHandler.js";
export class ExtendedClient extends Client {
    constructor(params) {
        super({ intents: params.intents });
        if (params.slashCommandHandler == true)
            this.slashCommands = new SlashCommandHandler();
        if (params.eventHandler == true)
            this.eventHandler = new EventHandler(this);
    }
}
const extended = new ExtendedClient({
    intents: "GUILDS",
    clientID: "aezz"
});
