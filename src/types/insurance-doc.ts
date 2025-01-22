export interface InsuremoTokenTypes {
    access_token: string;
    expire_in: number;
    message: string;
    retry_times: number;
    authResult: boolean;
    auth_result: boolean;
    trace_id: string;
}

export interface InsuremoDocTypes {
    attachmentHash: string;
    docCategory: string;
    docDescription: string;
    docKey: string;
    docName: string;
    docSize: string;
    docType: string;
    docURL: string;
    docUploadTimestamp: Date;
    id: string;
    parentEntityId: string;
    parentEntityType: string;
    signatureRequired: boolean;
    signatureStatus: string;
    version: number;
    versions: Version[];
}

export interface Version {
    attachmentHash: string;
    docKey: string;
    docSize: string;
    docURL: string;
    docUploadTimestamp: Date;
    signatureRequired: boolean;
    signatureStatus: string;
    version: number;
}
