import { EmailValidator } from '../presentation/protocols/emailValidator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: String): boolean {
    return false
  }
}
