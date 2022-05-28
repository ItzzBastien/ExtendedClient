import { Client, ClientOptions } from "discord.js";
import { EventHandler } from "../Handlers/EventHandler.js";
import { SlashCommandHandler } from "../Handlers/SlashHandler.js";
export declare class ExtendedClient extends Client {
    slashCommands: SlashCommandHandler;
    eventHandler: EventHandler;
    constructor(params: ClientOptions);
}
