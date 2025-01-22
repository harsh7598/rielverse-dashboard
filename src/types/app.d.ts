declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_SECRET_KEY: string;

        // Australia East Chainthat
        NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT: string;
        NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_CLIENT_ID: string;
        NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_CLIENT_SECRET: string;
        NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_ID: string;
        NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_CODE: string;

        // Insuremo Configurations

        NEXT_PUBLIC_INSUREMO_API: string;
        NEXT_PUBLIC_INSUREMO_SERVER: string;
        NEXT_PUBLIC_INSUREMO_USERNAME: string;
        NEXT_PUBLIC_INSUREMO_PASSWORD: string;
        NEXT_PUBLIC_INSUREMO_CLIENT_ID: string;
        NEXT_PUBLIC_INSUREMO_TENANT_ID: string;
        NEXT_PUBLIC_INSUREMO_TENANT_CODE: string;
        NEXT_PUBLIC_INSUREMO_SOURCE_ID: string;

        // Stripe Configurations

        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    }
}