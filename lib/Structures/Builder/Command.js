import { BuilderMessages } from "../../Errors/Messages";
var CommandPermissions;
(function (CommandPermissions) {
    CommandPermissions[CommandPermissions["KICK_MEMBERS"] = 2] = "KICK_MEMBERS";
    CommandPermissions[CommandPermissions["BAN_MEMBERS"] = 4] = "BAN_MEMBERS";
    CommandPermissions[CommandPermissions["ADMINISTRATOR"] = 8] = "ADMINISTRATOR";
    CommandPermissions[CommandPermissions["MANAGE_CHANNELS"] = 16] = "MANAGE_CHANNELS";
    CommandPermissions[CommandPermissions["MANAGE_GUILD"] = 32] = "MANAGE_GUILD";
    CommandPermissions[CommandPermissions["MANAGE_MESSAGES"] = 8192] = "MANAGE_MESSAGES";
    CommandPermissions[CommandPermissions["MANAGE_ROLES"] = 268435456] = "MANAGE_ROLES";
    CommandPermissions[CommandPermissions["MANAGE_WEBHOOKS"] = 536870912] = "MANAGE_WEBHOOKS";
    CommandPermissions[CommandPermissions["MANAGE_EMOJIS_AND_STICKERS"] = 1073741824] = "MANAGE_EMOJIS_AND_STICKERS";
    CommandPermissions[CommandPermissions["MANAGE_THREADS"] = 17179869184] = "MANAGE_THREADS";
    CommandPermissions[CommandPermissions["MODERATE_MEMBERS"] = 1099511627776] = "MODERATE_MEMBERS";
})(CommandPermissions || (CommandPermissions = {}));
var CommandType;
(function (CommandType) {
    CommandType[CommandType["ROLE"] = 1] = "ROLE";
    CommandType[CommandType["USER"] = 2] = "USER";
    CommandType[CommandType["CHANNEL"] = 3] = "CHANNEL";
})(CommandType || (CommandType = {}));
export class Command {
    constructor(commandOptions) {
        this.name = commandOptions.name;
        this.description = commandOptions.description;
        this.guild = commandOptions.guildID;
        this.type = commandOptions.type | 3;
        this.permissions = commandOptions.permissions;
    }
    setName(name) {
        if (!name.match(/^[a-z]{1,32}$/g)) {
            throw Error(BuilderMessages.STRING_DOESNT_MATCH_THE_REGEX(name, "\n- no digit character"));
        }
        this.name = name;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setGuildID(id) {
        this.guild = id;
        return this;
    }
    setCommandType(type) {
        this.type = type;
        return this;
    }
    setPermissions(permissions) {
        let result;
        permissions.forEach(elem => {
            if (!result)
                result = elem;
            else
                result = result | elem;
        });
    }
    format() {
        return {
            guild: this.guild,
            body: {
                type: this.type,
                name: this.name,
                description: this.description,
                permissions: this.permissions
            }
        };
    }
}
