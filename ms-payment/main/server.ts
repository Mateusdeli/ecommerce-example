import 'dotenv/config'

(async () => {
  const port = process.env.PORT || 3001
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  app.listen(port, () => {
    console.log(`[Payment Server] listen in port ${port}`);
  })
})()
