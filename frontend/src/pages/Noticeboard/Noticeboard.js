import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Noticeboard.css';
import {useParams} from "react-router-dom";
import { useEffect } from 'react';

import Carousel from 'react-elastic-carousel';
import Card from './Card';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



export default function Noticeboard() {


  const [Notificationdata, setData] = React.useState([]);

  useEffect(() => {
    // Call the API here
    fetch('http://localhost:8080/api/fetchNotification')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        // Handle the error here
        console.log(error);
        // Display an error message to the user
        alert('Error fetching data from API');
      });
  }, []);


 


  const Data = [
    { id: 1, title: 'Notification for rechecking 2023', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 2, title: 'Notification for Dues ', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 3, title: 'Notification for Date Extension Spring 2023', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 4, title: 'Notification for rechecking 2023', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 5, title: 'Notification for Date Extension Spring 2023', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 6, title: 'Notification for Dues', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 7, title: 'Notification for Date Extension Spring 2023', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur" },
    { id: 8, title: 'Notification for rechecking 2023', description: "Lorem ipsum dolor sit  vel consequatur" },
   
  ];

  const [items, setitems] = useState(Data)

    const userId = useParams().id;
    const loadedNotification = Data.filter(notification => notification.id === userId);
    console.log(loadedNotification);

  return (
    <div>
      <Navbar />

      

      <section className='container-fluid p-0 m-0 noticeboardSection'>
       <div className='container carasolUpperdiv '>
       
       <Carousel breakPoints={breakPoints}>
          {Notificationdata.map((item, key) => <Card id={item._id} title={item.title} description={item.description} image={item.image} />)}
         
        </Carousel>
       </div>
      </section>
      <Footer />
    </div>
  )
}
