
import {Twitter, Linkedin, Github} from '../../media'
import info from '../../info.json'

const SocialBtn = () => {
  return (
      <>
        <div className='flex justify-center space-x-3'>
                  <a
                      href={info.socials.twitter}
                      target='noreferrer noopener'
                      className='p-3 flex bg-neutral-800/90 rounded-xl hover:bg-gradient-to-r from-twOg-100 to-twOg-200 hover:transition-background-color '
                  >
                          <Twitter />
                  </a>
                  <a
                      href={info.socials.linkedin}
                      target='noreferrer noopener'
                      className='p-3 flex bg-neutral-800/90 rounded-xl hover:bg-gradient-to-r from-twOg-100 to-twOg-200 hover:transition-background-color '
                  >
                          <Linkedin />
                  </a>
                  <a
                      href={info.socials.github}
                      target='noreferrer noopener'
                      className='p-3 flex bg-neutral-800/90 rounded-xl hover:bg-gradient-to-r from-twOg-100 to-twOg-200 hover:transition-background-color '
                  >
                          <Github />
                  </a>
              </div>
      </>
  )
}

export default SocialBtn