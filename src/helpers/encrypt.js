import crypto from 'crypto'
import { algorithm } from './../constanse'

export const encrypt = (text, password) => {
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
