import { ExtendedClient } from "../Structures/Extended.js";
export declare class EventHandler {
    private client;
    constructor(client: ExtendedClient);
    load(dir: string): Promise<void>;
}
