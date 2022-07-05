export class commandOption {
    constructor(name, description) {
        this.required = false;
        this.name = name;
        this.description = description;
    }
    setRequired(required) {
        this.required = required;
    }
}
