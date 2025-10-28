// src/backend/config/swaggerConfig.js
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Thothia v2 API',
      version: '1.0.0',
      description:
        'API REST para catalogação ecológica — biomas, flora e fauna, sob o Protocolo Orion.',
      contact: {
        name: 'Thothia Project',
        url: 'https://github.com/thothia',
      },
    },
    servers: [
      { url: 'http://localhost:3333', description: 'Servidor local (Dev)' },
    ],
    components: {
      schemas: {},
      responses: {
        Success: {
          description: 'Resposta de sucesso padrão',
          content: {
            'application/json': {
              example: {
                success: true,
                message: 'Operação bem-sucedida',
                data: {},
              },
            },
          },
        },
        Error: {
          description: 'Resposta de erro padrão',
          content: {
            'application/json': {
              example: {
                success: false,
                code: 'VALIDATION_ERROR',
                error: 'Campo obrigatório ausente',
                correlationId: 'abc123',
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/backend/routes/*.js'],
};

export const swaggerSpec = swaggerJsdoc(options);
