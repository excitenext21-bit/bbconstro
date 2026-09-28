import { ServiceItem, AMCPlan, CaseStudy, Testimonial, ClientLogo, StatutoryInfo } from '../types';

export const STATUTORY_DATA: StatutoryInfo = {
  companyName: 'B&B Constro Private Limited',
  director: 'Mr. Pravin Bakshi',
  natureOfBusiness: 'HVAC Sales, Engineering, Service & Maintenance',
  registeredAddress: 'Flat No. 203, Wing A, Venkateshpuram, NIBM Lane No. 11, Kondhwa, Pune - 411048',
  officeAddress: 'Gala no 2, Behind Ramdev Baba Garage, VIIT Sq, Upper Indira Nagar, Kondhwa Budruk, Pune - 411037',
  teamSize: '75+ Full-Time Employees',
  pan: 'AIRPB8206C',
  gstin: '27AIRPB8206C1ZG',
  empCode: '33000466930000602',
  pfEstId: 'PUPUN1095811',
  phone: '+91 772000 7392',
  email: 'services@bnbconstro.com',
  website: 'www.bnbconstro.com',
  bankDetails: {
    bankName: 'ICICI Bank Ltd',
    accountNo: '007305011707',
    ifsc: 'ICIC0000073',
    branch: 'Aundh Branch, Pune'
  }
};

export const PUNE_AREAS = [
  'Kondhwa & NIBM Road',
  'Magarpatta City & Hadapsar',
  'Hinjewadi IT Park Phase 1-3',
  'Kharadi & EON Free Zone',
  'Baner & Balewadi High Street',
  'Kothrud & Karve Nagar',
  'Viman Nagar & Kalyani Nagar',
  'Shivajinagar & FC Road',
  'Senapati Bapat Road & Aundh',
  'Pirangut & Hinjewadi Annex',
  'Bhosari MIDC & PCMC',
  'Chakan Auto & Industrial Hub',
  'Wakad & Pimple Saudagar',
  'Camp & MG Road',
  'Swargate & Bibvewadi'
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'design-consultancy',
    number: '01',
    category: 'Engineering & Planning',
    title: 'HVAC Design & Engineering Consultancy',
    shortDesc: 'A detailed study of thermal loads, recommending optimal architectures while keeping a vigilant watch on capital cost and operational energy.',
    fullDesc: 'We structure complete thermodynamic and airflow designs for commercial complexes, corporate headquarters, high-end bungalows, and industrial facilities across Pune. Our scope spans heat-load modeling, technology selection (VRV/VRF vs Air/Water-Cooled Chillers), duct sizing, and building management integration.',
    image: '/assets/services-banner.jpg',
    features: [
      'Comprehensive heat load calculation & resource availability analysis',
      'Specialized ventilation: Staircase pressurisation & Lift lobby pressurisation',
      'Basement parking ventilation & toxic gas exhaust (CO sensors integration)',
      'Fresh air & toilet exhaust systems conforming to ASHRAE / ISHRAE standards',
      'Air-cooled & water-cooled central chiller system blueprints'
    ],
    specs: [
      { label: 'Engineering Code', value: 'ASHRAE / NBC 2016 / ISHRAE' },
      { label: 'Load Precision', value: '±2% Thermal Modeling' },
      { label: 'System Variety', value: 'VRF, Chillers, Ductables' }
    ],
    suitability: ['Corporate IT Parks', 'Hospitals & Cleanrooms', 'Hotels & Banquet Halls', 'Luxury Villas']
  },
  {
    id: 'turnkey-execution',
    number: '02',
    category: 'Procurement & Contracting',
    title: 'Turnkey Project Execution & Retrofitting',
    shortDesc: 'Disciplined project execution adhering strictly to safety, timelines, quality, and industry standards with rigorous review milestones.',
    fullDesc: 'Our execution capabilities reflect rigorous built deliverables, continuous monitoring, and structured reviews. We implement comprehensive processes: Time, Cost, Quality, Change, Risk, Procurement, and Acceptance Management. Additionally, our specialized retrofitting capability upgrades legacy systems with zero operational disruption.',
    image: '/assets/vrv-vrf-central-systems.jpg',
    features: [
      'Strict execution frameworks: Time, Cost, Risk & Quality management',
      'Braze-free Lokring piping technique for swift, zero-hazard pipeline installs',
      'Seamless retrofitting for heritage buildings, active hotels & live offices',
      'Heavy plant rigging, AHU mounting, and vibration isolation pads',
      'Rigorous air balancing, static pressure checks & commissioning verification'
    ],
    specs: [
      { label: 'Team Capacity', value: '75+ Certified Engineers' },
      { label: 'Projects Completed', value: '250+ Across India' },
      { label: 'Safety Compliance', value: 'Zero Incident Protocols' }
    ],
    suitability: ['Hospitals & Healthcare', 'Resorts & Restaurants', 'Industrial Plants', 'Colleges & Institutes']
  },
  {
    id: 'emergency-repairs',
    number: '03',
    category: 'Rapid Breakdown Response',
    title: '24/7 Emergency HVAC Breakdown & Repair',
    shortDesc: 'Immediate technician dispatch across Pune with guaranteed 60-90 min response time for chiller halts, gas leaks, and critical cooling failures.',
    fullDesc: 'A sudden HVAC breakdown in a Pune hospital, server room, commercial kitchen, or retail store creates immediate financial and operational jeopardy. Our dedicated emergency task force is on standby 24 hours a day, 365 days a year, stocked with genuine compressors, relays, refrigerant cylinders, and diagnostic tools.',
    image: '/assets/central-chiller-plant-systems.jpg',
    features: [
      'Rapid 60-90 minute on-site dispatch across Pune & PCMC industrial belts',
      'Critical compressor diagnostics, rewinding, and immediate replacement',
      'Fast electronic leak detection & nitrogen pressure testing',
      'Genuine eco-friendly refrigerant top-up (R410A, R32, R134a, R407C)',
      'Electrical control panel troubleshooting, VFD faults & sensor calibrations'
    ],
    specs: [
      { label: 'Response Time', value: '60 - 90 Minutes (Pune)' },
      { label: 'Availability', value: '24/7 / 365 Days' },
      { label: 'Direct Hotline', value: '+91 772000 7392' }
    ],
    suitability: ['Data Centers & Server Rooms', 'ICU & Operation Theatres', 'Commercial Kitchens', 'Pharma Storage']
  },
  {
    id: 'amc-maintenance',
    number: '04',
    category: 'Preventive Care & Longevity',
    title: 'Comprehensive Annual Maintenance Contracts (AMC)',
    shortDesc: 'Preventive and breakdown service contracts that enhance system efficiency, lower energy consumption by up to 20%, and eliminate sudden downtime.',
    fullDesc: 'Regular maintenance through AMCs for HVAC systems helps maintain peak thermodynamic efficiency, protects costly capital equipment, and improves indoor air quality. We offer three flexible tiers tailored to enterprise and residential client needs: Comprehensive, Semi-Comprehensive, and Preventive Labour contracts.',
    image: '/assets/amc-banner.jpg',
    features: [
      'Scheduled preventive visits: 3 mandatory visits per year (2 Dry + 1 Wet cleaning)',
      'High-pressure chemical coil wash removing deep microbial build-ups & scale',
      'Full electrical diagnostic checks: contactors, capacitors, relays & amps',
      'Priority emergency callouts with waived technician mobilization charges',
      'Quarterly energy consumption & COP (Coefficient of Performance) reports'
    ],
    specs: [
      { label: 'Routine Visits', value: '3 Visits (2 Dry – 1 Wet)' },
      { label: 'Power Reduction', value: '15% – 20% Verified' },
      { label: 'Coverage Options', value: 'All Spares / Partial / Labour' }
    ],
    suitability: ['IT Towers & SEZs', 'Residential Societies', 'Banks & Corporate HQs', 'Manufacturing Plants']
  }
];

export const AMC_PLANS: AMCPlan[] = [
  {
    id: 'comprehensive-amc',
    name: 'Comprehensive AMC',
    badge: 'Enterprise Choice',
    popular: true,
    visits: '3 Visits (2 Dry – 1 Wet)',
    coverage: 'Includes 100% parts replacement & labour coverage for all key components.',
    details: [
      'Compressor breakdown coverage & replacement',
      'Fan Motor & Louver Motor repairs/replacement',
      'Complete Gas Charging & refrigerant top-up',
      'Capacitors, Relay switch, and Thermostat replacements',
      'Air Filters and Remote Controls included',
      'Fan & Blower assembly repairs',
      'Priority 60-min emergency response guarantee',
      'Quarterly air-quality and energy efficiency audit'
    ],
    recommendedFor: 'Commercial buildings, IT Parks, Hospitals, and critical infrastructure where zero downtime is tolerated.'
  },
  {
    id: 'semi-comprehensive-amc',
    name: 'Semi Comprehensive AMC',
    badge: 'Balanced Value',
    visits: '3 Visits (2 Dry – 1 Wet)',
    coverage: 'Comprehensive coverage of critical electricals and motor parts; compressor on chargeable basis if replaced.',
    details: [
      'Fan Motor & Louver Motor repair & maintenance',
      'Refrigerant gas top-up & leak repairs',
      'Capacitors & Relay Switch replacement',
      'Thermostat Switch and Sensor calibration',
      'Air Filter cleaning & Remote control troubleshooting',
      'Fan & Blower balancing',
      'Compressor repairs included (replacement parts charged at discounted rate)',
      'Free unlimited breakdown emergency callouts'
    ],
    recommendedFor: 'Medium offices, restaurants, high-end retail showrooms, and residential bungalows.'
  },
  {
    id: 'preventive-labour-amc',
    name: 'Preventive / Labour AMC',
    badge: 'Cost-Effective',
    visits: '3 Visits (2 Dry – 1 Wet)',
    coverage: 'Expert preventive maintenance labour. All required spare parts supplied on actual chargeable basis with zero markup.',
    details: [
      '3 Scheduled routine maintenance visits (2 Dry + 1 Deep Chemical Wet)',
      'Full thermodynamic health check & operational logging',
      'Coil cleaning, condensate drain flushing, and blower sanitization',
      'Tightening of all electrical terminations and contact points',
      'Refrigerant operating pressure diagnostic verification',
      'Discounted labor rates for emergency breakdown visits',
      'Transparent itemized spares pricing with direct manufacturer billing'
    ],
    recommendedFor: 'Budget-conscious commercial complexes, educational institutes, and warehouse facilities.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Environmental Audit',
    desc: 'Defining comfort parameters, ambient heat dynamics, and architectural load requirements across Indian climatic extremes.',
    icon: 'ThermometerSun'
  },
  {
    step: '02',
    title: 'Modeling & Design',
    desc: 'Analyzing thermodynamic performance to select the highest efficiency components (VRF vs Chillers vs Package units).',
    icon: 'Cpu'
  },
  {
    step: '03',
    title: 'Infrastructure Blueprinting',
    desc: 'Creating actionable, highly technical schematics, 3D CAD layouts, and duct routing for precise physical installation.',
    icon: 'FileSpreadsheet'
  },
  {
    step: '04',
    title: 'System Deployment',
    desc: 'Executing swift, disciplined installation using braze-free Lokring techniques, followed by strict air balancing.',
    icon: 'Wrench'
  },
  {
    step: '05',
    title: 'Operational Excellence',
    desc: 'Ensuring sustained 15-20% lower power consumption through predictive monitoring, scheduled AMCs, and 24/7 dispatch.',
    icon: 'Gauge'
  }
];

export const SYSTEM_TYPES_GRID = [
  {
    title: 'VRV / VRF Systems',
    desc: 'Variable refrigerant volume systems for zonal temperature control with 20% energy savings.',
    icon: 'Wind'
  },
  {
    title: 'Air & Water Chillers',
    desc: 'Central chiller plants for large-scale IT towers, manufacturing plants, and hospitals.',
    icon: 'Droplets'
  },
  {
    title: 'Staircase Pressurisation',
    desc: 'Life safety smoke ventilation protecting emergency escape routes during fire hazards.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Basement Ventilation',
    desc: 'High-thrust jet fan & ducted exhaust systems ensuring CO levels remain within safety limits.',
    icon: 'Layers'
  },
  {
    title: 'Cassette & Ducted AC',
    desc: 'Concealed ductables and 4-way ceiling cassettes engineered for aesthetic luxury spaces.',
    icon: 'Grid'
  },
  {
    title: 'Cleanroom & OT HVAC',
    desc: 'Precision temperature, positive pressure, and HEPA laminar airflow for healthcare and pharma.',
    icon: 'Sparkles'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'magarpatta-sez',
    number: '4.1',
    client: 'Magarpatta City SEZ Towers - B5 & B6',
    location: 'Magarpatta City, Hadapsar, Pune',
    title: 'Daikin VRV System for 3,40,000 Sq. Ft. Commercial Mega-Towers',
    challenge: 'Traditional air-conditioning systems in large commercial towers lacked automatic climate control to balance fluctuating interior loads with Pune’s sharp day-to-night temperature changes, resulting in runaway power consumption, huge utility space requirements, and high maintenance costs.',
    solution: 'B&B Constro implemented Daikin’s advanced, fully automatic VRV System. The system dynamically modulates power consumption based on real-time indoor demand and outdoor conditions. Delivered in record time with modular floor-by-floor zoning.',
    results: [
      '15% to 20% verified reduction in power consumption across operating cycles',
      'Reclaimed approximately 120 sq. meters of valuable utility space for commercial leasing',
      'Significantly reduced facility manpower via centralized BACnet automation',
      'High client satisfaction with minimal to zero maintenance required over years'
    ],
    areaCovered: '1,70,000 sq. ft. / 3,40,000 sq. ft. Total',
    capacity: '1,920 HP Total Outdoor / 960 HP Phase 1 (3,12,000 CFM AHUs & 960 TR IDUs)',
    image: '/magarpatta-cybercity-tower.jpg',
    featuredStat: {
      label: 'Energy Power Saved',
      value: '20%'
    }
  },
  {
    id: 'vulcan-technologies',
    number: '4.0',
    client: 'Vulcan Technologies',
    location: 'Pirangut Industrial Area, Pune',
    title: 'Pioneered Braze-Free Lokring Tube Connection Technology',
    challenge: 'Refrigeration and air-conditioning pipelines in sensitive industrial assembly areas required braze-free jointing to eliminate open-flame fire risks and prevent internal pipe oxidation—a pioneering technique never attempted at scale on industrial projects in India.',
    solution: 'B&B Constro pioneered first-of-its-kind braze-free Lokring mechanical tube connection technology. Our elite team connected 140 meters of high-pressure refrigerant pipeline across two industrial floors in just a single day without a single open spark.',
    results: [
      '140 meters of refrigerant pipeline completed in a record single day (24 hours)',
      '100% braze-free and fire-hazard-free installation inside an active plant',
      'Functioning flawlessly for over 3 years with zero leaks and zero complaints',
      'Established as a benchmark case study for cold-jointing in Indian HVAC'
    ],
    areaCovered: 'Two Industrial Floors',
    capacity: '140 Meters High-Pressure Refrigerant Piping in 1 Day',
    image: '/vulcan-technologies-plant.png',
    featuredStat: {
      label: 'Zero Complaints Over',
      value: '3+ Years'
    }
  }
];

export const ENTERPRISE_CLIENTS: ClientLogo[] = [
  { name: 'Tata Consultancy Services', sector: 'IT Services', symbol: 'TCS', accentColor: '#1d4ed8' },
  { name: 'Bajaj Finserv', sector: 'Financial Services', symbol: 'BAJAJ', accentColor: '#0284c7' },
  { name: 'Magarpatta City', sector: 'Smart Megacity & SEZ', symbol: 'MAGARPATTA', accentColor: '#16a34a' },
  { name: 'Solitaire Developers', sector: 'Luxury Real Estate', symbol: 'SOLITAIRE', accentColor: '#d97706' },
  { name: 'Guardian Developers', sector: 'Real Estate & Infra', symbol: 'GUARDIAN', accentColor: '#0284c7' },
  { name: 'Symbiosis International Univ.', sector: 'Education Campus', symbol: 'SYMBIOSIS', accentColor: '#b91c1c' },
  { name: 'Nanded City Pune', sector: 'Township Infrastructure', symbol: 'NANDED', accentColor: '#059669' },
  { name: 'Sakal Media Group', sector: 'Media & Publications', symbol: 'SAKAL', accentColor: '#dc2626' },
  { name: 'Hyundai Heavy Ind.', sector: 'Automotive & Engg', symbol: 'HYUNDAI', accentColor: '#0369a1' },
  { name: 'Schindler Elevators', sector: 'Building Tech', symbol: 'SCHINDLER', accentColor: '#475569' },
  { name: 'Hoerbiger India', sector: 'Industrial Compression', symbol: 'HOERBIGER', accentColor: '#0891b2' },
  { name: 'Syntel Atos', sector: 'Information Tech', symbol: 'SYNTEL', accentColor: '#2563eb' },
  { name: 'Horiba India', sector: 'Precision Instruments', symbol: 'HORIBA', accentColor: '#e11d48' },
  { name: 'Essar Group', sector: 'Infrastructure', symbol: 'ESSAR', accentColor: '#ea580c' },
  { name: 'Orbett Hotels', sector: 'Hospitality', symbol: 'ORBETT', accentColor: '#ca8a04' },
  { name: 'Bombay Brasserie', sector: 'Hospitality & Dining', symbol: 'BB', accentColor: '#7c3aed' },
  { name: 'The Irish House', sector: 'Hospitality & F&B', symbol: 'IRISH', accentColor: '#15803d' },
  { name: 'Vulkan Technologies', sector: 'Engineering Components', symbol: 'VULKAN', accentColor: '#4f46e5' },
  { name: 'Denyo India', sector: 'Power Generators', symbol: 'DENYO', accentColor: '#0284c7' },
  { name: 'Neologic Engineers', sector: 'Energy & Automation', symbol: 'NEOLOGIC', accentColor: '#16a34a' },
  { name: 'Dr. Pratibha Patil Hospital', sector: 'Healthcare & Hospitals', symbol: 'HOSPITAL', accentColor: '#dc2626' },
  { name: 'PPS Motors', sector: 'Automotive Tech', symbol: 'PPS', accentColor: '#0284c7' },
  { name: 'Valiant TMS', sector: 'Automation Systems', symbol: 'VALIANT', accentColor: '#64748b' },
  { name: 'Vikas Packaging', sector: 'Industrial Packaging', symbol: 'VIKAS', accentColor: '#0d9488' },
  { name: 'Cyrus Processing India', sector: 'Food & Dairy Processing', symbol: 'CYRUS', accentColor: '#ea580c' },
  { name: 'Dugad Group', sector: 'Industrial Real Estate', symbol: 'DUGAD', accentColor: '#dc2626' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sanjeev Deshmukh',
    role: 'Chief Infrastructure & Facilities Head',
    company: 'Magarpatta SEZ Towers, Pune',
    location: 'Hadapsar, Pune',
    quote: 'B&B Constro handled our 3,40,000 sq. ft. Daikin VRV project with surgical precision. Mr. Pravin Bakshi’s personal technical involvement delivered a 19% documented drop in our electricity bills. When an AHU sensor failed on a Sunday evening, their emergency team arrived within 50 minutes.',
    rating: 5,
    projectType: '3,40,000 Sq. Ft. VRV Installation & AMC',
    avatar: ''
  },
  {
    id: 'test-2',
    name: 'Dr. Anand Kulkarni',
    role: 'Director of Hospital Operations',
    company: 'Specialty Healthcare & Surgical Center',
    location: 'NIBM Road, Kondhwa, Pune',
    quote: 'In hospital environments, HVAC failures are life-threatening. B&B Constro implemented positive-pressure laminar airflow in our 4 operation theatres. Their emergency breakdown dispatch has saved us during monsoon power surges twice. We trust only them for our Annual Maintenance Contract.',
    rating: 5,
    projectType: 'Modular OT HVAC & Comprehensive AMC',
    avatar: ''
  },
  {
    id: 'test-3',
    name: 'Rajesh Nair',
    role: 'General Manager - Plant Engineering',
    company: 'Vulcan Technologies Pvt Ltd',
    location: 'Pirangut Industrial Area, Pune',
    quote: 'The Lokring braze-free piping technique they executed across our plant was groundbreaking. Zero flames, zero permits hold-up, 140 meters laid in 1 single day! It has been three continuous years without even a minor gas leakage or vibration complaint. True engineering mastery.',
    rating: 5,
    projectType: 'Industrial Cold-Joint Refrigerant Infrastructure',
    avatar: ''
  },
  {
    id: 'test-4',
    name: 'Kavita Chhajed',
    role: 'Managing Partner',
    company: 'Orbett Hotels & Banquets',
    location: 'Shivajinagar, Pune',
    quote: 'Our banquet halls host high-profile weddings with 800+ guests where cooling must adjust instantaneously. B&B Constro redesigned our ducted chillers and handles our Semi-Comprehensive AMC. Their engineers are well-mannered, uniformed, and always punctual.',
    rating: 5,
    projectType: 'Hospitality Chiller Retrofit & AMC',
    avatar: ''
  }
];

export const DIRECTOR_INFO = {
  name: 'Mr. Pravin Bakshi',
  title: 'Founder & Managing Director',
  experience: '17+ Years of HVAC Mastery',
  education: 'Bachelor in Production Engineering',
  background: 'Began career with industry giants like Hitachi, Onida, Voltas, and Daikin. After an illustrious corporate tenure managing national chillers and VRF rollouts, he founded Ambience Engineers in 2013 and subsequently established B&B Constro Pvt. Ltd. in 2024 to deliver cutting-edge climate solutions across India’s most complex architectures.',
  passion: 'Known for hands-on thermodynamic engineering and strategic problem-solving. Outside of engineering, an avid cricket enthusiast.'
};
