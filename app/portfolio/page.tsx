import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Portfolio = () => {
  
  return (
    <>
      <div className='flex flex-col relative h-screen w-screen'>
        <div>
          <Navbar />
        </div>
        <div className='relative flex  md:flex-row md:h-[80vh] flex-col-reverse h-4 w-full'>
          <div className=' flex-[4_4_0%] bg-white'>
            main code here...
          </div>
          <div className='flex-1 z-20'>
                    <Sidebar/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio