import { TestRes } from "./gen/test_pb";
import * as grpc from "@grpc/grpc-js";
import { TestService } from "./gen/test_grpc_pb";

const server = new grpc.Server();

server.addService(TestService, {
  sayTest: (call:any, callback:any) => {
    console.log(call.request.getName());
    const res = new TestRes();
    res.setName("Test " + call.request.getName());
    callback(null, res);
  },
});

server.bindAsync("localhost:3333", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log("RPC服务启动");
})