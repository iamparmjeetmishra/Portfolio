import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NameIcon, EmailIcon, TextAreaIcon } from '../../media'
import { Axios } from 'axios'
import Email from '../../api/email'


const schema = z.object({
  name: z.string().min(1, { message: 'Required at least 2 characters' }),
  email: z.string().email(),
  message: z.string().min(2, { message: 'Required at least 2 characters' })
})

const Form = () => {
  


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const submitData = async (data) => {
    console.log(data)
    
    Axios.post(Email(), {
      name: data.name,
      email: data.email,
      message: data.message
    })
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitData)} className="w-full max-w-md">
        <label htmlFor="name" className="label">
          Your Name
        </label>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <NameIcon className="w-5" />
          </div>
          <input type="text" id="name" className='input' placeholder="Enter your name" {...register("name")} />
          {/* Display error if there is one for this field */}
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <label htmlFor="email" className="label">
          Your Email
        </label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <EmailIcon className="w-5" />
          </div>
          <input type="email" id="email" className='input' placeholder="Enter your email" {...register("email")} />
          {/* Display error if there is one for this field */}
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <label htmlFor="message" className="label">
          Your Message
        </label>
        <div className="relative mb-4 ">
          <div className="absolute inset-y-0 start-0 flex items-start pt-3.5 ps-3.5 pointer-events-none">
            <TextAreaIcon className="w-5" />
          </div>
          <textarea rows="4" type="text" className='input' id="message" placeholder="Enter your message" {...register("message")} />
          {/* Note that textarea does not have a type attribute */}
          {/* Also corrected id to "message", it was "name" before */}
          {/* Display error if there is one for this field */}
          {errors.message && <p>{errors.message.message}</p>}
        </div>
          <button type='submit' className='px-4 py-2 flex bg-neutral-800/90 rounded-xl hover:bg-gradient-to-r from-twOg-100 to-twOg-200 hover:transition-background-color'>Submit</button>
        </form>

      </>
      )
 }

      export default Form;
