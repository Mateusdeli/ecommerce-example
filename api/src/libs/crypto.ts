import crypto from 'crypto-js'
import cryptoConfig from '../configs/crypto'

async function encrypt(data: string) {
    try {
        return crypto.AES.encrypt(data, cryptoConfig.key).toString()
    } catch(error) {
        console.log('Encrypt error:', error);
    }
}

async function decrypt(encrypted: string) {
    try {
        const bytes = crypto.AES.decrypt(encrypted, cryptoConfig.key)
        if (!bytes) {
            return encrypted
        }
        return bytes.toString(crypto.enc.Utf8);
    } catch(error) {
        console.log('Decrypt error:', error);
    }
}

export default {
    encrypt,
    decrypt
}