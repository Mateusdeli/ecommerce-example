import { ModelAttributes, ModelOptions } from "sequelize";

type BaseSchema = {
    name: string,
    schema: ModelAttributes,
    options?: ModelOptions
}

export default BaseSchema