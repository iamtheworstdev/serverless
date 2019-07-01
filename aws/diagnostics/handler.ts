import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const region: APIGatewayProxyHandler = async (_, __) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: JSON.stringify({ region: process.env.AWS_REGION })
      },
      null,
      2
    )
  };
};
