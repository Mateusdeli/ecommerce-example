import { Express, json } from 'express'

export const setupMiddlewares = async (app: Express): Promise<Express> => {
  app.use(json())
  return app
}