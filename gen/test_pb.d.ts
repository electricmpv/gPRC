// package: test
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TestReq extends jspb.Message { 
    getName(): string;
    setName(value: string): TestReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestReq.AsObject;
    static toObject(includeInstance: boolean, msg: TestReq): TestReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestReq;
    static deserializeBinaryFromReader(message: TestReq, reader: jspb.BinaryReader): TestReq;
}

export namespace TestReq {
    export type AsObject = {
        name: string,
    }
}

export class TestRes extends jspb.Message { 
    getName(): string;
    setName(value: string): TestRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestRes.AsObject;
    static toObject(includeInstance: boolean, msg: TestRes): TestRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestRes;
    static deserializeBinaryFromReader(message: TestRes, reader: jspb.BinaryReader): TestRes;
}

export namespace TestRes {
    export type AsObject = {
        name: string,
    }
}
