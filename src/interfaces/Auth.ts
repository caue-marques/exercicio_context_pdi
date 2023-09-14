import User from "./User"

export default interface Auth {
    user: User 
    signed: boolean, 
    signin: (userRequest: User) => string, 
    signup: (userRequest: User) => string, 
    signout: () => void
}