// package: test
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as test_pb from "./test_pb";

interface ITestService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayTest: ITestService_ISayTest;
}

interface ITestService_ISayTest extends grpc.MethodDefinition<test_pb.TestReq, test_pb.TestRes> {
    path: "/test.Test/SayTest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<test_pb.TestReq>;
    requestDeserialize: grpc.deserialize<test_pb.TestReq>;
    responseSerialize: grpc.serialize<test_pb.TestRes>;
    responseDeserialize: grpc.deserialize<test_pb.TestRes>;
}

export const TestService: ITestService;

export interface ITestServer extends grpc.UntypedServiceImplementation {
    sayTest: grpc.handleUnaryCall<test_pb.TestReq, test_pb.TestRes>;
}

export interface ITestClient {
    sayTest(request: test_pb.TestReq, callback: (error: grpc.ServiceError | null, response: test_pb.TestRes) => void): grpc.ClientUnaryCall;
    sayTest(request: test_pb.TestReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.TestRes) => void): grpc.ClientUnaryCall;
    sayTest(request: test_pb.TestReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.TestRes) => void): grpc.ClientUnaryCall;
}

export class TestClient extends grpc.Client implements ITestClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayTest(request: test_pb.TestReq, callback: (error: grpc.ServiceError | null, response: test_pb.TestRes) => void): grpc.ClientUnaryCall;
    public sayTest(request: test_pb.TestReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.TestRes) => void): grpc.ClientUnaryCall;
    public sayTest(request: test_pb.TestReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.TestRes) => void): grpc.ClientUnaryCall;
}
