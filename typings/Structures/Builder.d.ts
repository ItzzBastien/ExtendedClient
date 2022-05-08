import { Collection } from "discord.js";
import { SlashCommand } from "../Handlers/SlashHandler";
import { ExtendedClient } from "./Extended";
import { REST } from "@discordjs/rest";
export declare class Builder {
    private token;
    private clientId;
    rest: REST;
    commandsArray: any[];
    constructor(client: ExtendedClient);
    globalBuild(commands: Collection<String, SlashCommand>): Promise<string>;
    private globalPushInApp;
}
