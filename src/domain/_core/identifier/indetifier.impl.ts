import { Identifier } from "domain/_core/identifier"

export class IdentifierImpl implements Identifier{
    public type = "identifier"
    constructor(private identifier: string){}

    toString(): string {
        return this.identifier
    }
}
