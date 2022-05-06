import { ExtendedClient } from "../Extended.js";
export declare class EventHandler {
    client: ExtendedClient;
    constructor(client: ExtendedClient);
    load(dir: string): Promise<void>;
}
