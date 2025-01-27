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
import entertainment from '../../public/Icons/Reilverse_Assets/entertainment.svg'

export const CATEGORIES = [
  {
    card_image: car,
    card_title: 'Car ',
    card_href: '/car_brand',
    category: 'Tuk Tuk',
    category_href: '',
  },
  {
    card_image: scooter,
    card_title: 'Motocycle ',
    card_href: '/motorcycle_insurance',
    category: 'Home',
    category_href: '',
    description: 'Be insured and ready to ride!',
  },
  {
    card_image: smallbiz,
    card_title: 'Personal Cyber',
    card_href: '/personal_cyber_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'The Internet has become an integral part of daily life. Each time you reveal your personal information on the Internet, you are exposed to possible cybercrimes.',
  },
  {
    card_image: watch,
    card_title: 'Luxury Watch',
    card_href: '/luxury_watch_insurance',
    category: 'Life',
    category_href: '',
    description:
      'Your precious watch collection deserves comprehensive protection from vulnerabilities. Wear your luxury watch each & every moment with peace of mind, knowing it’s insured against damage & loss.',
  },
  {
    card_image: jewellery,
    card_title: 'Jewellery ',
    card_href: '/jewellery_insurance',
    category: 'Life',
    category_href: '',
  },
  {
    card_image: handbag,
    card_title: 'Handbag ',
    card_href: '/handbag_insurance',
    category: 'Life',
    category_href: '',
    description:
      'In the world of style, your handbag speaks volumes as a symbol of status and sophistication. Entrust its legacy to our handbag insurance, ensuring your prized possessions are safeguarded against life’s uncertainties. Carry with confidence, knowing your essentials are protected.',
  },
  {
    card_image: smallbiz,
    card_title: 'Home ',
    card_href: '/home_insurance',
    category: 'Travel',
    category_href: '',
  },
  {
    card_image: pet,
    card_title: 'Pet',
    card_href: '/pet_insurance',
    category: 'Travel',
    category_href: '',
    description: 'Safeguard your most loyal companions because they are family',
  },
  {
    card_image: personal,
    card_title: 'Personal Accident',
    card_href: '/personal_accident_insurance',
    category: 'Travel',
    category_href: '',
    description: 'Accidents can take a toll on your finances.',
  },
  {
    card_image: travel,
    card_title: 'Travel ',
    card_href: '/travel_insurance',
    category: 'Travel',
    heading: 'Travel Insurance',
    category_href: '',
    description: 'Don’t let unexpected events ruin a well deserved vacations.',
  },
  // {
  //   card_image: health,
  //   card_title: 'Health and Medical ',
  //   card_href: '/health_insurance',
  //   category: 'Travel',
  //   category_href: '/insurance',
  //   description:
  //     'When illness strikes, we can take your mind off hospital bills and outpatient fees so that you can concentrate on getting better.',
  // },
  // {
  //   card_image: life,
  //   card_title: 'Life ',
  //   card_href: '/life_insurance',
  //   category: 'Travel',
  //   category_href: '',
  // },
];

export const BUSINESS_CATEGORIES = [
  {
    card_image: architects,
    card_title: 'Architects and Surveyors',
    card_href: '/architect_and_surveyors_insurance',
    category: 'Tuk Tuk',
    category_href: '',
    description:
      'We offer tailored policies for architects, planners, and surveyors, whether you’re self-employed or you have your own firm.',
  },
  {
    card_image: engineers,
    card_title: 'Engineers',
    card_href: '/engineer_insurance',
    category: 'Home',
    category_href: '',
    description:
      'Engineering work is deeply rewarding, but also fraught with certain risks. Liability risks are always on the minds of engineers, along with the ever-present risk of injuries.       ',
  },
  {
    card_image: tecnology,
    card_title: 'IT / Technology Services',
    card_href: '/Technology_Services_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'A sprawling fast-paced industry like technology requires innovative products that are highly responsive.   Risk management is a critical tool in the technology industry, because the stakes are so high. ',
  },
  {
    card_image: consulting,
    card_title: 'Consulting',
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
    category: 'Life',
    category_href: '',
    description:
      'Whether you run a physical shop or an online e-commerce store, you’ll need retail insurance to protect your business.',
  },
  {
    card_image: food,
    card_title: 'Food And Beverage',
    card_href: '/food_And_Beverage_insurance',
    category: 'Life',
    category_href: '',
    description:
      'As consumers become more health, social, and environmentally conscious, food and beverage companies around the world are evolving their business models to meet these needs.',
  },
  {
    card_image: professional,
    card_title: 'Professional Services',
    card_href: '/Professional_Services_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Commercial insurance  starts with property insurance, so that your premises and inventory are well-protected. You’ll also want to cover yourself against staff injuries, public liability, and employee theft. If you ship goods, consider protecting them with shipping insurance.',
  },
  {
    card_image: finance,
    card_title: 'Finance And Legal',
    card_href: '/Finance_And_Legal_insurance',
    category: 'Travel',
    category_href: '',
  },
  {
    card_image: interior,
    card_title: 'Interior Design And Renovation',
    card_href: '/Interior_Design_And_Renovation_insurance',
    category: 'Travel',
    category_href: '',
  },
  {
    card_image: construction,
    card_title: 'Construction',
    card_href: '/Construction_insurance',
    category: 'Travel',
    category_href: '',
    description:
      'Construction is an essential industry for the global economy and activity in the sector is constant. There will always be a need for the renewal of existing and the creation of new infrastructure. But as the build cycle is often driven by socio-economic factors, it can be quite volatile. Construction companies need to have an acute awareness of current and emerging risk issues and be able to respond quickly to changing circumstances.',
  },
  // {
  //   card_image: logistics,
  //   card_title: 'Logistics',
  //   card_href: '/Logistics_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'Whether you’re an international freight forwarder, or a home moving company, logistics companies need insurance to protect themselves.',
  // },
  // {
  //   card_image: manufacturing,
  //   card_title: 'Manufacturing and Storage',
  //   card_href: '/Manufacturing_and_Storage_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'The manufacturing landscape has become increasingly globalized as a result of digitization and the adoption of a more customer-centric mindset.We know that the manufacturing industry faces a host of common and emerging risk exposures daily.',
  // },
  // {
  //   card_image: welness,
  //   card_title: 'Wellness And Fitness',
  //   card_href: '/Wellness_And_Fitness_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'Whether you run a gym, yoga/pilates studio, martial arts centre, or a sports coaching business, it’s important to have insurance to protect yourself. If you have a physical premises, you’ll need to ensure your capital investment is protected against major risks like fire or vandalism. If you have wellness/fitness employees, they can be prone to injuries, so you’ll to cover them for their medical expenses.',
  // },
  // {
  //   card_image: healthcare,
  //   card_title: 'Health Care Services',
  //   card_href: '/Health_Care_Services_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'Healthcare organizations are challenged by risk on many fronts.',
  // },
  // {
  //   card_image: education,
  //   card_title: 'Education',
  //   card_href: '/education_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'Education nurtures our future generations of leaders, engineers, scientists and artists. As today’s educational institutions face increasingly complex and diverse challenges, educators insurance programs must adapt to support these institutions. From kindergarten to university, we help education institutions of all levels create customised educators insurance solutions to safeguard your balance sheets, attract and retain your talent, and protect your students.',
  // },
  // {
  //   card_image: charity,
  //   card_title: 'Charity',
  //   card_href: '/Charity_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'Management is a key element of governance.We offer tailored policies for non-profit organisations like charities, NGOs, and more.',
  // },
  // {
  //   card_image: RealState,
  //   card_title: 'Real Estate',
  //   card_href: '/RealState_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'Property owners, operators, managers, and developers need to stay competitive in the dynamic world of real estate.',
  // },
  // {
  //   card_image: entertainment,
  //   card_title: 'Entertainment',
  //   card_href: '/entertainment_insurance',
  //   category: 'Travel',
  //   category_href: '',
  //   description:
  //     'In an age of changing media consumption habits and options, We can structure  risk management strategies to help entertainment organizations and promotors balance taking bold chances with minimizing and mitigating risk',
  // },
];

export const NAV_LINKS = [
  { title: 'About', to: '/about' },
  { title: 'Blogs', to: '/contact' },
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
