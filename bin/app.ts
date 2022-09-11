import * as cdk from "aws-cdk-lib";
import { ApiGatewayStack } from "../lib/apigateway-stack";
import { LambdaStack } from "../lib/lambda-stack";

const app = new cdk.App();
const { restApi } = new ApiGatewayStack(app, "ApiGatewayStack");
new LambdaStack(app, "LambdaStack", { restApi });
