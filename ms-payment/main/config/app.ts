import express, { Express } from 'express'
import setupRoutes from './routes'
import { setupMiddlewares } from './middlewares'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}