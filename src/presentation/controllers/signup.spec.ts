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
    })
});