export const formTypes = [
    'coverage-selection',
    'property-details',
    'business-and-contents',
    'equipment-breakdown',
    'theft-money-and-glass',
    'business-liability-coverage',
    'business-interruption-coverage',
    'portable-business-contents-coverage',
    "further-and-endorsements-questions",
    'premium-summary',
    'quote-summary',
] as const

export type InsuranceFormQueryTypes = typeof formTypes[number]

export type InsuranceFormRoutes = {
    back : string | undefined;
    next : string | undefined;
}