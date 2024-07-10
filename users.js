import md5 from "md5"

export const hashThePassword = (password) => {
    return md5(password)
}


export const Users = [
    {
        id: 1,
        login: "milena",
        password: hashThePassword("12345678"),
        fullName: "milena arshayan",
        token: "miban"
    }
]

console.log(Users)