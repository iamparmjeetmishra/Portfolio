import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NameIcon, EmailIcon, TextAreaIcon } from '../../media'


const schema = z.object({
  name: z.string().min(1, { message: 'Required at least 2 characters' }),
  email: z.string().email(),
  message: z.string().min(2, { message: 'Required atleast 2 characters' })
})


const Form = () => {

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  const submitData = (data) => {
    console.log(data)
  }

  return (
    <>

      <form onSubmit={handleSubmit(submitData)} className="w-full max-w-md ">
    
      <label htmlFor="name" className="label">
        Your Name
      </label>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <NameIcon className="w-5" />
          </div>
          <input type="text" id="name" className='input' placeholder="Enter your name" {...register("name")} />
        </div>
        <label htmlFor="email" className="label">
        Your Email
      </label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <EmailIcon className="w-5" />
          </div>
          <input type="email" className='input' id="email" placeholder="Enter your email" {...register("email")} />
        </div>
        <label htmlFor="name" className="label">
        Your Message
      </label>
        <div className="relative mb-4 ">
          <div className="absolute inset-y-0 start-0 flex items-start pt-3.5 ps-3.5 pointer-events-none">
            <TextAreaIcon className="w-5" />
          </div>
          <textarea rows="4" type="text" className='input' id="message" placeholder="Enter your message" {...register("message")} />
        </div>
        <button type='submit' className='px-4 py-2 flex bg-neutral-800/90 rounded-xl hover:bg-gradient-to-r from-twOg-100 to-twOg-200 hover:transition-background-color'>Submit</button>
      </form>

    </>
  )
}

export default Form