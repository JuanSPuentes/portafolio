import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { get_project_list } from "redux/actions/project";
import { connect } from "react-redux";


function Portfolio ({get_project_list, project_list}) {  
  useEffect(()=>{
    get_project_list()
  },[])

  const urla = `${process.env.REACT_APP_API_URL}`
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://crypto-info-api.herokuapp.com/',
      repo: 'https://github.com/rahulkarda/crypto-info-api'
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://webpostman.netlify.app/',
      repo: 'https://github.com/rahulkarda/Web-Postman'
    },
    {
      id: 3,
      src: apod,
      link: 'https://apodbyrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/NASA-APOD'
    },
    {
      id: 4,
      src: waveportal,
      link: 'https://waveatrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/Wave-Portal'
    },
    {
      id: 5,
      src: nftportal,
      link: 'https://nftportalbyrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/NFT-Portal'
    },
    {
      id: 6,
      src: iptracker,
      link: 'https://trackmyip.netlify.app/',
      repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    },
  ];
  console.log(project_list);
  return (
    <FullWidthLayout>
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {
          project_list ?
          <>
          {
            project_list.map(({description, portafolio_uuid, published, tag, thumbnail, title, urlgit, url})=>(
              <div key={portafolio_uuid} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                <div className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e31789e82dd7b6f5911c1efee36829e8.jpe"
                    alt="projects"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(url, '_blank')}>
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(urlgit, '_blank')}>
                      GitHub
                    </button>
                  </div>
                </div>
            </div>
            ))
          
          }
          </> 
          :
          <>No existe</>
        }
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
