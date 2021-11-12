import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component kaydedildi")

let userService = new UserService(new MongoLogger())

let user1 = new User(1,"hüsrev", "akbas", "wien")

userService.add(user1)

console.log(userService.getById(1))


console.log(userService.list())