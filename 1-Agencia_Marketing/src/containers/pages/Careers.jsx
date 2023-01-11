import Header from "components/careers/Header"
import Testimonial from "components/careers/Testimonial"
import LogoCloud from "components/careers/LogoCloud"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import Features from "components/careers/Features"
import PositionsList from "components/careers/PositionsList"
import { Helmet } from "react-helmet-async"

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
              <Helmet>
        <title>Fork DAO | Carreras</title>
        <meta name="description" content="Estableciendonos como un agregador web3." />
        <meta name="keywords" content='web3, DAO, integraciones, descentralizacion' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.fork-dao.com/" />
        <meta name="author" content='ekeko' />
        <meta name="publisher" content='ekeko' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Fork DAO | "todo roto"' />
        <meta property="og:description" content='Estableciendonos como un agregador web3.' />
        <meta property="og:url" content="www.fork-dao.com/" />
        <meta property="og:image" content='https://bafybeigh4em54oo3stszmrfh756dilog63eszlwhkwpnst3xxzpmwbctxm.ipfs.w3s.link/FDNEGROCIRCULAR.png' />

        <meta name="twitter:title" content='Fork DAO | "todo roto"' />
        <meta
            name="twitter:description"
            content='Estableciendonos como un agregador web3.'
        />
        <meta name="twitter:image" content='https://bafybeigh4em54oo3stszmrfh756dilog63eszlwhkwpnst3xxzpmwbctxm.ipfs.w3s.link/FDNEGROCIRCULAR.png' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Testimonial />
                <div className="bg-gray-50">
                </div>
                <Features />
                <Features />
                <PositionsList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Careers