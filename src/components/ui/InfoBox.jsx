

const InfoBox = ({ icon, title, info, email, color }) => {
    // const {emailProps, phoneProps} = info
  return (
      <>
        <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
              <span className={`"flex-shrink-0  bg-white dark:bg-black  p-4 rounded-md shadow-md" ${color}` }>
                  {icon}
              </span>
              <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">{title}</p>
                  <p className="dark:text-white break-all">
                      <a href={email || info} target="_blank" rel="noopener noreferrer" className="hover:text-[#FA5252] duration-300 transition">{ info || 'Info Button'}</a>
                  </p>
              </div>
        </div>
      </>
  )
}

export default InfoBox