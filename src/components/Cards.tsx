import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

const Cards: Function = (): JSX.Element[]  => {
    const cardInfo = [
        {alt:"image1", src:"*", title:"Text1", description:"Description1"},
        {alt:"image2", src:"*", title:"Text2", description:"Description2"},
        {alt:"image3", src:"*", title:"Text3", description:"Description3"}];

    const renderCard = (card:any, index:any) => {
        return(
            <Card hoverable style={{ width: 240 }} key={index}
                cover={<img alt={card.alt} src={card.src} />}>
                <Meta title={card.title} description={card.description} />
            </Card>
        )
    }
    return(cardInfo.map(renderCard));
}

export default Cards;