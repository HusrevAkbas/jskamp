import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

let userService = new UserService(new MongoLogger())

let user1 = new User(1,"hüsrev", "akbas", "wien")

userService.load()

let customerToAdd = new Customer(8,"Seda", "Yılmaz", "Antalya",25,"123466")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSortedByAge())