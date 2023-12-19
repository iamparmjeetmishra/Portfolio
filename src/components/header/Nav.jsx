import {NavA} from '../index.js'
import {HomeIcon, ResumeIcon, WorksIcon, BlogsIcon, ContactIcon} from '../../media'

const nav = () => {
  return (
    <ul className='flex items-center top-0 lg:flex-row lg:gap-4 gap-0 flex-col '>
      <NavA href='/' title="Home" icon={<HomeIcon />} />
      <NavA href='/resume' title="Resume" icon={<ResumeIcon />} />
      <NavA href='/works' title="Works" icon={<WorksIcon />} />
      <NavA href='/blogs' title="Blogs" icon={<BlogsIcon />} />
      <NavA href='/contact' title="Contact" icon={<ContactIcon />} />
    </ul>
  )
}

export default nav