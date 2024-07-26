import { User } from "domain/user";

const user = new User({ 
    _id: "2314242323213",
    name: "Bobur",
    surname: "Abdullayev",
    email: "changeitgo3@gmail.com",
    phone: "998939752577",
    password: "34343434",
    deleted: false,
    blocked: false,
    created_at: new Date(),
    updated_at: new Date()
})

console.log(user.toJSON())
