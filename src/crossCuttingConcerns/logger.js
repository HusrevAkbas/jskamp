export class BaseLogger{
    log(data){
        console.log("default logger")
    }

    machEtwas(){
        conosole.log("etwas gemacht")
    }
}
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("logged to elastic")
    }
}
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("mongoya loglandı")
    }
}