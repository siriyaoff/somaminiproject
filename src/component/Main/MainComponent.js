import Box from './Box'
import ShareComponent from './Share/ShareComponent'
import ShareButton from './ShareButton'
//redux//
import {connect} from 'react-redux'
import {Sharing} from "../../redux/MainReducer";
import store from '../../index'
import DescComponent from './DescComponent';

const mapStateToProps = state => ({
    sharing: state.sharing,
    data:state.data,
});
  
const mapDispatchToProps = {
    Sharing
};



const MainComponent=()=>
{
    const database=store.getState()['data']
    return(
        <div style={style.background}>
            
            {store.getState()['sharing']?<div className='Upper'><ShareComponent></ShareComponent></div>:null}
            {database.map(()=>{return(<Box></Box>)})}
            <ShareButton></ShareButton>
        </div>
    )
}
const style=
{
    background:{
        gridTemplateRows:'1fr',
        backgroundColor:'white',
        width:'100vw',
        height:'100vh',
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)