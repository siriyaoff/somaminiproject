import {useRef, useState, useEffect} from 'react'
const styles={
    thumbImage:{objectFit:'contain',width:'100%',height:'100px'},
    descWindow:{position:'absolute',left:'-500px',width:'200px',height:'100px',margin:'30px',backgroundColor:'rgba(0,0,0,0.5)'}
}
const Thumbnail=(props)=>
{

    const _url=props.url
    const descWindow=useRef()
    return(
        <div >
            <img src={_url} style={styles.thumbImage}></img>
      
        </div>
    )
}

export default Thumbnail