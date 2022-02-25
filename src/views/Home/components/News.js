import React from 'react'

import Container from '../../../components/Container/Container';
export default function News() {

  const newsList = [
    {
      image: '/images/home/news-card-1.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-2.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-3.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
  ];
  return (
    <div className="w-full bg-black py-20">
      <div className="mb-10">
        <h1 className="uppercase text-4xl text-white text-center font-medium">Tin tức</h1>
      </div>
      <Container>
        <div className="flex items-center">
          {
            newsList.map((news, index) => {
              return (
                <div className="flex flex-col mr-10 last:mr-0 group" key={index}>
                  <img src={`${news.image}`} alt="images" className="object-contain h-[250px] group-hover:scale-105 ease-in-out transition-transform duration-500" />
                    <h1 className="text-white-1 text-2xl font-medium">
                      {news.title}
                    </h1>
                    <p className="text-yellow-1 text-sm mb-5 font-medium opacity-80">{news.time}</p>
                    <p className="text-white h-[48px] text-justify text-ellipsis overflow-hidden text-sm-md mb-5">{news.content}</p>
                    <div className="hover:bg-yellow-1 transition-all duration-200 ease-in-out cursor-pointer border-2 rounded-md border-dashed text-white-1 w-[150px] py-1 font-medium text-center text-xl uppercase">
                      Đọc thêm
                    </div>               
                </div>
              )
            })
          }
        </div>
      </Container>
    </div>
  )
}
