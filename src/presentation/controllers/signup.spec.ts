import { SignUpController } from './signup';

describe('SignUp Controller (login)', () => {
    test('Se ele não enviar um nome será retornado um erro 400', () => {
        const sut = new SignUpController();
        const httpRequest = {
            body:{
                //name:"any_name",
                email:"any_email@mail.com",
                password:"any_password",
                passwordConfirmation: "any_password"
            }
        }
       const httpResponse= sut.handle(httpRequest);
       expect(httpResponse.statusCode).toBe(400)
       expect(httpResponse.body).toEqual(new Error('Faltou parametro: nome'))
    })


    test('Se ele não enviar um email será retornado um erro 400', () => {
        const sut = new SignUpController();
        const httpRequest = {
            body:{
                name:"any_name",
                password:"any_password",
                passwordConfirmation: "any_password"
            }
        }
       const httpResponse= sut.handle(httpRequest);
       expect(httpResponse.statusCode).toBe(400)
       expect(httpResponse.body).toEqual(new Error('Faltou parametro: email'))
    })
});