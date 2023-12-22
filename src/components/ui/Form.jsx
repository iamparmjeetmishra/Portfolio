import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label, Input } from '../index'
import { NameIcon, EmailIcon } from '../../media'

const schema = z.object({
  name: z.string().min(1, { message: 'Required at least 2 characters' }),
  email: z.string().email(),
  message: z.string().min(2, { message: 'Required atleast 2 characters' })
})


const Form = () => {

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <>

      <form onSubmit={handleSubmit} className="w-full max-w-md ">
    
        <Label htmlFor="name" title="Your Name" />
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <NameIcon className="w-5" />
          </div>
          <Input type="text" id="name" placeholder="Enter your name" />
        </div>
        <Label htmlFor="email" title="Your Email" />
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <EmailIcon className="w-5" />
          </div>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
        <button type='submit' className=''>Submit</button>
      </form>

    </>
  )
}

export default Form