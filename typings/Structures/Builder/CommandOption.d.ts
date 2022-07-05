export declare class commandOption {
    protected required: boolean;
    protected name: string;
    protected description: string;
    constructor(name: string, description: string);
    setRequired(required: boolean): void;
}
