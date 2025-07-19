import { PrismaClient } from './prisma-edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = globalThis as unknown as {
  prismaEdge: ReturnType<typeof createPrismaEdgeClient> | undefined
}

function createPrismaEdgeClient() {
  const client = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  })
  
  // Only add accelerate if we have the accelerate URL
  if (process.env.DATABASE_URL?.includes('accelerate')) {
    return client.$extends(withAccelerate())
  }
  
  return client
}

const prismaEdge = globalForPrisma.prismaEdge ?? createPrismaEdgeClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaEdge = prismaEdge

export default prismaEdge
