import React from 'react'
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
export default function Banner() {
    return (
        <div className="w-full h-[500px] bg-[url('/public/images/home/model1.png')] bg-cover bg-center">
            <Container className="h-full">
                <div className="w-1/2">
                    <div className="mb-8">
                        <h1 className="text-yellow-1 opacity-80 text-lg font-medium">
                            MONA STORE
                        </h1>
                        <h2 className="text-5xl font-medium opacity-90 text-white uppercase">
                            Thiết kế từ tình yêu
                        </h2>
                        <div className="text-white text-md text-justify opacity-80 mt-3">
                            Trang sức cao cấp MONA tự hào thương hiệu Quốc gia Việt Nam. Với sự đa dạng về chủng loại, độc đáo về kiểu dáng, dẫn đầu về xu hướng đã đang và sẽ chiếm được sự tin tưởng và yêu mến của khách hàng
                        </div>
                    </div>

                    <Link to="/asd" className="hover:border-white hover:text-white hover:bg-yellow-1 transition-all duration-300 ease-in-out px-4 py-3 rounded opacity-80 font-medium uppercase text-yellow-1 border border-dashed border-yellow-1">
                        Mua ngay
                    </Link>
                </div>
            </Container>
        </div>
    )
}
