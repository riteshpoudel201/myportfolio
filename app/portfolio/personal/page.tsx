import Sidebar from '@/app/components/sidebar';
import Navbar from '../../components/navbar';
const Personal = () => {
  return (
    <>
    <div className='flex flex-col'>
        <div className='flex-1'>
          <Navbar />
        </div>
        <div className=' flex flex-1 md:flex-row md:h-[80vh] flex-col-reverse h-40 md:mt-0 mt-[0rem] w-full border-t-[1px] border-duskblue-400 border-solid'>
          <div className=' flex-[4_4_0%] bg-white'>
            Personal Details
          </div>
          <div className='flex-1'>
                    <Sidebar/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Personal
