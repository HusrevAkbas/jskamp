import DataError from "../../models/errors/dataError.js"

export default class EmployeeValidator {
    
    constructor(){
        
        //yazım yanlışlarında patlamamak için her biri const değerine atanabilir
        this.requiredFields = ["id", "firstName","lastName", "age", "city","salary"]
        this.errors = []
    }

    isEmployeeValid (user) {
        let isValid = true
        
        let isFieldsValid = this.checkIfFieldsValid (user);
        let isAgeValid = this.checkIfAgeValid (user)

        if(!isFieldsValid || !isAgeValid ){
            isValid = false
        }
        return isValid
    }

    checkIfFieldsValid (user) {
        let isAllFieldsValid = true
        for (const field of this.requiredFields) {
            if(!user[field]) {
                isAllFieldsValid = false
                this.errors.push(new DataError(`missing field. ${field} is required`, user))
            }
        }
        return isAllFieldsValid
    }

    checkIfAgeValid (user) {
        let isAgeValid = true
        if (!user.age) {
            isAgeValid = false
            this.errors.push(new DataError(`missing field. Age is required`, user))
        } else if(Number.isNaN(+user.age)){
            isAgeValid = false
            this.errors.push(new DataError(`missing field. Age is required`, user))
        }
        return isAgeValid
    }
}