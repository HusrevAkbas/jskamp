import Customer from "../models/users/customer.js"
import User from "../models/users/user.js"
import UserService from "../services/userService.js"
import { MongoLogger } from "../crossCuttingConcerns/logger.js"

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