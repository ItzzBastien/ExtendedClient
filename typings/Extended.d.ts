import { Client, ClientOptions } from "discord.js";
import { EventHandler } from "./Handlers/EventHandler.js";
import { SlashCommandHandler } from "./Handlers/SlashHandler.js";
export interface ExtendedClientParam extends ClientOptions {
    slashCommandHandler?: boolean;
    eventHandler?: boolean;
}
export declare class ExtendedClient extends Client {
    slashCommands: SlashCommandHandler;
    eventHandler: EventHandler;
    constructor(params: ExtendedClientParam);
}
