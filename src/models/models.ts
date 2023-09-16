export type UserTokenData = { id: string }
export type TokenMetaData = { iat: number; exp: number }
export type DecodedToken = UserTokenData & TokenMetaData
