// nav schema
export const NAV_SCHEMA = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Our Story',
    link: '/our-story',
  },
  {
    name: 'Our Team',
    link: '/our-team',
  },
];

export const OUR_TEAM_SCHEMA = [
  {
    name: 'Pratik Shetty',
    role: 'Founder & CEO',
    link: '/',
    image: '/images/pratik.png',
    description:
      'Pratik combines his expertise in business and technology to craft a seamless experience . When he’s not busy steering the ship, you can find him exploring local food markets, experimenting with new recipes, or brainstorming the next big idea over a cup of coffee.A curious thinker and passionate builder, Pratik thrives at the intersection of creativity, culture, and technology — always looking for new ways to turn bold ideas into meaningful realities.',
  },
  {
    name: 'Minakhi Das',
    role: 'Design Lead',
    link: '/',
    image: '/images/minakhi.png',
    description:
      'A creative explorer at heart, she leads with vision and intention — turning bold ideas into intuitive experiences. With deep expertise in UX, UI, and brand design, she blends imagination with strategy to craft solutions that are both meaningful and beautifully executed.Wanderlust-fueled and curiosity-driven, she brings a global perspective to every pixel and process. Whether shaping a product interface or building a brand from the ground up, her work is guided by empathy, creativity, and a deep understanding of human experience.',
  },
  {
    name: 'Dhananjay Sharma',
    role: 'Technical Lead',
    link: '/our-team',
    image: '/images/dhan.png',
    description:
      'Mobile engineer by day, adventurer by heart. Whether I’m scaling code or mountain trails, I live for the thrill of the challenge. From late-night debugging to last-minute backpacking trips, I believe life (and tech) is better when you push the limits. Building Onecart is my latest ride — and trust me, it’s one hell of an adventure. ',
  },
  {
    name: 'Siddharth Bisht',
    role: 'Full-Stack Developer',
    link: '/',
    image: '/images/sid.png',
    description:
      'Code crafter since 2017, shaping web & mobile experiences that are scalable, efficient, and impactful.MERN stack & React Native enthusiast with a knack for TypeScript, and building robust backends powered by Node.js & Express.AWS-savvy (S3, EC2, Lambda) and on an exciting journey into AI/ML & Deep Learning to bring intelligence into applications.',
  },
  {
    name: 'Swati Raut',
    role: 'Senior UX/UI Designer ',
    link: '/',
    image: '/images/swati.png',
    description:
      'I see design as a bridge between people and technology — a way to make digital experiences feel effortless, inclusive, and meaningful. My journey has been shaped by continuous growth: self-learning, embracing challenges, and adapting across roles and teams. I believe in design with intention — where every detail has meaning, and simplicity translates into understanding. Through that lens, I aim to craft digital experiences that are intuitive, refined, and deeply human. Beyond the screen, I draw inspiration from pottery, painting, embroidery, and travelling. Working with form, texture, and colours fuels my imagination and reminds me that creativity thrives at the intersection of beauty and function.',
  },
  {
    name: 'Misbah Khalid',
    role: 'Visual Designer ',
    link: '/our-team',
    image: '/images/misbah.png',
    description:
      'I’m a Graphic and UI/UX Designer passionate about solving problems through design. With a strong eye for detail and a focus on user experience, I create designs that are not only visually engaging but also functional and intuitive. My goal is to bridge creativity with strategy—crafting solutions that help brands connect with their audience and make digital experiences seamless.',
  },
  {
    name: 'Preethi Batchali',
    role: 'UX/UI Designer',
    link: '/',
    image: '/images/preethi.png',
    description:
      "Curious at heart, I design experiences that are purposeful, human-centered, and inclusive. With a background in both UI and UX, I enjoy crafting smooth flows and joyful interfaces that solve real user problems.Constantly evolving, I believe design is a journey of empathy, iteration, and impact.When I'm not wireframing or prototyping, you'll find me dancing, doodling, or exploring cultures through travel. ",
  },
  {
    name: 'Asin Honore',
    role: 'Full-Stack Developer ',
    link: '/our-story',
    image: '/images/asin.png',
    description:
      "I'm Asin Honore, a dedicated full-stack web developer  and web scraper , focused on creating dynamic and efficient web applications.",
  },
  {
    name: 'Barisanem Fiiwe',
    role: 'Full-Stack Developer ',
    link: '/our-team',
    image: '/images/barry.png',
    description:
      "I'm a Front-End Developer skilled in React, Next.js, TypeScript, and Tailwind CSS. I build responsive, user-friendly web applications with a focus on clean architecture and performance. I also work with Cypress and Vitest to ensure robust test coverage and code reliability. I'm committed to continuous learning and staying up to date with modern web technologies.",
  },
  {
    name: 'Usama Ahmed',
    role: 'Full-Stack Developer ',
    link: '/our-team',
    image: '/images/usama.png',
    description:
      'Usama leads the development of Onecart’s mobile application, leveraging react native to deliver a seamless, high-performance shopping experience. With extensive full-stack expertise and a strong background in scalable architecture, he drives the design, implementation and optimisation of features that bring Onecart to users everywhere.',
  },
];
// footer schema
export const footerSectionSchema = [
  {
    title: 'Company Info',
    links: [
      { label: 'Our Story', href: '/' },
      { label: 'Our Team', href: '/' },
      { label: 'Contact Us', href: '/' },
    ],
  },
  {
    title: 'For Buyers',
    links: [
      { label: 'How it Works', href: '/' },
      { label: 'FAQS', href: '/faq' },
    ],
  },
  {
    title: 'For Sellers',
    links: [
      { label: 'Become a OneSeller', href: '/' },
      { label: 'FAQS', href: '/faq' },
    ],
  },
  {
    title: 'Social Media',
    links: [
      { label: 'Instagram', href: '/' },
      { label: 'Facebook', href: '/' },
      { label: 'Linkedin', href: '/' },
      { label: 'TikTok', href: '/' },
    ],
  },
];
//onecart-tie-up Schema
export const ONECART_TIE_UP_SCHEMA = [
  {
    id: 1,
    image: '/images/gm-onetips.png',
    slug: 'Greater Manchester Business Growth Hub',
    content:
      "'Growth Company' for the Greater Manchester Business Growth Programme, Hands Mentoring, Networking and Support Programme funded by Manchester City Council, and Levelling-Up UK funded by the Home Office.",
  },
  {
    id: 2,
    image: '/images/gate-onetips.png',
    slug: "World's largest Incubator for Startups",
    content:
      "'Nights and Days' programme is a 6-week Incubation programme where startups could work on anything alongside thousands of others. 12M+ more than 30,000 people joined nights & weekends to work on their own ideas.",
  },
  {
    id: 3,
    image: '/images/eagle-lab-onetips.png',
    slug: 'Kollider Barclays Eagle Labs',
    content:
      "Onecart is selected for the 'Innovator Founder' programme in collaboration with Kollider Sheffield. Kollider- Barclays Eagle Labs is an initiative by Barclays Bank UK PLC to support entrepreneurs, startups, and scaleups in the United Kingdom.",
  },
];
// faq schema
export const FAQ_SCHEMA = [
  {
    id: 1,
    question: 'What is Onecart?',
    answer:
      'The Undergraduate Empowerment and Sensitization Scheme (UESS) is a transformative platform designed to bridge the gap between academia and industry, empowering Nigerian undergraduates with the skills, knowledge, and mentorship they need to thrive. We believe in building a generation of future leaders and entrepreneurs who can drive positive change in their communities and the nation.',
  },
  {
    id: 2,
    question: 'How is Onecart different from regular shopping apps?',
    answer:
      'Our goal is to empower 100,000 undergraduates across 20 higher institutions in the next five years, creating a ripple effect of positive change throughout Nigeria.',
  },
  {
    id: 3,
    question: 'Do I need an account to make a purchase on Onecart?',
    answer:
      'To ensure we empower our beneficiaries, we have set up three empowerment structures. They are:',
  },
  {
    id: 4,
    question: 'How do I buy something during a live stream?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 5,
    question: 'Can I ask questions before purchasing?',
    answer: 'You can be a part of UESS through any of these 3 ways',
  },
  {
    id: 6,
    question: 'Is my payment information secure?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 7,
    question: 'How do I track my order?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 8,
    question: 'What if there’s a problem with my order?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
];

// faq schema
export const BUYER_FAQ_SCHEMA = [
  {
    id: 1,
    question: 'What is Onecart?',
    answer:
      'The Undergraduate Empowerment and Sensitization Scheme (UESS) is a transformative platform designed to bridge the gap between academia and industry, empowering Nigerian undergraduates with the skills, knowledge, and mentorship they need to thrive. We believe in building a generation of future leaders and entrepreneurs who can drive positive change in their communities and the nation.',
  },
  {
    id: 2,
    question: 'How is Onecart different from regular shopping apps?',
    answer:
      'Our goal is to empower 100,000 undergraduates across 20 higher institutions in the next five years, creating a ripple effect of positive change throughout Nigeria.',
  },
  {
    id: 3,
    question: 'Who can become Oneseller?',
    answer:
      'To ensure we empower our beneficiaries, we have set up three empowerment structures. They are:',
  },
  {
    id: 4,
    question: 'How do i register as Oneseller?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 5,
    question: 'What do i need to start selling?',
    answer: 'You can be a part of UESS through any of these 3 ways',
  },
  {
    id: 6,
    question: 'Who are Onesellers?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 7,
    question: 'Is it free to join as a seller?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 8,
    question: 'Can I broadcast from my bedroom or home?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 8,
    question: 'Can I broadcast from my bedroom or home?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 9,
    question: 'Can I interact with viewers when selling products?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
  {
    id: 10,
    question: 'What products can I sell?',
    answer:
      'It costs absolutely nothing to sign up on UESS and have access to our empowerment materials and mentorship structures. Nothing! It is absolutely FREE for undergraduates! So sign up today!',
  },
];
