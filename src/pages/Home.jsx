import { AboutBox } from '../components'
import info from '../info.json'
import { UxUi, WebDev } from '../media'

const Home = () => {
  return (
    <section>
      {/* First Section */}
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold">About Me</h2>
          <span className=" rounded-full h-1 w-36 bg-gradient-to-r from-twOg-100 to-twOg-200"></span>
        </div>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
          <div className="col-span-12 space-y-2.5">{ info.aboutMe.para1 }</div>
          <div className="col-span-12 space-y-2.5">{ info.aboutMe.para2 }</div>
          <div className="col-span-12 space-y-2.5">{ info.aboutMe.para3 }</div>
        </div>
        <section className='py-12'>
          <h2 className="text-3xl mb-6 font-bold">About Me</h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 '>
            <AboutBox icon={<UxUi />} title='Ui/Ux Design' text="lorem3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
            <AboutBox icon={<WebDev />} iconColor="text-blue-500" title='Ui/Ux Design' text="lorem3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
          </div>
        </section>
    </section>
  )
}

export default Home