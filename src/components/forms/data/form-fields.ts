import { generateSixYears, parseCurrency } from "@/lib/utils";
import { z } from "zod";

export const LOCATION_TYPE = [
  "Modern Office Block",
  "Normal Property",
  "Secured Shopping Centre",
] as const;

export const TYPE_OF_BUSINESS = [
  "Business Operations Only",
  "Property Owner Only",
  "Property Owner And Business Operations",
] as const;

export const COVERAGES = [
  "Business Liability",
  "Business Interruption",
  "Portable Business Content",
  "Business Building and Contents",
  "Equipment Breakdown",
  "Theft, Money and Glass",
] as const;



export const FLOOR_CONSTRUCTION = [
  "Concrete",
  "Mixed",
  "Stone",
  "Tile",
  "Wood",
] as const

export const ROOF_CONSTRUCTION = [
  "Asbestos",
  "Clay Tile",
  "Concrete Slab",
  "Fibro",
  "Glass",
  "Membrane Roofing",
  "Metal (Aluminum, Colourbond, Iron)",
  "Others",
  "Sandwich Panel / EPS",
  "Slate Tile",
  "Terracotta",
  "Timber",
] as const

export const WALL_CONSTRUCTION = [
  'Asbestos',
  'Brick',
  'Brick Veneer',
  'Concrete',
  'Curtain Wall',
  'Fibro',
  'Masonry',
  'Metal',
  'Other Sheet Panel Cladding',
  'Others',
  'Stone',
  'Timber',
] as const

export const CLAIM_TYPES = [
  "Fire",
  "Impact",
  "Earthquake or Tsunami",
  "Explosion",
  "Machinery Breakdown & Electronic Equipment",
  "Loss of access",
  "Power Surge",
  "Cyclone",
  "Escape of Liquid",
  "Theft or burglary",
  "Portable Business Cover",
  "Bushfire",
  "Accidental loss or damage",
  "Civil Commotion or Riot",
  "Lightnight or thunderbolt",
  "Vandalism or Malicious Act",
  "Glass Breakage",
  "Storm",
] as const

export const FLOOR = [
  "Ground Floor",
  "1st Floor",
  "2nd Floor or Above",
] as const

export const EXCESS = [
  "250",
  "500",
  "750",
  "1000",
  "1250",
  "1500",
  "1750",
  "2000",
  "2500",
  "5000",
  "10000",
] as const;

export const COVER = [
  "10000",
  "20000"
] as const

export const TAXAUDIT = [
  "0",
  "10000",
  "20000",
  "30000",
  "40000",
  "50000",
] as const

export const LIABILITY = [
  "5000000",
  "10000000",
  "20000000",
] as const

export const THEFT_SECURITY = [
  "Local Alarm",
  "Monitored Alarm",
  "No Alarm",
  "No Security",
] as const

export const THEFT_SECURITY_EXTRA = [
  "Deadlocks on all External Doors",
  "Key Operated Locks on all External Windows",
  "Bars/Security Screens on all External Windows?",
] as const

export const COVERAGESROUTES = {
  "Business Building and Contents": "business-and-contents",
  "Equipment Breakdown": "equipment-breakdown",
  "Theft, Money and Glass": "theft-money-and-glass",
  "Business Liability": "business-liability-coverage",
  "Business Interruption": "business-interruption-coverage",
  "Portable Business Content": "portable-business-contents-coverage",
}


export const THEFT_MONEY_AND_GLASS = [
  "Theft",
  "Money",
  "Glass",
] as const;


export const TYPE_OF_GLASS = [
  "Internal only",
  'External only',
  "Internal and External",
] as const

export const TYPE_OF_PLATE = [
  "Plate",
  "Non-Plate",
] as const

export const FIVE_YEAR_LIABILITY = [
  "Liability - Advertising Liability",
  "Liability - Personal Injury",
  "Liability - Property Damage",
] as const

export const INDEMNITY_PERIOD = [
  "3 Months",
  "6 Months",
  "9 Months",
  "12 Months",
  "18 Months",
  "24 Months",
  "36 Months",
] as const

export const CATEGORY_OPTIONS = [
  "Amplifiers, speakers and sound equipment",
  "Cleaning equipment",
  "Compressors and machinery",
  "Laptops, notepads and tablet",
  "Mobile phones",
  "Office equipment",
  "Photography and video equipment",
  "Radio equipment",
  "Surveying equipment",
  "Tools",
] as const


export const CLAIMS_DEFAULT = [
  {
    YearOfLoss: "",
    ClaimType: "" as typeof CLAIM_TYPES[number],
    Value: "",
  }
];

export const CLAIMS_DEFAULT_LI = [
  {
    YearOfLoss: "",
    ClaimType: "" as typeof FIVE_YEAR_LIABILITY[number],
    Value: "",
  }
];

// Zod Schemas


export const SUMEXCESS = z.enum(EXCESS, {
  message: "Excess is required",
});

export const SUMLIABILITY = z.enum(LIABILITY, {
  message: "Limit of Liability is required",
})

export const TAXAUDITCOVER = z.enum(TAXAUDIT, {
  message: "Tax Audit Sum Insured is required",
})

export const YEARLOSS = z.enum(generateSixYears() as [string, ...string[]], {
  message: "Year Of Loss is required",
})


export const CLAIMTYPES = z.enum(CLAIM_TYPES, {
  message: "Claim Type is required",
})
export const CLAIMTYPESLI = z.enum(FIVE_YEAR_LIABILITY, {
  message: "Claim Type is required",
})

export const AMOUNT = (value: string, optional?: boolean) => {

  if (optional) {
    return z.string({
      message: `${value} is required`,
    }).optional().transform((data, ctx) => {

      const parsed = parseCurrency(data || "");

      if (Number(parsed) >= Number(100000000000)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${value} cannot be greater than 100,000,000,000`,
        })
      }

      return parsed;
    })
  }

  return z.string({
    message: `${value} is required`,
  }).nonempty({
    message: `${value} is required`,
  }).transform((data, ctx) => {

    const parsed = parseCurrency(data);

    if (parsed === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${value} is required`,
      })
    }

    if (Number(parsed) >= Number(100000000000)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${value} cannot be greater than 100,000,000,000`,
      })
    }


    return parsed;
  })

}


export const CLAIMS_IN_LAST_FIVE_YEARS = z.object({
  YearOfLoss: YEARLOSS,
  ClaimType: CLAIMTYPES,
  Value: AMOUNT("Value"),
})

export const CLAIMS_IN_LAST_FIVE_YEARS_LI = z.object({
  YearOfLoss: YEARLOSS,
  ClaimType: CLAIMTYPESLI,
  Value: AMOUNT("Value"),
})


export const CLAIMS_BOOLEAN = z.enum(["yes", "no"], {
  message: "Claim In Last Five Year is required",
})