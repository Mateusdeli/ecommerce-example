export default class User {
    constructor(
        readonly email: string,
        readonly password: string,
        readonly name: string,
        readonly id?: number
    ) {
        this.id = id
    }
}