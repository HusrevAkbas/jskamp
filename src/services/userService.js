import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {

    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(this.checkCustomerValidity(user)){                        
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if(this.checkEmployeeValidity(user)){                        
                        this.employees.push(user)
                    }
                    break;
            
                default:
                    this.errors.push(new DataError("Wrong data type", user))
                    break;
            }
        }
    }

    checkCustomerValidity(user) {
        let requiredFields = "id firstName lastName age city creditCardNumber".split(" ")
        let isValid = true
        for (const field of requiredFields) {
            if(!user[field]) {
                isValid = false
                this.errors.push(new DataError(`missing field. ${field} is required`, user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            isValid = false
            this.errors.push(new DataError(`field error. ${user.age} must be a valid number`, user))
        }
        return isValid
    }
    
    checkEmployeeValidity(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let isValid = true
        for (const field of requiredFields) {
            if(!user[field]) {
                isValid = false
                this.errors.push(new DataError(`missing field. ${field} is required`, user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            isValid = false
            this.errors.push(new DataError(`field error. ${user.age} must be a valid number`, user))
        }
        return isValid
    }

    add(user){
        switch (user.type) {
            case "customer":
                if(this.checkCustomerValidity(user)){                        
                    this.customers.push(user)
                }
                break;

            case "employee":
                if(this.checkEmployeeValidity(user)){
                    this.employees.push(user)
                }
                break;
        
            default:
                this.errors.push(new DataError("This user cannot be added: Wrong data type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers(){
        return this.customers
        //console.log("kullanıcılar listelendi:")
    }

    getCustomerById(id){
        return this.users.find(u => u.id === id)
        //console.log(id + " id li kullanıcı getirildi")
    }

    getCustomersSortedByAge() {
        return this.customers.sort((a,b)=> {
            if(a.firstName < b.firstName){
                return -1
            } else if (a.firstName === b.firstName) {
                return 0
            } else {
                return 1
            }
        })
    }
}