import PlayComponent from "./PlayComponent"
import DescComponent from "./DescComponent"
import Thumbnail from "./Thumbnail"
import Slider from 'react-slick'
import {useState} from 'react'
import store from '../../index'
// https://i1.ytimg.com/vi/VIDEO-ID/default.jpg
// https://www.youtube.com/watch?v=BdwfiToXEio

const thumblink=() => {
    let ulinks=store.getState().data;
}

const utubeUrl=['https://img.youtube.com/vi/nVCubhQ454c/2.jpg','https://img.youtube.com/vi/eN5mG_yMDiM/2.jpg','https://img.youtube.com/vi/eN5mG_yMDiM/2.jpg','https://img.youtube.com/vi/eN5mG_yMDiM/2.jpg','https://img.youtube.com/vi/eN5mG_yMDiM/2.jpg']
const Box=()=>
{
    
    const settings = {
        dots: true,
        speed: 200,
        slidesToShow: 3,
        centerMode: true,
        className:'center',
        slickArrowColor:'red'
      };
    const [click,setClick]=useState(-1)
    return(
        <div className='Lower' style={{margin:'10px'}}>
            <DescComponent></DescComponent>
            <div style={{margin:'10px',backgroundColor:'rgb(240,240,240)',height:'230px', width:'50vw', margin:'0 auto', borderRadius:'50px'}}>
            
            <div style={{paddingTop:'20px',width:'90%',margin:'0 auto'}}>
                
            <Slider {...settings}>
                {utubeUrl.map((idx)=>{return(<Thumbnail url={idx}></Thumbnail>)})}
            </Slider>
            </div>
            
            <div onClick={()=>{setClick(click*(-1))}}style={{userSelect:'none',position:'relative',top:'40px',margin:'0 auto',fontSize:'50px',color:'black',textAlign:'center'}}>{click==-1?'▶':'ll'}</div>
            </div>
            
            


        </div>
    )
}
export default Box
const style=
{
    
}