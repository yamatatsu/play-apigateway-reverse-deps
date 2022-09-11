import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

type Props = cdk.StackProps & {
  restApi: apigateway.IRestApi;
};
export class LambdaStack extends cdk.Stack {
  public restApi: apigateway.IRestApi;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const { restApi } = props;

    const handler = new lambda.Function(this, "Handler", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        export.handler = () => ({
          statusCode: 200,
          body: '{"message":"Helloooowwwriiiiii!!!!"}'
        })
      `),
    });

    restApi.root.addMethod("GET", new apigateway.LambdaIntegration(handler));
  }
}
