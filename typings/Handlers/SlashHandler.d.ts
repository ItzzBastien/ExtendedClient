import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../Extended";
import { SlashCommandBuilder } from "@discordjs/builders";
export interface SlashCommand {
    data: SlashCommandBuilder;
    execute: (client: ExtendedClient, interaction: CommandInteraction) => any | Promise<any>;
}
export declare class SlashCommandHandler {
    private slashCommands;
    constructor();
    load(dir: string): void;
}
