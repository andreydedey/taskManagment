import fastify from 'fastify'
import { z } from 'zod'
import type {
  FastifyPluginAsyncZod,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../services/crete-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      const result = await createGoalCompletion({
        goalId,
      })
    }
  )
}
