import {Home, Sidebar, Resume, Projects, Blogs, Contact} from './pages'
import {Header, Footer} from './components'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <section className='bg-homeBg container mx-auto min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full'>
      <Header />
      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 grid lg:col-span-4 lg:h-screen lg:sticky top-44">
          <Sidebar />
        </div>
        <div className='col-span-12 lg:col-span-8 '>
          <div className='px-12 py-12 sm:px-5 md:px-10 lg:px-14 rounded-2xl bg-white dark:bg-[#111111]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/works' element={<Projects />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
            <Footer />
        </div>
      </div>
    </section>
  )
}

export default App