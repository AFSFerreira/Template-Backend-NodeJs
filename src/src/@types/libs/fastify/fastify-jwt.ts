import type { UserRoleType } from '@custom-types/generated/prisma/enums'
import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      role: UserRoleType
      sub: string
    }
  }
}
