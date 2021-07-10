import {Drink} from "../App";
import {List, Typography} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export const DrinkList = ({title, data}: { title: string,  data: Drink[] }) => (
    <div style={{marginTop: "10px"}}>
        <Title level={2}>{title}</Title>
        <List
            itemLayout="vertical"
            dataSource={
                data.filter(drink => drink.inactive !== true)
            }
            style={{maxWidth: "1200px"}}
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
            }}
            renderItem={item => (
                <div style={{display: "flex", width: "95%", marginLeft: "10px", marginRight: "10px", alignContent: "space-between"}}>
                    <Typography style={{width: "100%"}}>
                        <Title level={3}>{item.name}</Title>
                        <Paragraph>{item.description}</Paragraph>
                    </Typography>
                    <img
                        src={process.env.PUBLIC_URL + '/images/' + item.image}
                        alt={item.name + " drink"}
                        height={100}
                    />
                </div>
            )}
        />
    </div>
)