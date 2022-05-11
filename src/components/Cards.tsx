import React from "react";
import { Card } from 'antd';
import './style/card.css'
const { Meta } = Card;

const Cards: Function = (): JSX.Element[]  => {
    const cardInfo = [
        {alt:"image1", src:"https://oir.mobi/uploads/posts/2021-05/1620920026_7-oir_mobi-p-milie-belie-sobachki-zhivotnie-krasivo-fot-7.jpg", title:"Высококачественный", description:"Самец"},
        {alt:"image2", src:"http://gafgaf.ru/funny/funny_big1.jpg", title:"Пухляш", description:"Добрая собака"},
        {alt:"image3", src:"https://sornyakov.net/wp-content/uploads/2018/12/1-180.jpg", title:"Китайская собачка", description:""}];

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