import { Client } from "discord.js";
import { EventHandler } from "../Handlers/EventHandler.js";
import { SlashCommandHandler } from "../Handlers/SlashHandler.js";
export class ExtendedClient extends Client {
    constructor(params) {
        super({ intents: params.intents });
        this.slashCommands = new SlashCommandHandler();
        this.eventHandler = new EventHandler(this);
        this.token = params.token;
        this.login(this.token);
    }
}
