import { TestRes } from "./gen/test_pb";
import * as grpc from "@grpc/grpc-js";
import { TestService } from "./gen/test_grpc_pb";

const server = new grpc.Server();

server.addService(TestService, {
  sayTest: (call:any, callback:any) => {
    call.on("data", (data:any) => {
      console.log("data", data);
      const res = new TestRes();
      res.setName("Test ");
      call.write(res);
    });
  
  },
});

server.bindAsync("localhost:3333", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log("RPC服务启动");
})