import axios from 'axios'
import { useEffect, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const InstagramFeed = ({data}) => {
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(async () => {
    const photosResult = await axios.get(`https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}/media?fields=id&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`)
    const numOfRecentPhotos = 10;
    const photos = photosResult.data.data.slice(0, numOfRecentPhotos).map((photo) => (photo));
    for (const photo of photos) {
      const photoUrlResult = await axios.get(`https://graph.instagram.com/${photo.id}?fields=media_url&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`)
      setPhotoUrls(photoUrls => [...photoUrls, photoUrlResult.data.media_url]);
    }
  }, [])

  useEffect(() => {
    return () => {
      setPhotoUrls([]);
      console.log("Cleaned Up");
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="instagram-feed">
      <h2 className="title">follow us on instagram:</h2>
      <div className="slider">
        <Slider {...settings}>
          {
            photoUrls.map((photoUrl, index) => {
              return (
                <a href="https://www.instagram.com/thegenesisbox/">
                  <div key={index} className="photo-container">
                    <img className="photo" src={photoUrl}/>
                  </div>
                </a>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}