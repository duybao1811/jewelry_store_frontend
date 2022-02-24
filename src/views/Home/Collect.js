import React from 'react'
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
export default function Collect() {
    const collectList = [
        {
            image: '/images/home/collect-1.jpg',
            link: '/',
        },
        {
            image: '/images/home/collect-2.jpg',
            link: '/',
        },
        {
            image: '/images/home/collect-3.jpg',
            link: '/',
        },
    ]
    return (
        <div className="w-full bg-black-2 py-20">
            <Container>
                {
                    collectList.map((collect, index) => {
                        return (

                            <div key={index} className="mr-10 last:mr-0 group">
                                <Link to={`${collect.link}`}>
                                    <img src={`${collect.image}`} alt="collect" className="h-[250px] group-hover:scale-105 ase-in-out transition-transform duration-500" />
                                </Link>
                            </div>
                        );
                    })
                }
            </Container>
        </div>
    )
}
