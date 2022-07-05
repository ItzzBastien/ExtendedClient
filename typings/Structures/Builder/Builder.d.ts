import { Collection } from "discord.js";
import { ExtendedClient } from "../Extended";
import { Command } from "./Command";
export declare class Builder {
    private token;
    private clientId;
    private rest;
    constructor(client: ExtendedClient);
    buildCommands(commands: Collection<string, Command>): Promise<void>;
    private globalPushInApp;
    private guildPushInApp;
}
