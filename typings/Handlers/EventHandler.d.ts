import { ClientEvents } from "discord.js";
import { ExtendedClient } from "../Structures/Extended.js";
export interface EventFile {
    name: keyof ClientEvents;
    once: boolean;
    execute: (client: ExtendedClient, ...args: any[]) => any | Promise<any>;
}
export declare class EventHandler {
    private readonly client;
    constructor(client: ExtendedClient);
    load(dir: string): Promise<void>;
}
