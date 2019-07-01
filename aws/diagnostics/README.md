## diagnostics to make sure things are working

`.env` file is currently unused

Right now it's just an API to return back which region is being hit to make sure the multiple regions (east/west) are working.

serverless/serverless-domain-manager does not support multi-region deployments so you have to deploy this twice, changing the regions between `us-east-1` and `us-west-2`.
