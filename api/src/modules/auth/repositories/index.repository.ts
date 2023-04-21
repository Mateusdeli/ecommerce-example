import Database from "../../../libs/database";
import UserSchema from "../db/schemas/user";
import User from "../models/user";

export default class AuthRepository {
    private _database: Database

    constructor(database: Database) {
        this._database = database
        this._database.init(UserSchema)
    }

    async signup(user: User) {
        const data = await this._database.save(user)
        delete data.password
        return data
    }

    async getUser(filter = {}) {
       const user = await this._database.findOne(filter)
       return user.dataValues
    }
}