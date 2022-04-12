import React from "react";
import { Card } from 'antd';
import './style/card.css'
const { Meta } = Card;

const Cards: Function = (): JSX.Element[]  => {
    const cardInfo = [
        {alt:"image1", src:"https://www.meme-arsenal.com/memes/00d37a154c02aefe0a2516675c232ead.jpg", title:"Котик псих", description:"ауауаауа"},
        {alt:"image2", src:"https://www.meme-arsenal.com/memes/387b8b3400551f699be5d27a475b78d2.jpg", title:"Крутой котик", description:"Гад дэм бой"},
        {alt:"image3", src:"https://www.meme-arsenal.com/memes/a840f062d3732c0109a469e72e4cae4a.jpg", title:"Следящий котик", description:"Я тя вижу чел"}];

    const renderCard = (card:any, index:any) => {
        return(
            <Card className="card" hoverable style={{ width: 240 }} key={index}
                cover={<img alt={card.alt} src={card.src} />}>
                <Meta title={card.title} description={card.description} />
            </Card>
        )
    }
    return(cardInfo.map(renderCard));
}

export default Cards;