export declare class SlashCommandHandler {
    private slashCommands;
    constructor();
    load(dir: string): void;
    globalBuild(): Promise<void>;
}
