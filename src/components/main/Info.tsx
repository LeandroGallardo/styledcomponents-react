import { useNavigate } from "react-router-dom";

import { FaPlay, FaStar } from "react-icons/fa";
import { ContainerInfo, MiniAvata,ButtonBuy } from '../styled.components';
import Backwidow  from "../../assets/black-widow.png"


const Info = () =>{
    const history = useNavigate();
    const goToDetails = ():void=>{
        history('/detail/2');
    }
    return(
        <>
         <ContainerInfo height={50}>
            <section className="icon-info">
                <FaPlay size={25} color={'red'}/>
            </section>
            <section className="title-info">
                black widows
            </section>
            <section className="details-info">
                <section className="list">
                    <div>2020</div>
                    <div>fantastic</div>
                    <div>2h 35min</div>
                </section>
            </section>
            <section className="start">
                <FaStar color="orange"/>
                <FaStar color="orange"/>
                <FaStar color="orange"/>
                <FaStar color="orange"/>
                <FaStar />
            </section>
            <section className="description">
                <div className="description-title">
                    plattos  <summary></summary>
                </div>
                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, incidunt. Nostrum qui deleniti id velit voluptatem? Adipisci illum et accusamus aut dolorum, quae maxime atque voluptate quas doloremque, facilis perspiciatis?</div>
            </section>
            <section className="description">
                <div className="description-title">
                    cast
                </div>
                <div className="images">
                {[1,2,3,4].map((item)=>  <MiniAvata key={item} src={Backwidow}/> )}
                </div>
            </section>
            <section className="button-buy">
                <ButtonBuy onClick={goToDetails}>Buy</ButtonBuy>
            </section>
         </ContainerInfo>
        </>
    )
}
export default Info