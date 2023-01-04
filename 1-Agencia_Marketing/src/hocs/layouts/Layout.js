

import { connect } from "react-redux"
//import {motion} from 'framer-motion'

function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (Layout)