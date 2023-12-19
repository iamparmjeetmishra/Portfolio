import { Profile, Phone, Location, Download } from '../media'
import info from '../info.json'
import { SocialBtn, InfoBox } from '../components'


const Sidebar = () => {


    return (
        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] p-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
            <img
                src={Profile}
                alt='Profile Pic'
                className='w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]'
                loading='lazy'
            />
            <div className='pt-[100px]'>
                <h1 className='mt-6 text-3xl font-semibold dark:text-white'>{info.name}</h1>
                
                <div className="relative inline-flex my-4 group">
                    <div
                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <span
                        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-all duration-200 bg-gray-900 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
                    >
                        {info.title}
                    </span>
                </div>


                <SocialBtn />
            </div>
            <div className='p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]'>
                <InfoBox
                    title="Email"
                    icon={<Phone />}
                    email={`mailto:${info.email}`}
                    info={info.email}
                    color="text-[#E93B81]"
                />
                <InfoBox
                    title="Location"
                    icon={<Location />}
                    email="#"
                    info={info.location}
                    color='text-[#6AB5B9]'
                />
            </div>
            <a href={info.cvLink} target='_blank' rel='noopener noreferrer' className='inline-flex gap-2 items-center flex-nowrap mx-auto bg-gradient-to-r from-twOg-100 to-twOg-200 duration-200 transition ease-linear hover:bg-gradient-to-l from-twOg-200 to-twOg-100 px-8 py-3 text-lg text-white rounded-full mt-6  '>
                <span className='w-8'>
                    <Download />
                </span>
                <span>Download CV</span>
            </a>

        </div>
    )
}

export default Sidebar