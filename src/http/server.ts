import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { getPendingGoalsRoute } from './routes/get-pending-goals'
import { createCompletionRoute } from './routes/create-completion'
import { createGoalRoute } from './routes/create-goal'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalsRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server running!')
  })
