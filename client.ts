import { TestClient } from "./gen/test_grpc_pb";




const client = new TestClient("localhost:3333",grpc.credentials.createInsecure());
