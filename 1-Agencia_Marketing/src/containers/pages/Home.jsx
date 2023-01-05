import Header from "components/home/Header"
import Incentives from "components/home/incentives"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Incentives/>
            </div>
            <Footer />
        </Layout>
    )
}
export default Home