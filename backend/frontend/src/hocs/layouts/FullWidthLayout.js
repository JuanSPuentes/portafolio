import React from "react"
import { connect } from "react-redux"
import About from "components/About"
import Contact from "components/Contact"
import Experience from "components/Experience"
import Footer from "components/Footer"
import NavBar from "components/NavBar"
import Portfolio from "components/Portfolio"
import SocialLinks from "components/SocialLinks"

const FullWidthLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <About/>
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
            <SocialLinks />
        </>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(FullWidthLayout)