import { Collection, CommandInteraction } from "discord.js";
import { ExtendedClient } from "../Structures/Extended.js";
import { SlashCommandBuilder } from "@discordjs/builders";
export interface SlashCommand {
    data: SlashCommandBuilder;
    execute: (client: ExtendedClient, interaction: CommandInteraction) => any | Promise<any>;
    guild?: string;
}
export declare class SlashCommandHandler {
    readonly slashCommands: Collection<string, SlashCommand>;
    constructor();
    load(dir: string, deepth?: number): Promise<void>;
}
