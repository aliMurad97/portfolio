import AboutSection from './components/homepage/about';
import Blog from './components/homepage/projects';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Packages from './components/homepage/packages';
import HeroSection from './components/homepage/hero-section';
import Experiences from './components/homepage/experiences';
import Skills from './components/homepage/skills';

async function getData() {
  const project_data = [
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'ECU Personnel',
      'reading_time_minutes': '2',
      'description': `An app for dry car wash customers to interact with their dealers and receive discounted offers when...`
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'Obeikan 3',
      'reading_time_minutes': '2',
      'description': `An app for making it easy for employees during their inspection through several plants in the factory...`
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'O3 Mobility',
      'reading_time_minutes': '2',
      'description': `A separate module for Obeikan 3 application where it performs different actions than other modules...`
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'ABGO',
      'reading_time_minutes': '2',
      'description': `ABGO is a Namibia based Uber-like application with driver and customer versions...`
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'Edged Up CRM',
      'reading_time_minutes': '2',
      'description': `Mobile version of a US-based CRM platform with four user panels. Backend developed in Laravel, with user role-based validation ...`
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'BlockHangs',
      'reading_time_minutes': '2',
      'description': `BlockHangs is a social app for discovering like-minded communities within a 30-50 km radius. Current...`
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'Mentor Praxis',
      'reading_time_minutes': '2',
      'description': `Real estate platform for Spanish investors to search and communicate with agencies. Uniform design...`
    }
  ];  
  

  const filtered = project_data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      {/* exerience */}
      <Experiences />
      <Skills />
      <Education />
      {/* projects */}
      <Blog blogs={blogs} />
      {/* packages */}
      <Packages /> 
      <ContactSection />
    </div>
  )
};