import { useEffect, useState } from 'react';
//redux//
import {connect} from 'react-redux'
import {AddData, Sharing} from "../../../redux/MainReducer";
import store from '../../../index'

const mapStateToProps = state => ({
    sharing: state.sharing,
});
  
const mapDispatchToProps = {
    Sharing,
    AddData
};
const ShareComponent=()=>
{
    var [val,setVal]=useState(0.9)
    useEffect(()=>
    {
        setVal(1)
    })
    

    return(
        <div style={style.shareBox} onClick={()=>{store.dispatch(Sharing(0))}}>
            <div style={{transform:`scale(${1.1*val},${1.1*val})`,transition: 'transform 0.2s ease', borderRadius:'50px',margin:'0 auto',marginTop:'25vh',width:'50vw',height:'50vh',backgroundColor:'white'}}>
                <div style={style.shareButton} onClick={()=>{store.dispatch(AddData('a'))}}> 나도 공유하기</div>
            </div>
           

        </div>
    )
    
}
const style={
    shareBox:{zIndex:'0', position:'absolute',width:'100vw',height:'100vh',backgroundColor:'rgba(0,0,0,0.5)'},
    shareButton:{zIndex:'1',position:'relative',margin:'0 auto',top:'80%',width:'90%',height:'50px',backgroundColor:'skyblue',borderRadius:'100px'}
}

export default connect(mapStateToProps,mapDispatchToProps)(ShareComponent)