import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { ENV } from "./env.config";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Air Quality API",
      version: "1.0.0",
      description: "API documentation for the Air Quality API",
    },
    servers: [
      {
        url: `${ENV.API_BASE_URL }/api`, 
      },
    ],
  },
  apis: ["./src/**/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger docs available at /api-docs");
}
