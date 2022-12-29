import { connect } from "react-redux"
import About from "components/About"
import Experience from "components/Experience"
import Footer from "components/Footer"
import NavBar from "components/NavBar"
import SocialLinks from "components/SocialLinks"
import Home from "containers/pages/Home"

const FullWidthLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Home/>
            <About/>
            {children}
            <Experience />
            <Footer />
            <SocialLinks />
        </>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(FullWidthLayout)