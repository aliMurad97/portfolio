// @flow strict

import { personalData } from "@/utils/data/personal-data";
import ProjectCard from "../components/homepage/projects/blog-card";

async function getBlogs() {
  // const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }

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
    },
    {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'OMS',
      'reading_time_minutes': '2',
      'description': `Order Management System App for Restaurants to prepare Orders for Pickup and Dinein like foodpanda.`
    },  {
      'cover_image': '/png/placeholder.png',
      'url': '',
      'title': 'CMA',
      'reading_time_minutes': '2',
      'description': `Customer Management App for Customers to Order either Pickup or Dinein.`
    }
  ]; 
  return project_data;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <ProjectCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;