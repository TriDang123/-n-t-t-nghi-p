import React, { useEffect, useState, useRef } from "react";
import ns1 from './images/ns1.jpeg'
import ns4 from './images/ns4.jpeg'
import ns3 from './images/ns3.jpeg'
import ns1w from './images/ns1.webp'
import ns5 from './images/ns5.webp'
import ns6 from './images/ns6.webp'
import ns2 from './images/ns2.jpeg'
import ns8 from './images/ns8.jpeg'
import ns10 from './images/ns10.webp' 


// import './TrangChu.css';
const NongSan = () => {
    return (
        <div>
            
            <section className="containerfull bg1 padd50">
                <div className="container">
                    <h1>Nông sản tươi sống</h1>
                    <div className="row">
                        <h2>SeaFood</h2>
                    </div>
                    <div className="row">
                        <div className="boxnews mr2pt">
                            <img src={ns1} style={{ height: "350px" }} alt="" />
                            <p className="p1">Cá hồi vượt đại dương</p>
                            <div className="price_product_item">116.000 đ</div>
                            <p className="p2">Cá hồi có lớp vỏ giòn và bên trong mềm, được trang trí với rau xanh, cà chua bi đỏ và một lát bơ. Món ăn được chế biến với sự tinh tế và tỉ mỉ...</p>
                        </div>
                        <div className="boxnews mr2pt">
                            <img src={ns4} style={{ height: "350px" }}  alt="" />
                            <p className="p1">Cua Nấu Chín Trên Palte Gốm Trắng</p>
                            <div className="price_product_item">116.000 đ</div>
                            <p>Cua hoàng đế nổi bật với sắc đỏ rực rỡ. Nước sốt màu nâu đậm là điểm nhấn hoàn hảo, tạo ra một sự kết hợp hài hòa giữa hương vị và thị giác...</p>
                        </div>
                        <div className="boxnews mr2pt">
                            <img src={ns3} style={{ height: "350px" }} alt="" />
                            <p className="p1">Bánh tôm chiên bột phủ sốt</p>
                            <div className="price_product_item">116.000 đ</div>
                            <p>Bánh tôm được bày trí đẹp mắt. Những lát cam tươi sáng, điểm xuyết những chấm đỏ của trứng cá, càng làm tăng thêm sự tinh tế cho món ăn...</p>
                        </div>
                        <div className="row">
                            <h2>Coffeeholic</h2>
                        </div>
                        <div className="row">
                            <div className="boxnews mr2pt">
                                <img src={ns1w} style={{ height: "350px" }} alt="" />
                                <p className="p1">Cá hồi áp chảo với chanh</p>
                                <div className="price_product_item">116.000 đ</div>
                                <p>Miếng cá hồi được nướng vàng, tỏa ra mùi thơm phức, bên cạnh là một lát chanh vàng tươi, tạo nên một bức tranh đầy nghệ thuật của ẩm thực...</p>
                            </div>
                            <div className="boxnews mr2pt">
                                <img src={ns5} style={{ height: "350px" }} alt="" />
                                <p className="p1">Tôm càng xào tô</p>
                                <div className="price_product_item">116.000 đ</div>
                                <p>Tôm càng được biết đến với hương vị đậm đà và giá trị dinh dưỡng cao. Chúng được bày biện trên một chiếc bát kim loại đơn giản, tạo nên một bức...</p>
                            </div>
                            <div className="boxnews">
                                <img src={ns6} style={{ height: "350px" }} alt="" />
                                <p className="p1">Cá chép hóa rồng </p>
                                <div className="price_product_item">116.000 đ</div>
                                <p>Cá được chiên giòn, với lớp vỏ vàng nâu đẹp mắt. Khoai tây chiên giòn, vàng rộm, được xếp xung quanh cá. Salad tươi mát, với các lát hành tây...</p>
                            </div>
                        </div>
                        <div className="row">
                            <h2>Coffeeholic</h2>
                        </div>
                        <div className="row">
                            <div className="boxnews mr2pt">
                                <img src={ns2} alt="" />
                                <p className="p1">Escargots de bourgogne </p>
                                <div className="price_product_item">116.000 đ</div>
                                <p>Ốc sên nướng bơ tỏi và rau xanh, kèm theo một chút hương vị thơm ngon từ rượu vang trắng tinh tế. Với hương vị đậm đà của bơ tỏi và ốc sên thơm ngon...</p>
                            </div>
                            <div className="boxnews mr2pt">
                                <img src={ns8} alt="" />
                                <p className="p1">Hàu sống ăn kèm chanh tươi</p>
                                <div className="price_product_item">116.000 đ</div>
                                <p>Hàu tươi sống được sắp xếp cẩn thận, nhìn như những viên ngọc biển giữa dòng nước trong xanh. Bên cạnh đó, một chén nước chấm trong suốt...</p>
                            </div>
                            <div className="boxnews">
                                <img src={ns10} alt="" />
                                <p className="p1">Lẩu hải sản tươi mát</p>
                                <div className="price_product_item">116.000 đ</div>
                                <p>Lẩu hải sản nổi bật với sự hòa quện đầy màu sắc của cua, tôm, sò điệp và một hỗn hợp các loại cá tươi ngon. Mùi thơm của hải sản hòa quyện với hương...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="containerfull padd50">

            </section>
        </div>
    )
}
export default NongSan;