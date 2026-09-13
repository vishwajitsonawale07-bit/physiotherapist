import { ServiceItem, ConditionItem, FaqItem, TestimonialItem, PhysioGalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'ADVANCED PHYSIOTHERAPIST HOME VISIT IN PUNE',
  shortName: 'Advanced Physiotherapy Pune',
  tagline: 'Professional Physiotherapy at Your Home in Pune',
  phone: '09487300777',
  phoneDisplay: '09487300777',
  phoneFormatted: '+91 94873 00777',
  address: 'Shyamli, 119/6, Krishna Path, Pune, Maharashtra',
  hours: 'Open daily · Closes at 10:30 PM',
  whatsappNumber: '919487300777',
  defaultWhatsAppMessage: 'Hello, I would like to book a physiotherapy home visit in Pune. Please share the available appointment timings.',
  trustLine: 'Home Physiotherapy • Personalized Treatment • Convenient Care',
  heroHeadline: 'Professional Physiotherapy at Your Home in Pune',
  heroSubheadline: 'Personalized physiotherapy and rehabilitation care delivered at home by experienced physiotherapy professionals.',
};

export const getWhatsAppLink = (customMessage?: string) => {
  const msg = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'paralysis-rehabilitation',
    title: 'Paralysis Rehabilitation',
    iconName: 'Activity',
    description: 'Comprehensive neurological recovery care designed to help patients regain muscular control and functional independence at home.',
    imageUrl: '/images/physio_home_hero_1789197089921.jpg',
    points: [
      'Personalized rehabilitation',
      'Mobility and movement training',
      'Strength and coordination exercises',
    ],
  },
  {
    id: 'stroke-rehabilitation',
    title: 'Stroke Rehabilitation',
    iconName: 'HeartPulse',
    description: 'Targeted recovery exercises following stroke events, focusing on neuroplastic recovery, motor relearning, and balance retraining.',
    imageUrl: '/images/physio_stroke_rehab_1789199637687.jpg',
    points: [
      'Functional recovery',
      'Balance training',
      'Mobility improvement',
    ],
  },
  {
    id: 'neurological-physiotherapy',
    title: 'Neurological Physiotherapy',
    iconName: 'Brain',
    description: 'Evidence-informed home therapy for chronic and acute neurological conditions, restoring postural stability and daily living routines.',
    imageUrl: '/images/physio_care_home_1789197111455.jpg',
    points: [
      'Movement rehabilitation',
      'Coordination and balance exercises',
      'Functional independence support',
    ],
  },
  {
    id: 'orthopedic-physiotherapy',
    title: 'Orthopedic Physiotherapy',
    iconName: 'Bone',
    description: 'Gentle and progressive physical therapy for joint stiffness, arthritis, fractures, and skeletal musculoskeletal concerns in comfort.',
    imageUrl: '/images/physio_ortho_knee_1789199697070.jpg',
    points: [
      'Joint and muscle rehabilitation',
      'Injury recovery',
      'Mobility restoration',
    ],
  },
  {
    id: 'back-neck-pain',
    title: 'Back & Neck Pain',
    iconName: 'ShieldAlert',
    description: 'Dedicated pain relief and spine care protocols to reduce discomfort, correct postural alignment, and restore pain-free movement.',
    imageUrl: '/images/physio_spine_therapy_1789199680980.jpg',
    points: [
      'Pain management',
      'Therapeutic exercises',
      'Posture and mobility guidance',
    ],
  },
  {
    id: 'post-surgery-rehabilitation',
    title: 'Post-Surgery Rehabilitation',
    iconName: 'Stethoscope',
    description: 'Careful post-operative therapy following joint replacements, spine surgeries, or orthopedic procedures to avoid complications and regain walking agility.',
    imageUrl: '/images/physio_ortho_knee_1789199697070.jpg',
    points: [
      'Recovery-focused physiotherapy',
      'Strength and mobility exercises',
      'Progressive rehabilitation',
    ],
  },
  {
    id: 'elderly-physiotherapy',
    title: 'Elderly Physiotherapy',
    iconName: 'UserCheck',
    description: 'Compassionate geriatric therapy for senior citizens, focused on preventing accidental falls, increasing joint stability, and prolonging active mobility.',
    imageUrl: '/images/physio_elderly_gait_1789199660100.jpg',
    points: [
      'Balance and mobility training',
      'Fall-risk reduction exercises',
      'Strength and functional movement',
    ],
  },
  {
    id: 'home-exercise-programs',
    title: 'Home Exercise & Rehabilitation Programs',
    iconName: 'Dumbbell',
    description: 'Structured routine plans customized to the patient’s home layout, complete with clear caregiver instructions and daily activity benchmarks.',
    imageUrl: '/images/physio_care_home_1789197111455.jpg',
    points: [
      'Personalized exercise plans',
      'Progress tracking',
      'Patient/caregiver guidance',
    ],
  },
];

export const PHYSIO_GALLERY_DATA: PhysioGalleryItem[] = [
  {
    id: 'gallery-stroke-recovery',
    title: 'Stroke & Neurological Motor Relearning',
    category: 'Neurological Care',
    description: 'Hands-on guided motor relearning drills and limb coordination retraining conducted safely in the patient’s living room.',
    imageUrl: '/images/physio_stroke_rehab_1789199637687.jpg',
    highlight: 'Neuroplasticity & Balance Drills',
  },
  {
    id: 'gallery-elderly-gait',
    title: 'Senior Citizen Walking & Fall Prevention',
    category: 'Geriatric Rehabilitation',
    description: 'Dedicated one-on-one gait analysis, balance stability, and safe walker ambulation to reduce fall risk at home.',
    imageUrl: '/images/physio_elderly_gait_1789199660100.jpg',
    highlight: 'Fall-Risk Reduction & Confidence',
  },
  {
    id: 'gallery-spine-therapy',
    title: 'Spine, Neck & Upper Back Manual Therapy',
    category: 'Pain Management',
    description: 'Gentle cervical mobilization, thoracic decompression, and postural re-alignment for chronic back and neck stiffness.',
    imageUrl: '/images/physio_spine_therapy_1789199680980.jpg',
    highlight: 'Targeted Non-Invasive Pain Relief',
  },
  {
    id: 'gallery-ortho-rehab',
    title: 'Post-Operative Knee & Joint Mobilization',
    category: 'Post-Surgery & Orthopedic',
    description: 'Progressive range-of-motion recovery, quadriceps activation, and safe flexion exercises following orthopedic procedures.',
    imageUrl: '/images/physio_ortho_knee_1789199697070.jpg',
    highlight: 'Safe Post-Surgical Milestones',
  },
  {
    id: 'gallery-bedside-care',
    title: 'Gentle Bedside & Chair Recovery Care',
    category: 'Paralysis & Bedridden Support',
    description: 'Passive and active-assisted range of motion, positioning, and bed mobility exercises for patients with limited movement.',
    imageUrl: '/images/physio_home_hero_1789197089921.jpg',
    highlight: 'Dignified 1:1 In-Home Therapy',
  },
  {
    id: 'gallery-functional-mat',
    title: 'Structured Core & Functional Mobility Programs',
    category: 'Home Exercise Regimen',
    description: 'Therapy mat drills and caregiver guidance so recovery routines continue safely between scheduled physiotherapist visits.',
    imageUrl: '/images/physio_care_home_1789197111455.jpg',
    highlight: 'Caregiver Guided Home Routines',
  },
];

export const CONDITIONS_DATA: ConditionItem[] = [
  { name: 'Paralysis', category: 'Neurological', description: 'Hemiplegia, paraplegia, facial palsy, and motor impairment rehabilitation.' },
  { name: 'Stroke', category: 'Neurological', description: 'Post-stroke motor recovery, speech-motor support, and walking retraining.' },
  { name: 'Back Pain', category: 'Pain Management', description: 'Sciatica, disc herniation, lower lumbar strain, and posture-induced pain.' },
  { name: 'Neck Pain', category: 'Pain Management', description: 'Cervical spondylosis, neck stiffness, radiculopathy, and tech neck.' },
  { name: 'Knee Pain', category: 'Orthopedic', description: 'Osteoarthritis, ligament sprains, meniscus strains, and joint stiffness.' },
  { name: 'Joint Problems', category: 'Orthopedic', description: 'Shoulder frozen shoulder, hip pain, ankle instability, and arthritis.' },
  { name: 'Sports Injuries', category: 'Orthopedic', description: 'Tendonitis, muscular tears, sprains, and pre/post-return training.' },
  { name: 'Post-Surgical Recovery', category: 'Orthopedic', description: 'Total knee/hip replacement, ACL repair, spine decompression care.' },
  { name: 'Balance Problems', category: 'Elderly & Mobility', description: 'Vestibular imbalance, unsteady gait, and dizzy transitions.' },
  { name: 'Mobility Difficulties', category: 'Elderly & Mobility', description: 'Trouble standing up from chairs, walking indoors, or using stairs.' },
  { name: 'Muscle Weakness', category: 'Elderly & Mobility', description: 'Disuse muscular atrophy, chronic fatigue, and reduced grip strength.' },
  { name: 'Age-related Mobility Issues', category: 'Elderly & Mobility', description: 'Senior citizen stiffness, frail gait, and loss of physical independence.' },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Call or WhatsApp',
    contact: '09487300777',
    description: 'Contact us directly at 09487300777 via phone or WhatsApp. Share your preferred timing and area in Pune.',
  },
  {
    step: '02',
    title: 'Discuss Your Requirement',
    description: 'We understand the patient’s health history, mobility condition, doctor recommendations, and specific physiotherapy needs.',
  },
  {
    step: '03',
    title: 'Home Physiotherapy Visit',
    description: 'Receive dedicated, one-on-one personalized treatment right in the comfort, hygiene, and convenience of your home in Pune.',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Home Visit Convenience',
    description: 'Eliminate traumatic car rides, high steps, and prolonged waiting room delays for patients coping with pain or reduced mobility.',
    icon: 'Home',
  },
  {
    title: 'Personalized Treatment Plans',
    description: 'Each session is tailored directly to the patient’s diagnosis, personal recovery pace, and physical home environment.',
    icon: 'FileCheck',
  },
  {
    title: 'Patient-Centered Care',
    description: 'Dedicated 1-on-1 therapeutic attention without rush, fostering a compassionate, comfortable, and dignified healing setting.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Rehabilitation-Focused Approach',
    description: 'Evidence-based manual therapy, mobilization, and functional exercises focused on long-term independence and functional progress.',
    icon: 'Target',
  },
  {
    title: 'Suitable for Elderly & Mobility-Limited Patients',
    description: 'Safe in-home monitoring reduces fall hazards and transfer risks, making therapy viable for bedridden or elderly family members.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Easy Appointment Booking',
    description: 'Straightforward booking via direct call or WhatsApp with flexible scheduling open daily until 10:30 PM across Pune.',
    icon: 'CalendarCheck',
  },
];

export const PATIENT_JOURNEY_STEPS = [
  {
    stepNumber: '1',
    title: 'Assessment',
    summary: 'Detailed physical evaluation of joint movement, muscle strength, balance, pain triggers, and medical history at your home.',
  },
  {
    stepNumber: '2',
    title: 'Treatment Plan',
    summary: 'A structured, goal-oriented physiotherapy plan aligned with doctor prescriptions and patient comfort.',
  },
  {
    stepNumber: '3',
    title: 'Physiotherapy Session',
    summary: 'Hands-on manual therapy, therapeutic exercises, and mobility drills delivered step-by-step in your living space.',
  },
  {
    stepNumber: '4',
    title: 'Exercise Guidance',
    summary: 'Clear demonstrations and safe daily routines prescribed for the patient and family caregivers between visits.',
  },
  {
    stepNumber: '5',
    title: 'Progress Monitoring',
    summary: 'Regular re-evaluations to adjust exercise intensity, document functional milestones, and ensure steady recovery.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    patientInitials: 'R. K.',
    condition: 'Post-Surgery Knee Rehabilitation',
    locationArea: 'Kothrud, Pune',
    feedbackText: 'Home visits made recovery much easier after surgery. Having therapy right in the living room avoided painful travel, and the therapist was very patient with step exercises.',
    sessionCount: '12 Sessions Completed',
    isPlaceholderNotice: true,
  },
  {
    id: 'placeholder-2',
    patientInitials: 'S. M.',
    condition: 'Elderly Mobility & Balance Support',
    locationArea: 'Aundh, Pune',
    feedbackText: 'My mother was hesitant to leave home due to unsteady walking. The regular balance drills and fall-prevention exercises helped build her confidence to walk around the house safely.',
    sessionCount: '15 Sessions Completed',
    isPlaceholderNotice: true,
  },
  {
    id: 'placeholder-3',
    patientInitials: 'A. P.',
    condition: 'Chronic Lower Back Pain',
    locationArea: 'Baner, Pune',
    feedbackText: 'Dealing with severe back stiffness from desk work. The personalized stretching and posture guidance at home gave noticeable relief without having to drive across traffic.',
    sessionCount: '8 Sessions Completed',
    isPlaceholderNotice: true,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Do you provide physiotherapy home visits in Pune?',
    answer: 'Yes, we provide dedicated physiotherapy home visits across residential locations in Pune. Our service brings personalized treatment and rehabilitation care directly to your doorstep, so patients do not have to travel.',
  },
  {
    question: 'What conditions can be treated through home physiotherapy?',
    answer: 'We help patients with paralysis rehabilitation, stroke recovery, neurological disorders, orthopedic conditions (like knee and shoulder stiffness), chronic back and neck pain, post-surgical recovery, sports rehabilitation, muscle weakness, and age-related mobility challenges.',
  },
  {
    question: 'Is home physiotherapy suitable for elderly patients?',
    answer: 'Absolutely. Home physiotherapy is especially suitable for elderly patients who find it painful or difficult to commute to a clinic. Treatment at home prevents the risk of accidental falls during travel and allows the physiotherapist to guide safe movements within the patient’s familiar living environment.',
  },
  {
    question: 'How can I book a home visit?',
    answer: 'Booking is quick and simple. You can call us directly at 09487300777, message us on WhatsApp with your location and requirement, or fill out the appointment request form on this website. We will connect with you to confirm available timings.',
  },
  {
    question: 'What should I keep ready before the physiotherapist arrives?',
    answer: 'Please keep any relevant doctor prescriptions, surgical discharge summaries, or X-ray/MRI reports handy. Ensure a clean, comfortable, and well-lit space in the room with sufficient room for movement, such as a sturdy bed or floor mat. Loose, comfortable clothing is recommended for the patient.',
  },
  {
    question: 'How long is a typical physiotherapy session?',
    answer: 'A standard home physiotherapy session typically lasts between 45 to 60 minutes, depending on the patient’s condition, physical endurance, and the specific exercises or manual therapy required for that day.',
  },
  {
    question: 'Can family members/caregivers participate in rehabilitation?',
    answer: 'Yes, we actively encourage family members and caregivers to observe sessions. The physiotherapist provides safe guidance and precautions so that caregivers can assist the patient with gentle routine positioning and recommended daily home exercises between scheduled visits.',
  },
  {
    question: 'Do you provide post-surgery rehabilitation at home?',
    answer: 'Yes. We provide progressive post-operative rehabilitation for patients who have undergone total knee replacement (TKR), hip replacement (THR), fracture fixation, spinal surgery, or other orthopedic procedures, helping them regain joint mobility, strength, and walking independence safely.',
  },
];
