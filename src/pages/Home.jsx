import { AboutBox, SkillBtn } from '../components'
import info from '../info.json'
import { UxUi, WebDev, PerformanceIcon } from '../media'

const Home = () => {
  return (
    <section>
      {/* First Section */}
      <div className="flex items-center gap-5">
        <h2 className="text-3xl font-bold">About Me</h2>
        <span className=" rounded-full h-1 w-36 bg-gradient-to-r from-twOg-100 to-twOg-200"></span>
      </div>
      <div className="grid grid-cols-12 gap-4 pt-4 md:pt-[30px] items-center ">
        <div className="col-span-12 ">{info.aboutMe.para1}</div>
        <div className="col-span-12 ">{info.aboutMe.para2}</div>
        <div className="col-span-12 ">{info.aboutMe.para3}</div>
      </div>
      <section className='py-12'>
        <h2 className="text-3xl mb-6 font-bold">What I do!</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 '>
          <AboutBox icon={<UxUi />} title='Ui/Ux Design' text="I value simple content structure, clean design patterns and thoughtful interactions." />
          <AboutBox icon={<WebDev />} iconColor="text-blue-500" title='Web Development' text="I like to code things from scratch, and enjoy bringing ideas to life in the browser." />
          <AboutBox icon={<PerformanceIcon />} iconColor="text-purple-400" title='Design Conversion' text="Efficiently transforming designs from Adobe XD/Figma into various frameworks, such as React and Wordpress, for successful implementation." />
          <AboutBox icon={<PerformanceIcon />} iconColor="text-green-400" title='Performance & SEO' text="Optimize the website for speed and accessibility, ensuring it is easily discoverable and caters to a broad audience." />
        </div>
      </section>
      <section>
        <h2 className="text-3xl mb-6 font-bold ">My Skills</h2>
        <div className='grid lg:grid-cols-2 gap-4'>
          <div className='lg:col-span-2 border border-white/10 rounded-lg p-4'>
            <h3 className='text-lg font-semibold mb-4'>FrontEnd Skills</h3>
            <div className='flex gap-4 flex-wrap'>
              <SkillBtn title="HTML5" />
              <SkillBtn title="CSS3" />
              <SkillBtn title="Javascript" />
              <SkillBtn title="SCSS" />
              <SkillBtn title="Bootstrap" />
              <SkillBtn title="TailwindCSS" />
              <SkillBtn title="Custom Sites" />
            </div>
          </div>
          <div className='lg:col-span-2 border border-white/10 rounded-lg p-4'>
            <h3 className='text-lg font-semibold mb-4'>FrontEnd Library</h3>
            <div className='flex gap-4 flex-wrap'>
              <SkillBtn title="React" />
              <SkillBtn title="Responsive Design" />
              <SkillBtn title="State Management" />
              <SkillBtn title="Redux" />
              <SkillBtn title="Redux-toolkit" />
              <SkillBtn title="Form Development" />
              <SkillBtn title="Formik" />
              <SkillBtn title="React Form Hook" />
              <SkillBtn title="Components" />
              <SkillBtn title="Props" />
              <SkillBtn title="React Router" />
              <SkillBtn title="JSON" />
              <SkillBtn title="API" />
              <SkillBtn title="Axios" />
              <SkillBtn title="React Query" />
            </div>
          </div>
          <div className='border border-white/10 rounded-lg p-4'>
            <h3 className='text-lg font-semibold mb-4'>Version Control</h3>
            <div className='flex gap-4 flex-wrap'>
              <SkillBtn title="GIT" />
              <SkillBtn title="GitHub" />
            </div>
          </div>
          <div className='border border-white/10 rounded-lg p-4'>
            <h3 className='text-lg font-semibold mb-4'>Deployment</h3>
            <div className='flex gap-4 flex-wrap'>
              <SkillBtn title="cPanel" />
              <SkillBtn title="Vercel" />
              <SkillBtn title="Netlify" />
              <SkillBtn title="Digital Ocean" />
            </div>
          </div>
          <div className='border border-white/10 rounded-lg p-4'>
            <h3 className='text-lg font-semibold mb-4'>CMS</h3>
            <div className='flex gap-4 flex-wrap'>
              <SkillBtn title="WordPress" />
              <SkillBtn title="Site Optimisation" />
              <SkillBtn title="Speed Improvement" />
              <SkillBtn title="Built from Scratch" />
              <SkillBtn title="Elementor" />
              <SkillBtn title="Gutenberg" />
              <SkillBtn title="Virus Removal" />
              <SkillBtn title="Security" />
              <SkillBtn title="Plugins Installation" />
            </div>
          </div>
          <div className=' border border-white/10 rounded-lg p-4'>
            <h3 className='text-lg font-semibold mb-4'>Currently Learning</h3>
            <div className='flex gap-4 flex-wrap'>
              <SkillBtn title="NextJS" />
              <SkillBtn title="Express" />
              <SkillBtn title="MongoDB" />
              <SkillBtn title="Mongoose" />
              <SkillBtn title="mySql" />
              <SkillBtn title="React Cache" />
              <SkillBtn title="Redis" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home