// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var test_pb = require('./test_pb.js');

function serialize_test_TestReq(arg) {
  if (!(arg instanceof test_pb.TestReq)) {
    throw new Error('Expected argument of type test.TestReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_TestReq(buffer_arg) {
  return test_pb.TestReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_TestRes(arg) {
  if (!(arg instanceof test_pb.TestRes)) {
    throw new Error('Expected argument of type test.TestRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_TestRes(buffer_arg) {
  return test_pb.TestRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestService = exports.TestService = {
  sayTest: {
    path: '/test.Test/SayTest',
    requestStream: false,
    responseStream: false,
    requestType: test_pb.TestReq,
    responseType: test_pb.TestRes,
    requestSerialize: serialize_test_TestReq,
    requestDeserialize: deserialize_test_TestReq,
    responseSerialize: serialize_test_TestRes,
    responseDeserialize: deserialize_test_TestRes,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);
