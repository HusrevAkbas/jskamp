import { users } from "../data/users.js"
import DataError from "../models/errors/dataError.js"
import CustomerValidator from "../validators/users/customerValidator.js"
import EmployeeValidator from "../validators/users/employeeValidator.js"

export default class UserService {

    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
        this.customerValidator = new CustomerValidator()
        this.employeeValidator = new EmployeeValidator()
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(this.customerValidator.isCustomerValid(user)){                        
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if(this.employeeValidator.isEmployeeValid(user)){
                        this.employees.push(user)
                    }
                    break;
            
                default:
                    this.errors.push(new DataError("Wrong data type", user))
                    break;
            }
            this.errors.push(...this.customerValidator.errors)
            this.errors.push(...this.employeeValidator.errors)
        }
    }

    add(user){
        switch (user.type) {
            case "customer":
                if(this.customerValidator.isCustomerValid(user)){                        
                    this.customers.push(user)
                }
                break;

            case "employee":
                if(this.employeeValidator.isEmployeeValid(user)){
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
            if(a.age < b.age){
                return -1
            } else if (a.age === b.age) {
                return 0
            } else {
                return 1
            }
        })
    }
}