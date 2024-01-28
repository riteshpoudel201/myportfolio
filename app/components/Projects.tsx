import ProjectList from '@/app/components/ProjectLayout'
import fs from 'fs';
import path from 'path';



type data = {
  id: number,
  title:string,
  description:string,
  url:string,
  image:string
}

const Projects = () => {
  const dataFile = path.join(process.cwd(), 'public', 'projects.json');
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
  return (
    <>
    <div id="projects" className="flex flex-col justify-between items-center w-auto h-auto p-4 mt-16 mb-8 bg-slate-300 rounded-lg">
        <h1 className="w-full md:text-4xl  md:no-underline underline underline-offset-8 mb-5 text-center text-3xl text-duskblue-500">Projects</h1>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-2 h-auto">
          {
            data.map((items:any) => {
              return <ProjectList key={ items.id } imageURL={ items.image} projectTitle={items.title}  projectId={items.id}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Projects