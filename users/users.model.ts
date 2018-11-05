import * as mongoose from 'mongoose'

// Apenas para controle statico
// Define as propriedas no model
export interface User extends mongoose.Document{
    name: string,
    email: string, 
    password: string
}

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    }
})

export const User = mongoose.model<User>("User", userSchema)