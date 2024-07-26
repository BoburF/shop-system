import { Identifier, IdentifierImpl } from "domain/_core/identifier";

export class BaseEntity<T extends { _id: Identifier }> {
    protected model: T

    constructor(data: T) {
        this.model = data
    }

    get id(): string {
        return this.model._id.toString()
    }

    set id(id: string) {
        this.model._id = new IdentifierImpl(id)
    }

    toJSON() {
        const jsonObj: { [key: string]: any } = {}

        Object.entries(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this)))
            .filter(([_, descriptor]) => typeof descriptor.get === 'function')
            .forEach(([key, descriptor]) => {
                if (descriptor && key[0] !== '_') {
                    try {
                        // @ts-ignore
                        const val = this[key];
                        jsonObj[key] = val;
                    } catch (error) {
                        console.error(`Error calling getter ${key}`, error);
                    }
                }
            });

        return JSON.stringify(jsonObj)
    }
}
