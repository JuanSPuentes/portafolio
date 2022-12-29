import { connect } from "react-redux";
import HeroImage from "assets/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
    const user = [{
        id: 1,
        title: "Hola, mi nombre es:",
        name: "Sebastian Puentes",
        description: 'Soy un ingeniero de software con conocimientos en desarrollo de aplicaciones backend usando el framework Django'
    }]


    return (
            <div
                name="Inicio"
                className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
            >
                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                    <div className="small-screen hidden">
                        <img
                            src={HeroImage}
                            alt="profile"
                            className="rounded-2xl mx-auto w-2/3 md:w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        {user.map(({ id, title, name, description }) => (
                            <div key={id}>
                                <p className="sm:text-sm text-xs font-bold text-white">
                                    {title}
                                </p>
                                <p className="sm:text-5xl text-2xl font-bold text-white">
                                    {name}
                                </p>
                                <p className="text-gray-500 py-4 max-w-md">
                                    {description}
                                </p>
                            </div>

                        ))}


                        <div className="portfolio-btn">
                            <Link
                                to="portfolio"
                                smooth
                                duration={500}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                            >
                                Portfolio
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="big-screen">
                        <img
                            src={HeroImage}
                            alt="profile"
                            className="rounded-2xl mx-auto w-2/3 md:w-full"
                        />
                    </div>

                </div>
            </div>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Home)