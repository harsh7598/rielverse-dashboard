import customer from '../../public/Icons/Reilverse_Assets/personal-accident-cover-for-passengers 1.svg';
import satisfy from '../../public/Icons/Reilverse_Assets/success_great_approved_congrats 1.svg';
import award from '../../public/Icons/Reilverse_Assets/award 1.svg';
import waranty from '../../public/Icons/Reilverse_Assets/Guaran.svg';
import saving from '../../public/Icons/Reilverse_Assets/savings 1.svg';
import comparing from '../../public/Icons/Reilverse_Assets/comparison 1.svg';
import user from '../../public/Icons/Reilverse_Assets/pointer-right 1.svg';
import support from '../../public/Icons/Reilverse_Assets/support.svg';
import notice from '../../public/Icons/Reilverse_Assets/notice-assistance 1.svg';
import globe from '../../public/Icons/Reilverse_Assets/connected-globe 1.svg';
import avatar from '../../public/Icons/Reilverse_Assets/Ellipse 117.svg';
import car from '../../public/Icons/Reilverse_Assets/Car.svg';
import scooter from '../../public/Icons/Reilverse_Assets/scooter.svg';
import smallbiz from '../../public/Icons/Reilverse_Assets/Small.svg';
import watch from '../../public/Icons/Reilverse_Assets/Lux Watch.svg';
import jewellery from '../../public/Icons/Reilverse_Assets/Jewellery.svg';
import handbag from '../../public/Icons/Reilverse_Assets/Handbag.svg';
import pet from '../../public/Icons/Reilverse_Assets/Pet.svg';
import personal from '../../public/Icons/Reilverse_Assets/Personal Accident.svg';
import travel from '../../public/Icons/Reilverse_Assets/Travel.svg';
import health from '../../public/Icons/Reilverse_Assets/Health.svg';
import life from '../../public/Icons/Reilverse_Assets/Life.svg';
import architects from '../../public/Icons/Reilverse_Assets/Architect.svg';
import engineers from '../../public/Icons/Reilverse_Assets/Engineers.svg';
import tecnology from '../../public/Icons/Reilverse_Assets/Technology.svg';
import consulting from '../../public/Icons/Reilverse_Assets/Consulting.svg';
import retail from '../../public/Icons/Reilverse_Assets/Retail.svg';
import food from '../../public/Icons/Reilverse_Assets/Food.svg';
import professional from '../../public/Icons/Reilverse_Assets/Professional 1.svg';
import finance from '../../public/Icons/Reilverse_Assets/finance.svg';
import interior from '../../public/Icons/Reilverse_Assets/Interior.svg';
import construction from '../../public/Icons/Reilverse_Assets/Construction.svg';
import logistics from '../../public/Icons/Reilverse_Assets/logistic.svg';
import manufacturing from '../../public/Icons/Reilverse_Assets/Manufacturing.svg';
import welness from '../../public/Icons/Reilverse_Assets/Welness.svg';
import healthcare from '../../public/Icons/Reilverse_Assets/health-care.svg';
import education from '../../public/Icons/Reilverse_Assets/Education.svg';
import charity from '../../public/Icons/Reilverse_Assets/Charity.svg';
import RealState from '../../public/Icons/Reilverse_Assets/real-state.svg';
import entertainment from '../../public/Icons/Reilverse_Assets/entertainment.svg';
import Image, { StaticImageData } from 'next/image';

export const CATEGORIES = [
  {
    card_image: car,
    card_title: 'Car',
    card_href: '/car_brand',
    category: 'Tuk Tuk',
    category_href: '',
    heading: 'Car Insurance',
    description: 'Protect your car from unforeseen events on the road.',
  },
  {
    card_image: scooter,
    card_title: 'Motorcycle',
    card_href: '/motorcycle_insurance',
    category: 'Home',
    category_href: '',
    heading: 'Motorcycle Insurance',
    description: 'Be insured and ready to ride!',
  },
  {
    card_image: smallbiz,
    card_title: 'Personal Cyber',
    card_href: '/personal_cyber_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Cyber Security Insurance',
    description:
      "Each time you reveal your personal information online, you're exposed to cyber threats. Stay protected with cyber insurance.",
  },
  {
    card_image: watch,
    card_title: 'Luxury Watch',
    card_href: '/luxury_watch_insurance',
    category: 'Life',
    category_href: '',
    heading: 'Luxury Watch Insurance',
    description:
      'Protect your valuable watch collection with comprehensive insurance against damage and loss.',
  },
  {
    card_image: jewellery,
    card_title: 'Jewellery',
    card_href: '/jewellery_insurance',
    category: 'Life',
    category_href: '',
    heading: 'Jewellery Insurance',
    description:
      'Ensure your precious jewellery is safeguarded from theft or damage.',
  },
  {
    card_image: handbag,
    card_title: 'Handbag',
    card_href: '/handbag_insurance',
    category: 'Life',
    category_href: '',
    heading: 'Handbag Insurance',
    description:
      'Your handbag is a symbol of status. Get it insured against life’s uncertainties and carry with confidence.',
  },
  {
    card_image: smallbiz,
    card_title: 'Home',
    card_href: '/home_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Home Insurance',
    description:
      'Protect your home and belongings with our home insurance plans.',
  },
  {
    card_image: pet,
    card_title: 'Pet',
    card_href: '/pet_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Pet Insurance',
    description:
      'Safeguard your most loyal companions because they are family.',
  },
  {
    card_image: personal,
    card_title: 'Personal Accident',
    card_href: '/personal_accident_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Personal Accident Insurance',
    description:
      'Accidents can take a toll on your finances. Be prepared with our coverage.',
  },
  {
    card_image: travel,
    card_title: 'Travel',
    card_href: '/travel_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Travel Insurance',
    description: 'Don’t let unexpected events ruin a well-deserved vacation.',
  },
  {
    card_image: health,
    card_title: 'Health and Medical',
    card_href: '/health_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Health Insurance',
    description:
      'When illness strikes, we take your mind off hospital bills and fees, so you can focus on recovery.',
  },
  {
    card_image: life,
    card_title: 'Life',
    card_href: '/life_insurance',
    category: 'Travel',
    category_href: '',
    heading: 'Life Insurance',
    description: "Secure your family's future with our life insurance plans.",
  },
];

export const BUSINESS_CATEGORIES = [
  {
    card_image: engineers,
    card_title: 'Engineers',
    heading: 'Engineers insurance',
    card_href: '/engineer_insurance',
    category: 'Home',
    category_href: '',
    description:
      'Engineering work is deeply rewarding, but also fraught with certain risks. Liability risks are always on the minds of engineers, along with the ever-present risk of injuries.       ',
  },
  {
    card_image: architects,
    card_title: 'Architects and Surveyors',
    heading: 'Architects and Surveyors insurance',
    card_href: '/architect_and_surveyors_insurance',
    category: 'Tuk Tuk',
    category_href: '',
    description:
      'We offer tailored policies for architects, planners, and surveyors, whether you’re self-employed or you have your own firm.',
  },
  {
    card_image: tecnology,
    card_title: 'IT / Technology Services',
    heading: 'IT / Technology Services insurance',
    card_href: '/Technology_Services_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'A sprawling fast-paced industry like technology requires innovative products that are highly responsive.   Risk management is a critical tool in the technology industry, because the stakes are so high. ',
  },
  {
    card_image: consulting,
    card_title: 'Consulting',
    heading: 'Consulting insurance',
    card_href: '/Consulting_insurance',
    category: 'Life',
    category_href: '',
    description:
      'Comprehensive consultants insurance to protect you from lawsuits, and much more.Whether you provide management consulting, IT consulting, or any other kind of consulting, you’ll need  insurance to protect your business. For consultants, the most critical protection you need is Professional Indemnity Insurance, so that you’re protected from business lawsuits related to the advice you provide. ',
  },
  {
    card_image: retail,
    card_title: 'Retail',
    card_href: '/retail_insurance',
    heading: 'Retail insurance',
    category: 'Life',
    category_href: '',
    description:
      'Whether you run a physical shop or an online e-commerce store, you’ll need retail insurance to protect your business.',
  },
  {
    card_image: food,
    card_title: 'Food And Beverage',
    heading: 'Food And Beverage insurance',
    card_href: '/food_And_Beverage_insurance',
    category: 'Life',
    category_href: '',
    description:
      'As consumers become more health, social, and environmentally conscious, food and beverage companies around the world are evolving their business models to meet these needs.',
  },
  {
    card_image: professional,
    card_title: 'Professional Services',
    heading: 'Professional Services insurance',
    card_href: '/Professional_Services_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Commercial insurance  starts with property insurance, so that your premises and inventory are well-protected. You’ll also want to cover yourself against staff injuries, public liability, and employee theft. If you ship goods, consider protecting them with shipping insurance.',
  },
  {
    card_image: finance,
    card_title: 'Finance And Legal',
    heading: 'Finance And Legal insurance',
    card_href: '/Finance_And_Legal_insurance',
    category: 'Travel',
    category_href: '',
  },
  {
    card_image: interior,
    card_title: 'Interior Design & Renovation',
    heading: 'Interior Design & Renovation insurance',
    card_href: '/Interior_Design_And_Renovation_insurance',
    category: 'Travel',
    category_href: '',
  },
  {
    card_image: construction,
    card_title: 'Construction',
    heading: 'Construction insurance',
    card_href: '/Construction_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Construction is an essential industry for the global economy and activity in the sector is constant. There will always be a need for the renewal of existing and the creation of new infrastructure. But as the build cycle is often driven by socio-economic factors, it can be quite volatile. Construction companies need to have an acute awareness of current and emerging risk issues and be able to respond quickly to changing circumstances.',
  },
  {
    card_image: logistics,
    card_title: 'Logistics',
    heading: 'Logistics insurance',
    card_href: '/Logistics_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Whether you’re an international freight forwarder, or a home moving company, logistics companies need insurance to protect themselves.',
  },
  {
    card_image: manufacturing,
    card_title: 'Manufacturing and Storage',
    heading: 'Manufacturing and Storage insurance',
    card_href: '/Manufacturing_and_Storage_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'The manufacturing landscape has become increasingly globalized as a result of digitization and the adoption of a more customer-centric mindset.We know that the manufacturing industry faces a host of common and emerging risk exposures daily.',
  },
  {
    card_image: welness,
    card_title: 'Wellness And Fitness',
    heading: 'Wellness And Fitness insurance',
    card_href: '/Wellness_And_Fitness_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Whether you run a gym, yoga/pilates studio, martial arts centre, or a sports coaching business, it’s important to have insurance to protect yourself. If you have a physical premises, you’ll need to ensure your capital investment is protected against major risks like fire or vandalism. If you have wellness/fitness employees, they can be prone to injuries, so you’ll to cover them for their medical expenses.',
  },
  {
    card_image: healthcare,
    card_title: 'Health Care Services',
    heading: 'Health Care Services insurance',
    card_href: '/Health_Care_Services_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Healthcare organizations are challenged by risk on many fronts.',
  },
  {
    card_image: education,
    card_title: 'Education',
    heading: 'Education insurance',
    card_href: '/education_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Education nurtures our future generations of leaders, engineers, scientists and artists. As today’s educational institutions face increasingly complex and diverse challenges, educators insurance programs must adapt to support these institutions. From kindergarten to university, we help education institutions of all levels create customised educators insurance solutions to safeguard your balance sheets, attract and retain your talent, and protect your students.',
  },
  {
    card_image: charity,
    card_title: 'Charity',
    card_href: '/Charity_insurance',
    heading: 'Charity insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Management is a key element of governance.We offer tailored policies for non-profit organisations like charities, NGOs, and more.',
  },
  {
    card_image: RealState,
    card_title: 'Real Estate',
    heading: 'Real Estate insurance',
    card_href: '/RealState_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Property owners, operators, managers, and developers need to stay competitive in the dynamic world of real estate.',
  },
  {
    card_image: entertainment,
    card_title: 'Entertainment',
    heading: 'Entertainment insurance',
    card_href: '/entertainment_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'In an age of changing media consumption habits and options, We can structure  risk management strategies to help entertainment organizations and promotors balance taking bold chances with minimizing and mitigating risk',
  },
];

export const NAV_LINKS = [
  { title: 'About', to: '/about' },
  { title: 'Blogs', to: '/blog' },
];

export const PERSONAL_LINKS = [
  {
    linkName: 'Car',
    routeUrl: '/car',
    classList:
      'py-3 px-2 rounded-tl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
  },
  {
    linkName: 'Motorcycle',
    routeUrl: '/motorcycle-insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description: 'Be insured and ready to ride!',
  },
  {
    linkName: 'Personal Cyber',
    routeUrl: '/uat/personal_cyber_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description:
      'The Internet has become an integral part of daily life. Each time you reveal your personal information on the Internet, you are exposed to possible cybercrimes.',
  },
  {
    linkName: 'Luxury Watch',
    routeUrl: '/uat/luxury_watch_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description:
      'Your precious watch collection deserves comprehensive protection from vulnerabilities. Wear your luxury watch each & every moment with peace of mind, knowing it’s insured against damage & loss.',
  },
  {
    linkName: 'Jewellery',
    routeUrl: '/uat/jewellery_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
  },
  {
    linkName: 'Home',
    routeUrl: '/uat/home_insurance',
    classList:
      'py-3 px-2 rounded-bl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
  },
  {
    linkName: 'Handbag',
    routeUrl: '/uat/handbag_insurance',
    classList:
      'py-3 px-2 rounded-tr-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description:
      'In the world of style, your handbag speaks volumes as a symbol of status and sophistication. Entrust its legacy to our handbag insurance, ensuring your prized possessions are safeguarded against life’s uncertainties. Carry with confidence, knowing your essentials are protected.',
  },
  {
    linkName: 'Pet',
    routeUrl: '/uat/pet_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description: 'Safeguard your most loyal companions because they are family',
  },
  {
    linkName: 'Personal Accident',
    routeUrl: '/uat/personal_accident_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description: 'Accidents can take a toll on your finances.',
  },
  {
    linkName: 'Travel',
    routeUrl: '/uat/travel_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description: 'Don’t let unexpected events ruin a well deserved vacations.',
  },
  {
    linkName: 'Health and Medical',
    routeUrl: '/uat/health_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
    description:
      'When illness strikes, we can take your mind off hospital bills and outpatient fees so that you can concentrate on getting better.',
  },
  {
    linkName: 'Life',
    routeUrl: '/uat/life_insurance',
    classList:
      'py-3 px-2 rounded-br-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
  },
];

export const BUSINESS_LINKS = [
  {
    linkName: 'Architects and Surveyors',
    routeUrl: '/architect-and-surveyors-insurance',
    classList:
      'py-3 px-2 rounded-tl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'We offer tailored policies for architects, planners, and surveyors.',
  },
  {
    linkName: 'Engineers',
    routeUrl: '/uat/engineer_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Engineering work is deeply rewarding, but also fraught with certain risks. Liability risks are always on the minds of engineers, along with the ever-present risk of injuries.       ',
  },
  {
    linkName: 'IT/Technology Services',
    routeUrl: '/uat/Technology_Services_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'A sprawling fast-paced industry like technology requires innovative products that are highly responsive.   Risk management is a critical tool in the technology industry, because the stakes are so high. ',
  },
  {
    linkName: 'Consulting',
    routeUrl: '/uat/Consulting_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Comprehensive consultants insurance to protect you from lawsuits, and much more.Whether you provide management consulting, IT consulting, or any other kind of consulting, you’ll need  insurance to protect your business. For consultants, the most critical protection you need is Professional Indemnity Insurance, so that you’re protected from business lawsuits related to the advice you provide. ',
  },
  {
    linkName: 'Retail',
    routeUrl: '/uat/retail_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Whether you run a physical shop or an online e-commerce store, you’ll need retail insurance to protect your business. ',
  },
  {
    linkName: 'Professional Services',
    routeUrl: '/uat/Professional_Services_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Commercial insurance  starts with property insurance, so that your premises and inventory are well-protected. You’ll also want to cover yourself against staff injuries, public liability, and employee theft. If you ship goods, consider protecting them with shipping insurance.',
  },
  {
    linkName: 'Food and Beverage',
    routeUrl: '/uat/food_And_Beverage_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'As consumers become more health, social, and environmentally conscious, food and beverage companies around the world are evolving their business models to meet these needs.',
  },
  {
    linkName: 'Interior Design and Renovation',
    routeUrl: '/uat/Interior_Design_And_Renovation_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
  },
  {
    linkName: 'Construction',
    routeUrl: '/uat/Construction_insurance',
    description:
      'Construction is an essential industry for the global economy and activity in the sector is constant. There will always be a need for the renewal of existing and the creation of new infrastructure. But as the build cycle is often driven by socio-economic factors, it can be quite volatile. Construction companies need to have an acute awareness of current and emerging risk issues and be able to respond quickly to changing circumstances.',
    classList:
      'py-3 px-2 rounded-bl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
  },
  {
    linkName: 'Logistics',
    routeUrl: '/uat/Logistics_insurance',
    description:
      'Whether you’re an international freight forwarder, or a home moving company, logistics companies need insurance to protect themselves.',
    classList:
      'py-3 px-2 rounded-tr-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
  },
  {
    linkName: 'Manufacturing and Storage',
    routeUrl: '/uat/Manufacturing_and_Storage_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'The manufacturing landscape has become increasingly globalized as a result of digitization and the adoption of a more customer-centric mindset.We know that the manufacturing industry faces a host of common and emerging risk exposures daily.',
  },
  {
    linkName: 'Wellness and Fitness',
    routeUrl: '/uat/Wellness_And_Fitness_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Whether you run a gym, yoga/pilates studio, martial arts centre, or a sports coaching business, it’s important to have insurance to protect yourself. If you have a physical premises, you’ll need to ensure your capital investment is protected against major risks like fire or vandalism. If you have wellness/fitness employees, they can be prone to injuries, so you’ll to cover them for their medical expenses.',
  },
  {
    linkName: 'Healthcare Services',
    routeUrl: '/uat/Health_Care_Services_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Healthcare organizations are challenged by risk on many fronts.',
  },
  {
    linkName: 'Education',
    routeUrl: '/uat/education_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Education nurtures our future generations of leaders, engineers, scientists and artists. As today’s educational institutions face increasingly complex and diverse challenges, educators insurance programs must adapt to support these institutions. From kindergarten to university, we help education institutions of all levels create customised educators insurance solutions to safeguard your balance sheets, attract and retain your talent, and protect your students.',
  },
  {
    linkName: 'Charity',
    routeUrl: '/uat/Charity_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Management is a key element of governance.We offer tailored policies for non-profit organisations like charities, NGOs, and more.',
  },
  {
    linkName: 'Real Estate',
    routeUrl: '/uat/RealState_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'Property owners, operators, managers, and developers need to stay competitive in the dynamic world of real estate.',
  },
  {
    linkName: 'Entertainment',
    routeUrl: '/uat/entertainment_insurance',
    classList:
      'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
    description:
      'In an age of changing media consumption habits and options, We can structure  risk management strategies to help entertainment organizations and promotors balance taking bold chances with minimizing and mitigating risk',
  },
];

export const BENEFITS = [
  {
    image: customer,
    title: 'Customer Ist',
    description: 'Customer Ist Approach',
  },
  {
    image: satisfy,
    title: 'Satisfied',
    description: 'Policy Holders',
  },
  {
    image: award,
    title: 'Top',
    description: 'Insurance Partners',
  },
  {
    image: waranty,
    title: 'Guaranteed',
    description: 'Claims Assistance',
  },
];

export const CARDS = [
  {
    image: saving,
    title: 'Save Big on Your Policies',
    description:
      'We provide competitive rates with all other perks & benefits of online insurance',
  },
  {
    image: comparing,
    title: 'Comparing Quotes is Verse',
    description:
      'We provide you with simple yet effective tools & calculators to find the best plan',
  },
  {
    image: user,
    title: 'User Experience',
    description:
      'An awesome insurance experience which is User-friendly, Quick & Joyful',
  },
];

export const OFFERS = [
  {
    image: support,
    title: 'GUIDANCE',
    subtitle: 'Transparent Comparisons',
    description:
      'Rielverse have a team of unbiased insurance experts that is dedicated to helping you buy best insurance',
  },
  {
    image: notice,
    title: 'ASSISTANCE',
    subtitle: 'Application to Issuance',
    description:
      'From short-simple forms and a hassle free process to a Dedicated Operations Team for a smooth experience',
  },
  {
    image: globe,
    title: 'SUPPORT',
    subtitle: 'Dedicated Claim Desk',
    description:
      'We have a team of professionals that is dedicated to helping our users in the event of a claim.',
  },
];

export const REVIEWS = [
  {
    image: avatar,
    name: 'Justin Watt',
    position: 'Doctor',
    quote:
      'Here you will find a comparison between every health insurance cover proven to have provided world-class services to their customers.',
  },
  {
    image: avatar,
    name: 'Sarah Collins',
    position: 'Engineer',
    quote:
      'The team has been exceptional in guiding me through the process of finding the right plan. Great service!',
  },
  {
    image: avatar,
    name: 'Emily Jones',
    position: 'Teacher',
    quote:
      'I am so grateful for their support. They made buying insurance so simple and stress-free.',
  },
];

export const vehicleRisk = {
  makeAndModel: 'Toyota Camry',
  manufactureDate: '2020-01-01',
  chassisNo: 'ABC123XYZ',
  engineNo: 'ENG456789',
  registrationNo: 'REG7890',
  engineCapacity: 2000,
  prevInsuranceList: [{ prevPolicyNCB: 20 }],
};

export const coustomerDetails = {
  startDate: '2025-02-01',
  quoteNo: 'Q123456789',
  name: 'John Doe',
  address: '123 Main St, Springfield, USA',
  occupation: 'Software Engineer',
  scope: 'Full Coverage',
};
interface BlogPost {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
}
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Compulsory Motor Third-Party Insurance to be Introduced by 2025',
    description: `
      The insurance industry has grown steadily over the past decade, with a 25% growth rate. However, this has slowed to around 7% in recent years as the market matures. The year 2023 was particularly challenging for both banking and insurance sectors.
      
      In Cambodia, the National Social Security Fund (NSSF) ensures workers are protected during medical emergencies or the loss of a loved one. All companies are required to enroll their workers in this scheme, which now covers millions of people.
      
      For those seeking more extensive coverage, private insurance companies offer tailored solutions to meet individual and corporate needs. While the NSSF provides a safety net, additional life and health insurance can offer enhanced security for families.
      
      Cambodia’s insurance sector has been evolving since the 1990s, with key legislation introduced in 2000 and regulations for life insurance in 2012. As incomes rise and financial literacy improves, regulators plan to introduce compulsory automobile insurance to enhance driver safety and vehicle protection.
      `,
    fullDescription: `
      <h4>Compulsory motor third-party insurance to be introduced by 2025</h4>
      <p> The insurance industry grew at a pace of 25 percent over the last 10 years. In the last five years, as the insurance market has expanded and become more mature, the growth rate has been around 7 percent. 2023 was a tough year for both banking and insurance. </p>

      <p>NSSF is a government scheme that is focused on universal coverage in Cambodia. We want every Cambodian to feel safe that in case of the death of a loved one or a medical emergency that the state will take care of its workers. Hence we have made it compulsory for all companies operating in Cambodia to have the NSSF scheme for its workers, which today covers millions. </p>

      <p>Some Cambodians who might want more than this basic coverage offered by the government. They could have more dependents or more specialised needs for health insurance coverage say of a senior family member – so what insurance companies offer is more comprehensive and tailor-made coverage for individuals and companies. So it’s good to have your bases covered with the NSSF, but it might be wiser to also upgrade if one can buy specific life and health insurance cover for one’s family.</p>

      <p>Cambodia has been slowly re-developing its insurance sector since the 1990s legislating its Insurance Law in 2000 and developing regulations around Life Insurance in 2012. 
      Increasing incomes have seen Cambodians achieve lower-middle income country status, with improving living conditions and financial management, regulators are now looking to implement compulsory automobile insurance.</p>

      <p>The government’s plans to introduce compulsory insurance for private vehicles, the changing culture of driver safety, and car insurance protection</p>
     `,
    date: '2025-03-01',
  },
  {
    id: 2,
    title:
      'HEINEKEN Cambodia and Grab Train 200 Tuk Tuk Drivers on Road Safety',
    description: `
      In a collaborative effort to improve road safety, HEINEKEN Cambodia and Grab partnered with the National Road Safety Committee to train 200 Tuk Tuk drivers in Phnom Penh. The workshop covered traffic accident statistics, dangers of drunk driving, and safe driving practices.
      
      Ms. IV Thounleakhena, from the Road Traffic Safety Department, emphasized the importance of compliance with road regulations to prevent accidents. Grab’s initiative highlights their commitment to safety, ensuring drivers are well-trained and motivated.
      
      HEINEKEN Cambodia reinforced the message of responsible consumption with their campaign: "When You Drive, Never Drink." This initiative aligns with their mission to foster a culture of responsibility and contribute to a safer Cambodia.
      `,
    fullDescription: `
    <h5>HEINEKEN Cambodia and Grab train 200 Tuk Tuk drivers on road safety and responsible consumption</h5>

    <p>HEINEKEN Cambodia and Grab, together with the National Road Safety Committee, joined hands to train 200 Tuk Tuk drivers in Phnom Penh on safe driving behaviours. The aim was to improve road culture and responsibility for a better Cambodia.</p>

    <p>During the half-day training workshop, Tuk Tuk drivers received valuable insights about road traffic accidents in Cambodia, the dangers of driving under the influence of alcohol, and safe driving behaviours, aiming to enhance road safety awareness and responsible consumption practices among the Tuk Tuk drivers.</p>
    
    <p>The Chief of Education and Awareness office, Road Traffic Safety Department, Ms. IV Thounleakhena, endorsed the programme and shared about road safety behaviours, commenting in his opening remarks, “Compliance of road regulations and safe behaviours among drivers is crucial for improving road safety. Road accidents can be avoided and prevented with the right behaviours. We appreciate the work of HEINEKEN and Grab in improving the awareness of Tuk Tuk drivers. Together, we can create safer roads for all.”
    Grab, a leading ride-hailing platform in Cambodia, has brought 200 Tuk Tuk driver partners from its platform to attend the training workshop.</p>

    <p>This effort underscores Grab’s commitment to improving road safety and providing high-quality service to its customers. “By fostering a supportive and respectful community, we ensure that our Tuk Tuk drivers feel valued and motivated. This not only enhances their professional capabilities but also contributes to a safer and more pleasant experience for our customers”, said Grab Cambodia Country Manager Kang Sovannarot.
    </p>

    <p>In line with HEINEKEN Cambodia’s commitment to advocating responsible consumption, the workshop also reinforced the message of “When You Drive, Never Drink.”</p>

    <p>HEINEKEN Cambodia’s Corporate Affairs Director, Anne De Graaf, said: “At HEINEKEN Cambodia, we are committed to promoting responsible consumption as a core part of our mission. This training is designed to raise awareness about the importance of moderation and to encourage safe and responsible drinking habits. By fostering a culture of responsibility, we aim to ensure that our products are enjoyed in a way that enhances social experiences without compromising safety or health, which is linked to their commitment to “Brew a Better Cambodia.”</p>
     `,
    date: '2025-03-01',
  },
  {
    id: 3,
    title: 'Things You May Not Know About Your Car Insurance',
    description: `
  **What Is Private Motor Car Insurance?**
  Private Motor Car Insurance covers vehicles used for personal and business purposes, protecting owners against losses from accidents, theft, and damage. 
  
  **Understanding Excess**
  Excess is the amount policyholders must pay before receiving an insurance payout. For instance, with a $400 excess on a $1,200 claim, the insured pays $400, and the insurer covers the remaining $800.
  
  **Coverage Details**
  - **Accidental Loss or Damage:** Includes malicious damage, collisions, and overturning. Factory-fitted accessories and spare parts are also covered.
  - **Vehicle Repairs:** The insurer covers towing costs to the nearest authorized repair center, and repairs can start once an estimate is submitted.
  - **Replacement Parts:** Covered, but with limits.
  
  **Third-Party Liability**
  Insurance covers the insured, named drivers, and authorized drivers for:
  - Death or injury to third parties
  - Damage to third-party property
  
  **Key Documents to Keep**
  - **Proposal Form:** Essential for risk assessment.
  - **Certificate of Insurance:** Proof of coverage for law enforcement.
  - **Cover Note:** Interim proof of insurance.
  - **Policy Document:** Contains contract terms, conditions, and claim procedures.
      `,
    fullDescription: `
      <h3>What Is Private Motor Car Insurance?</h3>
      <p>This is a type of insurance designed to offer coverage for motor vehicles that are used for social or domestic purposes, and for the insured’s business.
      Private Motor Car Insurance is vital for car owners because it protects them against major losses resulting from road accidents, fire, theft, and other unlucky events.
      </p>
      <Image src='../../public//Images/gmc.jpg' alt="image" />
     `,
    date: '2025-03-01',
  },
  {
    id: 4,
    title:
      'Understanding Private Motor Car Insurance — Why It’s Essential for Every Car Owner',
    description:
      'Discover why private motor car insurance is a must-have, its benefits, and how to choose the best plan.',
    fullDescription: `

      `,
    date: '2025-03-01',
  },
  {
    id: 5,
    title:
      'Understanding Private Motor Car Insurance — Why It’s Essential for Every Car Owner',
    description:
      'Private Motor Car Insurance is designed to protect vehicles used for personal or business purposes against financial losses resulting from accidents, theft, fire, or unforeseen events. Think of it as a safety net that ensures you’re not burdened with huge repair bills or liabilities if things go wrong',
    fullDescription: `
       What Is Private Motor Car Insurance?
  
  Private Motor Car Insurance is designed to protect vehicles used for personal or business purposes against financial losses resulting from accidents, theft, fire, or unforeseen events. Think of it as a safety net that ensures you’re not burdened with huge repair bills or liabilities if things go wrong.
  
  Imagine the excitement of buying your first car — choosing the model, color, and features. But alongside that excitement comes responsibility. One crucial step is securing car insurance, which many people either overlook or rush through without understanding its true value.
  
  Many buyers opt for the dealership’s insurance plan, lured by discounts and convenience. But this may not always be the best choice long-term. Comprehensive coverage, claim processes, and hidden exclusions can make a huge difference when you actually need to file a claim. If your insurance renewal is approaching, consider shopping around for a better plan instead of renewing out of habit.
  
  The Importance of Reviewing Your Plan
  
  Car insurance is not just a legal requirement — it's a financial shield. But as your car ages or your driving habits change, your coverage might need an update. Maybe you’re driving less, or perhaps you’ve moved to an area with a higher accident rate. Either way, staying informed helps you make smarter decisions.
  
  Tip: Talk to your insurance provider or customer engagement team to understand your options. They can walk you through available plans, helping you find one that suits your needs.
  
  Understanding No-Claim Bonus (NCB)
  
  If you’ve been a cautious driver and haven’t made any claims during your policy period, you might be eligible for a No-Claim Bonus (NCB). This is a discount on your premium during renewal, which can accumulate over years and save you a significant amount of money. Always check your NCB status and ensure it’s factored into your renewal cost.
  
  Additional Coverage for Peace of Mind
  
  Besides the standard comprehensive coverage, some insurers offer extras like windshield replacement, key loss protection, and personal belongings cover. These add-ons may seem minor but can be incredibly useful, especially if you live in an area prone to theft or natural disasters.
      `,
    date: '2025-03-01',
  },
  {
    id: 6,
    title:
      'What Does Your Car Insurance Actually Cover? A Breakdown of Key Features and Exclusions',
    description:
      'Knowing what your policy covers can prevent unpleasant surprises during claims. Typically, comprehensive car insurance',
    fullDescription: `
       Understanding Coverage: What’s Included?
  
  Knowing what your policy covers can prevent unpleasant surprises during claims. Typically, comprehensive car insurance includes:
  
  Accidental Loss or Damage: Covers repairs or replacement costs for damage caused by accidents, vandalism, or natural disasters.
  
  Factory-Fitted Accessories & Spare Parts: Your insurance extends to standard accessories and spare parts, though limits might apply.
  
  Vehicle Towing & Repairs: If your car is undrivable, the insurer often covers towing costs to the nearest repair center (up to $500).
  
  Personal Accident Cover: Many policies offer coverage for injuries to the driver and passengers, including medical expenses and, in severe cases, compensation for disability or death.
  
  For example, if you’re in an accident and your car needs $5,000 in repairs, your insurance will cover the amount minus your policy excess.
  
  Exclusions to Watch Out For:
  
  Insurance doesn’t cover everything. Common exclusions include:
  
  Depreciation and wear & tear
  
  Mechanical or electrical failures
  
  Damage to tires (unless part of a larger accident)
  
  Driving under the influence of alcohol or drugs
  
  Unapproved modifications to the vehicle
  
  Understanding these exclusions helps set realistic expectations, so you’re not caught off guard.
  
  Liability to Third Parties:
  
  If your car accident injures someone or damages their property, your insurance covers:
  
  Medical expenses or compensation for injury or death
  
  Repair or replacement costs for damaged third-party property
  
  Even unnamed drivers (those not listed on your policy but authorized to drive your car) are covered, which is especially useful if you lend your car to friends or family.
  
  Add-On Covers for Extra Protection:
  
  You can enhance your policy with add-ons like:
  
  Zero Depreciation Cover: Ensures you get the full claim amount without deductions for depreciation.
  
  Engine Protection Cover: Covers damage to your engine due to waterlogging or oil leaks.
  
  Roadside Assistance: Provides on-the-spot help for breakdowns, flat tires, or fuel emergencies.
  
  Return to Invoice (RTI) Cover: In case of total loss, this add-on ensures you receive the full invoice amount of your car instead of just the insured declared value (IDV).
  
  These add-ons may slightly increase your premium but can save you from hefty expenses later.
      `,
    date: '2025-03-01',
  },
  {
    id: 7,
    title:
      'The Essential Car Insurance Documents You Should Always Have on Hand',
    description:
      'Car insurance paperwork isn’t just administrative clutter — it’s your lifeline during claims and legal situations. Keeping your documents organized ensures you’re ready for anything.',
    fullDescription: `
       Why Your Insurance Documents Matter
  
  Car insurance paperwork isn’t just administrative clutter — it’s your lifeline during claims and legal situations. Keeping your documents organized ensures you’re ready for anything.
  
  Key Documents to Keep:
  
  Proposal Form: Details your personal information, driving history, and vehicle details. Insurers use this to assess risk and determine premiums.
  
  Certificate of Insurance: Legally required proof of insurance. You’ll need to show this to the police or transport authorities when asked.
  
  Cover Note: A temporary document that provides coverage while your policy is being finalized.
  
  Policy Document: The official contract outlining coverage, exclusions, and claims procedures.
  
  Additional Documents:
  
  Endorsements: Record policy changes, like adding flood coverage or changing drivers.
  
  Renewal Notices: Reminders that your policy is about to expire, often with renewal options.
  
  Claim Forms: Essential for filing a claim — make sure you understand how to fill these out to avoid delays.
  
  Inspection Reports: Sometimes required for claims, especially for theft or total loss scenarios.
  
  Pro Tip: Store digital copies of all documents for easy access during emergencies. Apps like Google Drive or Dropbox can be lifesavers!
  
  How to Stay Organized:
  
  Create a dedicated folder (physical or digital) for all your insurance paperwork. Label each section clearly and review your documents annually to ensure everything is up to date.
  
  What to Do During a Claim:
  
  In case of an accident or damage, document everything — take photos, gather witness statements, and file a police report if necessary. Submit all this information along with your claim form to speed up the approval process.
  
  By staying organized and understanding your coverage, you’ll be well-prepared for any situation on the road.
      `,
    date: '2025-03-01',
  },
];
