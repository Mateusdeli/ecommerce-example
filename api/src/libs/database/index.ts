import database from "../../configs/database";
import { Sequelize } from 'sequelize'
import BaseSchema from "../../libs/database/schemas/base.schema"

class Database {
    private _connection?: Sequelize
    private _model: any

    constructor() {}

    async init(schema: BaseSchema) {
        this._connection = Database.connect()
        const model = await Database.defineModel(this._connection, schema)
        this._model = model
    }

    static connect() {
        const connection = new Sequelize({
            database: database.name,
            dialect: 'postgres',
            host: database.host,
            port: database.port,
            username: database.user,
            password: database.password,
            logging: false,
            quoteIdentifiers: false,
        });
        return connection
    }

    async save(data: any) {
        const { dataValues } = await this._model.create(data, { raw: true })
        return dataValues
    }
    
    async findById(id: number) {
        const model = await this._model.findByPk(id)
        return model
    }

    async findOne(filter = {}) {
        const model = await this._model.findOne({ where: filter })
        return model
    }

    async isConnected() {
        try {
            await this._connection?.authenticate();
            return true
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
    }
    
    static async defineModel(connection: Sequelize, schema: BaseSchema) {
        const model = connection.define(schema.name, schema.schema, schema.options)
        await model.sync()
        return model
    }
}

export default Database