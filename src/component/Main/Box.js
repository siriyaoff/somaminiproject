import PlayComponent from "./PlayComponent"
import DescComponent from "./DescComponent"
import Thumbnail from "./Thumbnail"
import Slider from 'react-slick'
import {useState} from 'react'
import store from '../../index'
// https://i1.ytimg.com/vi/VIDEO-ID/default.jpg
// https://www.youtube.com/watch?v=BdwfiToXEio

const thumblink=(pliObj) => {
    let ulinks=pliObj.songs;
    //console.log('ulink JSON:\n'+JSON.parse(JSON.stringify(ulinks)));
    let res=[];
    for(let s of ulinks){
        res.push('https://i1.ytimg.com/vi/'+s.slice(-11)+'/default.jpg');
    }
    console.log('res:\n'+res);
    return res;
}

const Box=(props)=>
{
    
    const settings = {
        dots: true,
        speed: 200,
        //slidesToShow: 3,
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
                {thumblink(props.pliObj).map((turl)=>{return(<Thumbnail url={turl}></Thumbnail>)})}
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