import {useState} from 'react'
//redux//
import {connect} from 'react-redux'
import {Sharing} from "../../redux/MainReducer";
import store from '../../index'

const mapStateToProps = state => ({
    sharing: state.sharing,
});
  
const mapDispatchToProps = {
    Sharing
};
const ShareButton=()=>
{
    return(
        <div style={style.shareButton} onClick={()=>{store.dispatch(Sharing(1))}} >
            <div style={style.shareButtonText}>공유하기</div>
        </div>
    )
}
const style={
    shareButton:{
        display:'table',
        margin:"0 auto",
        backgroundColor:'rgb(0,162,255)',
        width:'50vw',
        height:'100px',
        textAlign:'center',
        borderRadius:'100px',
    },
    
    shareButtonText:{
        display:'table-cell',
        color:'white',
        fontSize:'30px',
        verticalAlign:'middle',
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ShareButton)