import type { CamelCaseKeys } from "domain/_core";
import { Identifier } from "domain/_core/identifier/identifier";

export interface UserModel{
    _id: Identifier
    name: string
    surname: string
    phone: string
    email: string
    password: string
    deleted: boolean
    blocked: boolean
    created_at: Date
    updated_at: Date
}

export type CamelCaseUserModel = CamelCaseKeys<UserModel>
