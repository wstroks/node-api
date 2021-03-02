export class SignUpController {
    handle(httpRequest: any): any {
        
        if(!httpRequest.body.name){
            return {
                statusCode: 400,
                body: new Error('Faltou parametro: nome')
            }
        }

        if(!httpRequest.body.email){
            return {
                statusCode: 400,
                body: new Error('Faltou parametro: email')
            }
        }
       
    }
}