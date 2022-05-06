import { Client } from "discord.js";
import { EventHandler } from "./Handlers/EventHandler.js";
import { SlashCommandHandler } from "./Handlers/SlashHandler.js";
import { ExtendedClientParam } from "./types";
export declare class ExtendedClient extends Client {
    slashCommands: SlashCommandHandler;
    eventHandler: EventHandler;
    constructor(params: ExtendedClientParam);
}
