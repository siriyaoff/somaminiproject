import Thumbnail from "./Thumbnail"

const utubeUrl=['https://www.youtube.com/watch?v=B1Mj0MwiwCE','https://www.youtube.com/watch?v=B1Mj0MwiwCE']
const Box=()=>
{
    return(
        <div style={{margin:'10px'}}>
            <div style={style.box}>
                {utubeUrl.map((idx)=>{return(<Thumbnail url={idx}></Thumbnail>)})}
            </div>
        </div>
    )
}
export default Box
const style=
{
    box: {boxShadow:'0px 5px 5px gray',backgroundColor:'white',height:'150px', width:'50vw', margin:'0 auto', borderRadius:'50px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}
    
}