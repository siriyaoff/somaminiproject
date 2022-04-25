import Box from './Box'
const MainComponent=()=>
{
    return(
        <div style={style.background}>
            <Box></Box>
        </div>
    )
}
const style=
{
    background:{
        backgroundColor:'gray',
        width:'100vw',
        height:'100vh'
    }
}
export default MainComponent