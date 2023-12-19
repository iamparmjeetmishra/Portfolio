
const Footer = () => {
    const date = new Date()
    let year = date.getFullYear()

  return (
      <div className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
          <div className="container">
              <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
              © {year} All Rights Reserverd | Build By Parm
              </p>
          </div>
    </div>
  )
}

export default Footer