
import { useEffect, useState } from 'react';
import { Container, AvatarContainer, Avatar,Degrade } from "../styled.components"
import Backwidow  from "../../assets/black-widow.png"

interface Movie {
    name: string;
    description: string;
    thumbnail: string;
}
interface Item {
    name: string;
    description: string;
    thumbnail: {
        path:string;
        extension : string;
    }
}
const Carousel = () : JSX.Element =>{
    const [data, setData ] = useState<Movie []> ([]);
    const getData = async (): Promise<void> => {
        const url = import.meta.env.VITE_BASE_URL;
        const items = await fetch(url);
        const response = await items.json();
        const aItems = response.data.results.map((items:Item)  => {
            const obj: Movie = {
                name:items.name,
                description: items.description,
                thumbnail: `${items.thumbnail.path}.${items.thumbnail.extension}`
            }
            return obj
        }) 
        setData(aItems);
        console.log(aItems);
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
        {data.length > 0 && <>
        <Container height={50} src={data[0].thumbnail}>
        </Container>
        <AvatarContainer height={50}>
            <Avatar height={50} src={Backwidow}>

            </Avatar>
        </AvatarContainer>
        <Degrade height={50}></Degrade>
        </>
        }
        </>
    )
}
export default Carousel