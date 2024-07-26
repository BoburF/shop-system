import type { UserModel } from "./model";
import { BaseEntity } from "domain/_core";

export class User extends BaseEntity<UserModel> {
    constructor(model: UserModel) {
        super(model)
    }

    get name(): string {
        return this.model.name
    }

    set name(name: string) {
        this.model.name = name
    }

    get surname(): string {
        return this.model.surname
    }

    set surname(surname: string) {
        this.model.surname = surname
    }

    get phone(): string {
        return this.model.phone
    }

    set phone(phone: string) {
        this.model.phone = phone
    }

    get email(): string {
        return this.model.email
    }

    set email(email: string) {
        this.model.email = email
    }

    get password(): string {
        return this.model.password
    }

    set password(password: string) {
        this.model.password = password
    }

    get deleted(): boolean {
        return this.model.deleted
    }

    set deleted(deleted: boolean) {
        this.model.deleted = deleted
    }

    get blocked(): boolean {
        return this.model.blocked
    }

    set blocked(blocked: boolean) {
        this.model.blocked = blocked
    }

    get createdAt(): number {
        return this.model.created_at.getTime()
    }

    get updatedAt(): number {
        return this.model.updated_at.getTime()
    }

    set updatedAt(updatedAt: Date) {
        this.model.updated_at = updatedAt
    }
}
