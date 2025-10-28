import { ZodError } from 'zod';

export const validate =
  (schema, source = 'body') =>
  (req, res, next) => {
    try {
      const parsed = schema.parse(req[source]);
      req[source] = parsed;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.issues.map((i) => ({
          path: i.path.join('.'),
          message: i.message,
        }));
        const e = new Error('Dados inválidos');
        e.status = 422;
        e.code = 'VALIDATION_ERROR';
        e.details = issues;
        return next(e);
      }
      return next(error);
    }
  };
