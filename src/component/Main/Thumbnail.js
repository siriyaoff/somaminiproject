

const Thumbnail=(props)=>
{
    const _url=props.url
    return(
        <div>
            <img src={require("../../image/defaultThumb.jpg")} style={style.thumbImage}></img>
        </div>
    )
}
const style={
    thumbImage:{width:'100px',height:'100px',margin:'30px'}
}
export default Thumbnail