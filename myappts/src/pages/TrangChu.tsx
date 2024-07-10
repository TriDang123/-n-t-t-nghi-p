import React, { useEffect, useState, useRef } from "react";
import banner2 from './images/banner2.webp'
import banner from './images/banner.webp'
import banner1 from './images/banner1.webp'
import a9 from './images/a9.webp'
import a2 from './images/a2.jpeg'
import a11 from './images/a11.jpg'
import a12 from './images/a12.jpeg'
import a1 from './images/a1.jpg'
import a16 from './images/a16.jpeg'
import hinh1 from './images/hinh1.webp'
import title from './images/title.webp'
import hinh2 from './images/hinh2.webp'
import b1 from './images/b1.webp'
import b2 from './images/b2.png'
import c1 from './images/c1.webp'
import c2 from './images/c2.jpeg'
import c3 from './images/c3.webp'
import d1 from './images/d1.jpeg'
import d2 from './images/d2.jpeg'
import d3 from './images/d3.jpg'
import hs4 from './images/hs4.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './TrangChu.css';
import './Responsive.css';
import './HaiSan.css';

import MediaPreviewModal from "./Modal";
import { MediaPreviewModalRef } from "./Modal";


const TrangChu = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate();
    const inputRef1 = useRef<MediaPreviewModalRef>(null);
    const inputRef2 = useRef<MediaPreviewModalRef>(null);
    const inputRef3 = useRef<MediaPreviewModalRef>(null);
    const inputRef4 = useRef<MediaPreviewModalRef>(null);
    const inputRef5 = useRef<MediaPreviewModalRef>(null);
    const inputRef6 = useRef<MediaPreviewModalRef>(null);
    
    const slides = [{
        key: 1,
        value: banner
    }, {
        key: 2,
        value: banner1
    }];
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000);
        console.log(slideIndex)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [slideIndex]);
    const handModal1 = () => {
        inputRef1.current?.setOpen(true)
        inputRef1.current?.setPreviewUrl(a9)
    };
    const handModal2 = () => {
        inputRef2.current?.setOpen(true)
        inputRef2.current?.setPreviewUrl(a2)
    };
    const handModal3 = () => {
        inputRef3.current?.setOpen(true)
        inputRef3.current?.setPreviewUrl(a11)
    };
    const handModal4 = () => {
        inputRef4.current?.setOpen(true)
        inputRef4.current?.setPreviewUrl(a12)
    };
    const handModal5 = () => {
        inputRef5.current?.setOpen(true)
        inputRef5.current?.setPreviewUrl(hs4)
    };
    const handModal6 = () => {
        inputRef6.current?.setOpen(true)
        inputRef6.current?.setPreviewUrl(a16)
    };
    const handleNavigate = (path: string) => {
        navigate(path);
      };
    return (
        <div>
            <div className="containerfull">
                
                <div className="containerfull">
                    <div className="slideshow-container">
                        {slides.map((it, index) => (
                            <div
                                key={it.key}
                                className="mySlides"
                                style={{ opacity: slideIndex === index ? 1 : 0 }}
                            >
                                <img src={it.value} style={{ width: '100%' }} alt={"Banner" + it.key} />
                            </div>
                        ))}
                        
                    </div>
                </div>

                <section className="containerfull">
                    <div className="container3">
                        <div className="containerfull">
                            <div className="box50 mr15">
                                <img src={banner2} alt=""/>
                            </div>
                            <div className="box25 mr15">
                            <img src={a9} style={{ height: '280px' }} alt="" onClick={handModal1} />
                            <MediaPreviewModal ref={inputRef1} title="SALAD RAU CỦ QUẢ" price="69.000 đ" buttonText="Thử ngay" onButtonClick={() => handleNavigate('/haisan')}>
                            <p>Salad với các thành phần chính: mì ống, cà chua bi, rau xanh và một số gia vị. Món ăn mang vẻ đẹp đơn giản, nhẹ nhàng, với màu sắc tươi sáng từ cà chua và rau xanh, tạo cảm giác ngon miệng và hấp dẫn.</p>
                            </MediaPreviewModal>
                        </div>
                        <div className="box25 mr15">
                            <img src={a2} style={{ height: '280px' }} alt="" onClick={handModal2} />
                            <MediaPreviewModal ref={inputRef2} title="SALAD RAU CỦ QUẢ" price="69.000 đ" buttonText="Thử ngay" onButtonClick={() => handleNavigate('/lamsan')}>
                            <p>Salad với các thành phần chính: mì ống, cà chua bi, rau xanh và một số gia vị. Món ăn mang vẻ đẹp đơn giản, nhẹ nhàng, với màu sắc tươi sáng từ cà chua và rau xanh, tạo cảm giác ngon miệng và hấp dẫn.</p>
                            </MediaPreviewModal>
                        </div>
                        
                        <div className="containerfull mr30">
                            <div className="box25 mr15"><img src={a11} style={{ height: '280px' }} alt="" onClick={handModal3} />
                            <MediaPreviewModal ref={inputRef3} title="SALAD RAU CỦ QUẢ" price="69.000 đ" buttonText="Thử ngay" onButtonClick={() => handleNavigate('/nongsan')}>
                            <p>Salad với các thành phần chính: mì ống, cà chua bi, rau xanh và một số gia vị. Món ăn mang vẻ đẹp đơn giản, nhẹ nhàng, với màu sắc tươi sáng từ cà chua và rau xanh, tạo cảm giác ngon miệng và hấp dẫn.</p>
                            </MediaPreviewModal>
                        </div>
                        
                        <div className="box25 mr15"><img src={a12} style={{ height: '280px' }} alt="" onClick={handModal4} />
                            <MediaPreviewModal ref={inputRef4} title="SALAD RAU CỦ QUẢ" price="69.000 đ" buttonText="Thử ngay" onButtonClick={() => handleNavigate('/nuoc')}>
                            <p>Salad với các thành phần chính: mì ống, cà chua bi, rau xanh và một số gia vị. Món ăn mang vẻ đẹp đơn giản, nhẹ nhàng, với màu sắc tươi sáng từ cà chua và rau xanh, tạo cảm giác ngon miệng và hấp dẫn.</p>
                            </MediaPreviewModal>
                        </div>
                        <div className="box25 mr15"><img src={hs4} style={{ height: '280px' }} alt="" onClick={handModal5} />
                            <MediaPreviewModal ref={inputRef5} title="SALAD RAU CỦ QUẢ" price="69.000 đ" buttonText="Thử ngay" onButtonClick={() => handleNavigate('/haisan')}>
                            <p>Salad với các thành phần chính: mì ống, cà chua bi, rau xanh và một số gia vị. Món ăn mang vẻ đẹp đơn giản, nhẹ nhàng, với màu sắc tươi sáng từ cà chua và rau xanh, tạo cảm giác ngon miệng và hấp dẫn.</p>
                            </MediaPreviewModal>
                        </div>
                        <div className="box25 mr15"><img src={a16} style={{ height: '280px' }} alt="" onClick={handModal6} />
                            <MediaPreviewModal ref={inputRef6} title="SALAD RAU CỦ QUẢ" price="69.000 đ" buttonText="Thử ngay" onButtonClick={() => handleNavigate('/sansan')}>
                            <p>Salad với các thành phần chính: mì ống, cà chua bi, rau xanh và một số gia vị. Món ăn mang vẻ đẹp đơn giản, nhẹ nhàng, với màu sắc tươi sáng từ cà chua và rau xanh, tạo cảm giác ngon miệng và hấp dẫn.</p>
                            </MediaPreviewModal>
                        </div>

                        </div>
                    </div>
                    </div>
                </section>

                <section className="containerfull bg1 padd50">
                    <div className="container">
                        <div className="boxleft mr5pt">
                            <img src={hinh1} alt="" />
                        </div>
                        <div className="boxright padd50">
                            <img src={title} alt="" />
                            <p>
                                Bộ sưu tập “Cầu Toàn Kèo Thơm” không chỉ là thức uống chăm da giữ dáng, mà còn là “vía may mắn” để năm mới thêm trọn vẹn. Với nền trà tốt cho sức khoẻ cùng hương vị mãng cầu và thơm giúp giải ngấy, topping đầy đặn, “Cầu Toàn Kèo Thơm” mang ý nghĩa sung
                                túc cho năm 2023. Chiếc ly mèo đáng yêu còn như một lời chúc may mắn Nhà gửi đến bạn.
                            </p>
                            <button>Thử ngay</button>
                        </div>
                    </div>
                </section>
                <section className="containerfull padd50">
                    <div className="boxleft_bgw mr5pt">
                        <div className="boxleft_bgw_left">
                            <h2>TCH The Grand View</h2>
                            <p>
                                Bộ sưu tập “Cầu Toàn Kèo Thơm” không chỉ là thức uống chăm da giữ dáng, mà còn là “vía may mắn” để năm mới thêm trọn vẹn. Với nền trà tốt cho sức khoẻ cùng hương vị mãng cầu và thơm giúp giải ngấy, topping đầy đặn, “Cầu Toàn Kèo Thơm” mang ý nghĩa sung
                                túc cho năm 2023.
                            </p>
                            <button>Thử ngay</button>
                        </div>
                    </div>
                    <div className="boxright_bgw">
                        <img src={banner2} alt="" />
                    </div>

                </section>
                <section className="containerfull bg1 padd50">
                    <div className="container">
                        <h1>Chuyện Nhà</h1>
                        <div className="row">
                            <h2>Coffeeholic</h2>
                        </div>
                        <div className="row">
                            <div className="boxnews mr2pt">
                                <img src={hinh2} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ</a></p>
                                <p>Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...</p>
                            </div>
                            <div className="boxnews mr2pt">
                                <img src={b1} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">CHỈ CHỌN CÀ PHÊ MỖI SÁNG NHƯNG CŨN...</a></p>
                                <p>Thực chất, bạn không nhất thiết phải làm gì to tát để tạo nên một ngày rực rỡ. Chỉ cần bắt đầu từ những việc nhỏ nhặt nhất, khi bạn...</p>
                            </div>
                            <div className="boxnews mr3pt">
                                <img src={b2} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ...</a></p>
                                <p>Mới đây, các "tín đồ" cà phê đang bàn tán xôn xao về SIGNATURE - Biểu tượng văn hóa cà phê của The Coffee House đã quay trở lại.Một lời...</p>
                            </div>
                        </div>
                        <div className="row">
                            <h2>Foodholic</h2>
                        </div>
                        <div className="row">
                            <div className="boxnews mr2pt">
                                <img src={c1} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">LỊCH SỬ HÌNH THÀNH MÓN KEM LẠNH</a></p>
                                <p>Kem lạnh là một món ăn lạnh phổ biến trên thế giới. Nguồn gốc của món tráng miệng mát lạnh này đã có từ thời Trung cổ, nó thường được sử dụng...</p>
                            </div>
                            <div className="boxnews mr2pt">
                                <img src={c2} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">TRẢI NGHIỆM HƯƠNG VỊ Ý MARGHERITA PIZZA</a></p>
                                <p>Pizza Margherita là một loại pizza đặc trưng đến từ vùng Napoli, được làm bằng cà chua San Marzano, phô mai mozzarella, húng quế tươi, muối...</p>
                            </div>
                            <div className="boxnews mr3pt">
                                <img src={c3} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">TRUNG THU NÀY, SAO BẠN KHÔNG TỰ CH...</a></p>
                                <p>Năm 2024 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè...</p>
                            </div>
                        </div>
                        <div className="row">
                            <h2>Blog</h2>
                        </div>
                        <div className="row">
                            <div className="boxnews mr2pt">
                                <img src={d1} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">FOODIO PHẢN HỒI VỀ SỰ CỐ VỠ...</a></p>
                                <p>Vào tối ngày 20 tháng 04 năm 2024, Hà Nội có xuất hiện giông lốc kèm mưa đá, gây vỡ kính tại toà nhà Việt Tower - 01 Thái Hà,...</p>
                            </div>
                            <div className="boxnews mr2pt">
                                <img src={d2} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">“XUÂN LÊN ĐI!”: LỜI CHÚC Ý NGHĨA CHO...</a></p>
                                <p>Mùa xuân đã rộn ràng khắp nơi, mang theo nguồn sống dào dạt cùng mọi ước nguyện may mắn. Bạn cầu mong gì cho mình và người thân trong những...</p>
                            </div>
                            <div className="boxnews mr3pt">
                                <img className="blog" src={d3} alt="" />
                                <p>11/03/2024</p>
                                <p><a href="#">LY CÀ PHÊ SỮA ĐÁ VIỆT NAM XUẤT HIỆN Ở...</a></p>
                                <p>Ấn tượng và tự hào, hình ảnh Việt Nam tiếp tục được lên sóng tại Quảng trường Thời Đại (New York) với ly cà phê sữa đá quen thuộc, đi...</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="contact-section">
                    <div className="row">
                        <div className="col span-1-of-3">
                            <ul className="information">
                                <li><i className="fas fa-map-marker-alt small-icon"></i>Address: 22A, SelfTaught street, Ha Noi</li>
                                <li><i className="fas fa-envelope small-icon"></i>Email: selftaughtteam@edu.com</li>
                                <li><i className="fas fa-phone small-icon"></i>SĐT: (+084 )099-923-232-320</li>
                            </ul>
                            <ul className="social-icons">
                                <li><i className="fab fa-facebook"></i></li>
                                <li><i className="fab fa-twitter-square"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-google-plus-square"></i></li>
                            </ul>
                        </div>
                        <div className="col span-2-of-3">
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default TrangChu;