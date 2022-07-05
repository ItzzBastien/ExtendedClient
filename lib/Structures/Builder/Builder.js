import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import axios from "axios";
export class Builder {
    constructor(client) {
        this.token = client.token;
        this.clientId = client.application.id;
        this.rest = new REST({ version: "9" }).setToken(this.token);
    }
    async buildCommands(commands) {
        const globalCommands = [];
        const guildCommands = [];
        commands.forEach(command => {
            const format = command.format();
            if (format.guild) {
                guildCommands.push(format);
            }
            else {
                globalCommands.push(format.body);
            }
        });
        await this.globalPushInApp(globalCommands);
        await this.guildPushInApp(guildCommands);
    }
    async globalPushInApp(commands) {
        try {
            axios.put(`https://discord.com/api/v10/applications/${this.clientId}/commands`, { body: commands }, {
                headers: { "Authorization": `Bot ${this.token}` }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async guildPushInApp(commands) {
        const guildCommands = [];
        for (const element of commands) {
            const guildId = element.guild;
            const findElem = guildCommands.find((value) => value.guild == guildId);
            if (!guildCommands.includes(findElem)) {
                guildCommands.push({ guild: element.guild, body: [element.body] });
            }
            else {
                findElem.body.push(element.body);
            }
        }
        for (const element of guildCommands) {
            try {
                await this.rest.put(Routes.applicationGuildCommands(this.clientId, element.guild), { body: element.body });
            }
            catch (error) {
                throw error;
            }
        }
    }
}
