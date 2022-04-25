import Thumbnail from "./Thumbnail"

const utubeUrl=['https://www.youtube.com/watch?v=B1Mj0MwiwCE']
const Box=()=>
{
    return(
        <div style={style.box}>
            {utubeUrl.map((idx)=>{return(<Thumbnail url={idx}></Thumbnail>)})}
            </div>
    )
}
export default Box
const style=
{
    box: {backgroundColor:'lightgray',height:'200px', width:'50vw', margin:'0 auto', borderRadius:'50px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}
    
}