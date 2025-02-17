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
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<test_pb.TestReq>;
    requestDeserialize: grpc.deserialize<test_pb.TestReq>;
    responseSerialize: grpc.serialize<test_pb.TestRes>;
    responseDeserialize: grpc.deserialize<test_pb.TestRes>;
}

export const TestService: ITestService;

export interface ITestServer extends grpc.UntypedServiceImplementation {
    sayTest: grpc.handleBidiStreamingCall<test_pb.TestReq, test_pb.TestRes>;
}

export interface ITestClient {
    sayTest(): grpc.ClientDuplexStream<test_pb.TestReq, test_pb.TestRes>;
    sayTest(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.TestReq, test_pb.TestRes>;
    sayTest(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.TestReq, test_pb.TestRes>;
}

export class TestClient extends grpc.Client implements ITestClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayTest(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.TestReq, test_pb.TestRes>;
    public sayTest(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.TestReq, test_pb.TestRes>;
}
