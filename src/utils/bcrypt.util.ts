import * as bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = async (password: string) => bcrypt.hash(password, SALT_ROUNDS)

export const comparePassword = async (pass: string, hash: string) => bcrypt.compare(pass, hash)
