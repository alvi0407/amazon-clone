import React from 'react';
import '../Styling/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            

            <div className="home-row" >
                <Product
                id="46613816"
                name="ASIAN Men's Bouncer-01 Sports,Walking,Gym,Training,Running Shoes"
                price={799}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61hMQOHmEIL._UL1100_.jpg"
                />
                
                <Product
                id="87961244"
                name="Lavie Yalta Women's Satchel Handbag"
                price={2021}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/91aJPRnitgS._UL1500_.jpg"
                />
            </div>
            
            <div className="home-row" >
                <Product
                id="22387946"
                name="OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)"
                price={399999}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg"
                />

                <Product
                id="58796900"
                name="Samsung 108cm (43 inches)  4K Ultra HD Smart QLED TV"
                price={61999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71YDVrHosvS._SL1500_.jpg"
                />

                <Product
                id="93481455"
                name="pTron Bassbuds Jets True Wireless Bluetooth 5.0 Headphones"
                price={999}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/5129tlcwEKS._SL1100_.jpg"
                />
            </div>

            <div className="home-row" >
                <Product
                id="27874023"
                name="Titan Pay Analog Black Dial Women's Watch-2617WL04"
                price={4274}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71jk8PVM8NL._UL1500_.jpg"
                />

                <Product
                id="89571120"
                name="KN95 Face Mask 40 Pcs, 5-Layer Certificated Masks(5 pieces)"
                price={1145}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71CQ7lDhUqS._UL1500_.jpg"
                />
                <Product
                id="11716023"
                name="APPUCOCO Book Shelf Wall Mounted Metal Book Shelves"
                price={649}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/4120b7VAK9L.jpg"
                />

            </div>
            </div>
        </div>
    );
}

export default Home;
