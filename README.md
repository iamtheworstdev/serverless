# serverless

A set of lambdas that will deploy and try to attach to "api.yourdomain.com" with basePath mapping to `/diagnostics` to help verify deployments.

1. `/diagnostics/region` reports back the region the lambda was run in. Useful for testing with the Terraform module that deploys multi-region API Gateways.
