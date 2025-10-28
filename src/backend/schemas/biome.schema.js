import { z } from 'zod';

export const biomeCreateSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  description: z.string().optional(),
  region: z.string().min(2, 'Região inválida').optional(),
});

export const biomeUpdateSchema = z
  .object({
    name: z.string().min(2).optional(),
    description: z.string().optional(),
    region: z.string().min(2).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'Forneça ao menos um campo para atualizar',
  });

export const biomeIdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID deve ser numérico'),
});
