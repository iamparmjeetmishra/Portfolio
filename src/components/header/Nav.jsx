import {NavA} from '../index.js'
import {HomeIcon, ResumeIcon, WorksIcon, BlogsIcon, ContactIcon} from '../../media'

const nav = () => {
  return (
    <ul className='flex items-center gap-4 '>
      <NavA href='/' title="Home" icon={<HomeIcon />} />
      <NavA href='/resume' title="Resume" icon={<ResumeIcon />} />
      <NavA href='/works' title="Works" icon={<WorksIcon />} />
      <NavA href='/blogs' title="Blogs" icon={<BlogsIcon />} />
      <NavA href='/contact' title="Contact" icon={<ContactIcon />} />
    </ul>
  )
}

export default nav