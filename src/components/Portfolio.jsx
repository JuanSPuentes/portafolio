import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { get_project_list } from "redux/actions/project";
import { connect } from "react-redux";


function Portfolio ({get_project_list, project_list}) {  
  useEffect(()=>{
    get_project_list()
  },[])


  return (
    <FullWidthLayout>
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Algunos proyectos que he realizado</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          project_list ?
          <>
          {
            project_list.map(({description, portafolio_uuid, published, tag, urlthumbnail, title, urlgit, url})=>(
                <div key={portafolio_uuid} className="shadow-md shadow-gray-600 rounded-lg">
                  <h2 className="text-lg m-1 uppercase font-bold">{title}</h2>
                  <img
                    src={urlthumbnail}
                    alt="projects"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="grid grid-cols-3 sm:grid-cols-3 ">
                  {
                  tag.map(({tag_uuid, tag})=>(
                      <p key={tag_uuid} className="m-1 text-xs text-red-500">{tag}</p> 
                  ))
                  }
                  </div>
                  <div className="flex items-center justify-center">
                    {
                      url ?
                      <>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-purple-700 rounded-md" onClick={ () => window.open(url, '_blank')}>
                      Demo
                    </button>
                      </>
                      :
                      <></>
                    }
                    {
                      urlgit ?
                      <>
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-purple-700 rounded-md" onClick={ () => window.open(urlgit, '_blank')}>
                        GitHub
                      </button>
                      </>
                      :
                      <></>
                    }
                  </div>
                </div>
            
            ))
          
          }
          </> 
          :
          <>Actualmente no hay proyectos</>
        }
        </div>
      </div>
    </div>
    </FullWidthLayout>
  );
};
const mapStateToProps = state => ({
  project_list: state.project.project_list

})

export default connect(mapStateToProps, {
  get_project_list
})(Portfolio)
