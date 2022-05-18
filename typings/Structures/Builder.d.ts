import { Collection } from "discord.js";
import { SlashCommand } from "../Handlers/SlashHandler";
import { ExtendedClient } from "./Extended";
export declare class Builder {
    private token;
    private clientId;
    private rest;
    constructor(client: ExtendedClient);
    globalBuild(commands: Collection<string, SlashCommand>): Promise<string>;
    private globalPushInApp;
}
