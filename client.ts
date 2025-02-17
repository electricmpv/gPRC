import { TestClient } from "./gen/test_grpc_pb";
import * as grpc from "@grpc/grpc-js";
import { TestReq } from "./gen/test_pb";

const client = new TestClient("localhost:3333", grpc.credentials.createInsecure());
const testReq = new TestReq();
testReq.setName("client");
const call = client.sayTest();
call.on("data", (data) => {
  console.log("data", data);
  call.write(testReq);
});
call.write(testReq);