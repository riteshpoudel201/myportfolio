import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Portfolio = () => {
  
  return (
    <>
      <div className='flex flex-col relative h-screen w-screen'>
        <div>
          <Navbar />
        </div>
        <div className='relative flex  md:flex-row md:h-[80vh] flex-col-reverse h-4 w-full border-t-[1px] border-duskblue-400 border-solid'>
          <div className=' flex-[4_4_0%] bg-white'>
            main code here...
          </div>
          <div className='flex-1'>
                    <Sidebar/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio