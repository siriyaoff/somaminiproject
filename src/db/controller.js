import { useEffect, useState } from "react";

//json-server --watch ./src/db/data.json --port 3001 http://localhost:3001/playlists
export default function useFetch(url){ //http://localhost:3001/playlists or http://localhost:3001/playlists/id 사용시 사용하는 함수
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>{return res.json()})
        .then(data=>setData(data));
    }, [url]);

    return data;
}

export default function deletePlaylist(id){
    fetch('http://localhost:3001/playlists/${id}', {
        method: 'DELETE'
    })
}

export default function addPlaylist(playlist){
    fetch('http://localhost:3001/playlists', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: playlist.name,
            tags: playlist.tags,
            songs: playlist.songs
        })
    })
}
