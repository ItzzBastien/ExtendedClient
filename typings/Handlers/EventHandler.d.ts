import { ExtendedClient } from "../Structures/Extended.js";
export declare class EventHandler {
    client: ExtendedClient;
    constructor(client: ExtendedClient);
    load(dir: string): Promise<void>;
}
