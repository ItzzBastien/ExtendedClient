import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
interface CommandConstructor {
    name?: string;
    description?: string;
    guildID?: string;
    type?: CommandType;
    permissions?: CommandPermissions[];
}
declare enum CommandPermissions {
    KICK_MEMBERS = 2,
    BAN_MEMBERS = 4,
    ADMINISTRATOR = 8,
    MANAGE_CHANNELS = 16,
    MANAGE_GUILD = 32,
    MANAGE_MESSAGES = 8192,
    MANAGE_ROLES = 268435456,
    MANAGE_WEBHOOKS = 536870912,
    MANAGE_EMOJIS_AND_STICKERS = 1073741824,
    MANAGE_THREADS = 17179869184,
    MODERATE_MEMBERS = 1099511627776
}
declare enum CommandType {
    ROLE = 1,
    USER = 2,
    CHANNEL = 3
}
export declare class Command {
    private name;
    private description;
    private guild;
    private type;
    private permissions;
    constructor(commandOptions?: CommandConstructor);
    setName(name: string): this;
    setDescription(description: string): this;
    setGuildID(id: string): this;
    setCommandType(type: CommandType): this;
    setPermissions(permissions: CommandPermissions[]): void;
    format(): {
        guild: string;
        body: RESTPostAPIApplicationCommandsJSONBody;
    };
}
export {};
