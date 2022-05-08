import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
export class Builder {
    constructor(client) {
        this.token = client.token;
        this.clientId = client.application.id;
        this.rest = new REST({ version: "9" }).setToken(this.token);
    }
    async globalBuild(commands) {
        const commandsArray = [];
        commands.forEach(command => {
            commandsArray.push(command.data.toJSON());
        });
        return await this.globalPushInApp(commandsArray);
    }
    async globalPushInApp(commands) {
        try {
            await this.rest.put(Routes.applicationCommands(this.clientId), { body: commands });
            return "Application Commands successfully registered";
        }
        catch (error) {
            throw error;
        }
    }
}
