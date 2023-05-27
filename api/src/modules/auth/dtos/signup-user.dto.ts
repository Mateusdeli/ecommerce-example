export class SignupUserDTO {
    constructor(
        public name: string,
        public password: string,
        public email: string,
    ) {}
}