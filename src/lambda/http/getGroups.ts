// import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as express from 'express';
import * as awsServerlessExpress from "aws-serverless-express";
import { getAllGroups } from "../../businessLogic/groups";

const app = express()

app.get('/groups',async (req, res) => {
  console.log('Request param', req)
  const groups = await getAllGroups()

  res.json({
    items: groups
  })
})

const server = awsServerlessExpress.createServer(app)
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context)
}
