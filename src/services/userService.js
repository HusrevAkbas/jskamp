export default class UserService {

    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
        //console.log("kullanıcılar eklendi: " + users)
    }

    list(){
        return this.users
        //console.log("kullanıcılar listelendi:")
    }

    getById(id){
        return this.users.find(u => u.id == id)
        //console.log(id + " id li kullanıcı getirildi")
    }
}