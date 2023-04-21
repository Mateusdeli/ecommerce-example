import { DataTypes } from "sequelize";
import crypto from "../../../../libs/crypto";
import BaseSchema from "../../../../libs/database/schemas/base.schema";

const UserSchema: BaseSchema = {
    name: 'users',
    schema: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    options: {
        hooks: {
            beforeCreate: async (instance: any) => {
                const hashPassword = await crypto.encrypt(instance.password)
                instance.password = hashPassword
            }
        }
    }
}

export default UserSchema