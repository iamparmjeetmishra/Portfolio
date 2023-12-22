import { Form } from '../components'

const Contact = () => {
  return (
    <section>
      <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold">Contact</h2>
          <span className=" rounded-full h-1 w-36 bg-gradient-to-r from-twOg-100 to-twOg-200"></span>
      </div>
      <p className="my-5">Contact Data is coming soon.</p>
      <div className="p-6 border border-1 flex gap-5 rounded-lg border-white/10 ">
        <Form />
      </div>

    </section>
  )
}

export default Contact