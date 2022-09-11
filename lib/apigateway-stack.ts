import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class ApiGatewayStack extends cdk.Stack {
  public restApi: apigateway.IRestApi;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const restApi = new apigateway.RestApi(this, "ApiGateway");

    this.restApi = restApi;
  }
}
