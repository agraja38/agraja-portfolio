export const SITE = {
  name: 'Agraja Wijayawardane',
  title: 'Mechatronic Engineer',
  tagline: 'Building smarter factories through automation, robotics, and machine vision.',
  email: 'agraja@live.com',
  location: 'Colombo, Sri Lanka',
  cvPath: `${import.meta.env.BASE_URL}agraja-cv.pdf`,
  github: 'https://github.com/agraja38',
  linkedin: 'https://www.linkedin.com/in/agraja-wijayawardane-2a40b0241',
}

export const ABOUT = {
  paragraphs: [
    'I am a Mechatronic Engineer with hands-on experience across industrial automation, robotics, machine vision, factory maintenance, and engineering-side procurement.',
    'Through roles at Chamara Engineering, Rockland Distilleries, and Phoenix Industries, I have worked on vision-based rejection systems, PLC automation, pump and motor diagnostics, robotic integration, BOQs, and supplier coordination — turning real engineering challenges into practical solutions.',
    'I thrive at the intersection of hardware, software, and project delivery: designing, testing, improving systems, and keeping work moving efficiently from shop floor to supply chain.',
  ],
  highlights: [
    'Mechatronic Engineering',
    'Industrial Automation',
    'Robotics',
    'Machine Vision',
    'PLC Systems',
    'Factory Maintenance',
    'Pump & Motor Diagnostics',
    'BOQs & Cost Estimation',
    'Procurement',
    'Practical Problem Solving',
  ],
}

export const EXPERIENCE = [
  {
    company: 'Chamara Engineering',
    role: 'Junior Engineer',
    department: 'Engineering Department',
    location: 'Sri Lanka',
    period: 'Mar 2026 – Present',
    url: '#',
    summary:
      'Supporting engineering and commercial delivery through BOQs, quantity take-offs, cost estimation, procurement, and international supplier coordination.',
    highlights: [
      'Prepared Bills of Quantities (BOQs) from project drawings, specifications, and scope of work',
      'Carried out quantity take-offs, cost estimations, and measurement of construction works',
      'Managed procurement — sourcing suppliers, obtaining quotations, comparing prices, and placing orders',
      'Coordinated with suppliers and internal teams to keep materials on schedule',
      'Handled international trading activities including supplier communication, pricing, order processing, and shipping documentation',
      'Reviewed quotations, commercial terms, and maintained BOQ, purchase, invoice, and order records',
    ],
  },
  {
    company: 'Rockland Distilleries',
    role: 'Engineering Intern',
    department: 'Engineering Department',
    location: 'Seethawakapura, Sri Lanka',
    period: 'Nov 2025 – Feb 2026',
    url: 'https://www.rockland.lk/',
    summary:
      '13-week industrial training focused on maintenance, flood recovery, pump and motor diagnostics, PLC systems, and production-line automation.',
    highlights: [
      'Industrial maintenance and automation exposure across pumps, motors, conveyors, and control panels',
      'Flood recovery: inspection, testing, drying, alignment, and recommissioning of affected equipment',
      'Pump and motor diagnostics — dial indicator alignment, insulation resistance, bearing and vibration checks',
      'Proposed PLC-based CIP automation with flow sensors, temperature feedback, and timed cleaning cycles',
      'Evaluated automated labeling machines for servo accuracy, sensor performance, and maintainability',
    ],
  },
  {
    company: 'Phoenix Industries Ltd.',
    role: 'Engineering Trainee',
    department: 'Automation Department',
    location: 'Makandura, Sri Lanka',
    period: 'Dec 2024 – Mar 2025',
    url: 'https://phoenix.lk/',
    summary:
      'Hands-on automation projects spanning machine vision, robotics, PLC integration, energy monitoring, and precision manufacturing.',
    highlights: [
      'Vision-based rejection system (Caltex) with AI cameras and pneumatic actuators for real-time defect detection',
      'Automated bottle orientation and labeling system with HikRobot cameras, PLCs, and cooling control',
      'Designed and CNC-machined robotic arm end effector for injection molding (IM65)',
      'Programmed Universal Robot UR5 for pick-and-place across multiple wheel sizes',
      'Energy monitoring with Schneider PM2100 and Arduino via RS485/Modbus RTU with SD card logging',
      '3D modeling, PCB design, PLC programming, and cross-functional collaboration with QA and logistics',
    ],
  },
]

export const SKILLS = {
  technical: [
    'Industrial Automation',
    'Robotics',
    'Machine Vision',
    'PLC Systems',
    'Factory Maintenance',
    'Pump & Motor Diagnostics',
    'Arduino',
    'RS485 / Modbus RTU',
    'SolidWorks',
    'CNC Machining',
    'Pneumatics',
    'Equipment Testing',
    'BOQs & Quantity Take-offs',
    'Cost Estimation',
    'Procurement',
  ],
  soft: ['Analytical Skills', 'Teamwork', 'Leadership', 'Problem Solving'],
}

export const EDUCATION = [
  {
    institution: 'Curtin University',
    qualification: 'Bachelor of Mechatronic Engineering',
    level: '',
    period: '2022 – present',
  },
  {
    institution: 'Ananda College',
    qualification: 'Advanced Level',
    level: 'Combined Maths, Physics, Chemistry — 3 Simple Passes',
    period: '2019 / 2020',
  },
  {
    institution: 'Ananda College',
    qualification: 'Ordinary Level',
    level: "6 A's, 2 B's, 1 C",
    period: '2016',
  },
]

export const QUALIFICATIONS = [
  { issuer: 'TVEC', title: 'National Certificate Plumber NVQ 4', year: '2023' },
  { issuer: 'NIOSH', title: 'Foundation Course', year: '2023' },
  { issuer: 'CHPB', title: 'Quantity Surveying Certificate Course NVQ 4', year: '2023' },
  { issuer: 'NIBM', title: 'Certificate in Computer Programming', year: '2017' },
  { issuer: 'NIBM', title: 'Certificate in Computer Science', year: '2017' },
  { issuer: 'Sri Lanka Life Saving', title: 'Life Guard', year: 'Since 2018' },
]

export const VOLUNTEERING = [
  { org: 'Curtin Colombo Student Guild', period: '2022 / 2023' },
  { org: 'Curtin Student Ambassador Program', period: '2022 / 2023' },
  { org: 'Ananda College Western Orchestra', period: '2019' },
  { org: 'Ananda College ICT Society', period: '2019' },
]

export const INTERESTS = ['Programming', 'Photography', 'Swimming']

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
