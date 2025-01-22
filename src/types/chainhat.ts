export type ChainHatTokenTypes = {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
    "not-before-policy": number;
    scope: string;
    user_journey_type: string;
}

export type ChainHatAddressTypes = {
    GNAF_PID : string;
    Address : string;
}

export interface AddressDetailsTypes {
    providerResponse: ProviderResponse;
}

export interface ProviderResponse {
    GNAF_Address: string;
}

export interface GetProfileDetailsTypes {
    providerResponse : {
        "soap:Envelope" : {
            "soap:Body" : {
                RiskPlusResponseType ?: {
                    Name: string;
                    AnzSic : {
                        IndustryDescription : string;
                    }
                    Finance : {
                        Revenue : string;
                    }
                    Operations : {
                        NumberOfEmployees : string;
                    }
                    Age :{
                        YearStarted : string;
                    }
                    Address : {
                        AddressLine1 : string;
                    }
                }
            }
        }
    }
}