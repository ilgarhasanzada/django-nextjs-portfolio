import { getData } from '@/api';
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact';
import Home from '@/components/sections/Home'
import Portfolio from '@/components/sections/Portfolio'

export default async function Index() {
  const about = await getData('about/');
  const skills = await getData('skills/');
  const experience = await getData('experience/');
  const education = await getData('education/');
  const categories = await getData('categories/');
  const portfolios = await getData('portfolios/');
  return (
      <>
        <Home about={about[0]} /> 
        <About about={about[0]} skills={skills} experience={experience} education={education}/>
        <Portfolio data={categories} portfolios={portfolios}/>
        <Contact/>
      </>
    )
}