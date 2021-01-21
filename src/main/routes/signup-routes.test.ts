import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Cleitinho',
        email: 'cleiti@inho.com',
        password: 'Clei123',
        passwordConfirmation: 'Clei123'
      })
      .expect(200)
  })
})
