import React from 'react'
import Header from '../../components/headerconteact/header'
import Homemenu from '../../components/menuhome/homemenu'
import Cateproduct from '../../components/Sanpham/cateproduct'
import Footer from '../../pages/footer/footer'

import "./baiviet.css"
export default function Baiviethome() {
    return (
        <div>
            <Header/>
            <Homemenu/>
            <div className="container-bv">
                <div className="container">
                    <div className="baiviet-home">
                        <div className="baiviet-body">
                            <h1 className="title">Giảm giá sock khi bạn ghé thăm trang web của chúng tôi</h1>
                            <p className="metatitle">Qua dịp Shopee 10.10 bạn và mình lại đến với dịp Shopee 11.11 
                            – Một trong số những đợt sale lớn nhất trong mùa mua sắm cuối năm. Vậy bạn đã biết đợt 
                            Siêu Sale Shopee 11.11 tới đây có gì chưa? Mình tin chắc là chưa đúng không? Tiết lộ nhỏ nha
                            , đợt này sale khủng lắm đấy! Nào là voucher hoàn xu có tổng giá trị lên đến 11 tỷ. Rồi thì 
                            voucher 1.111K – 111K – 11K cho đến mã FreeShip đơn 0Đ dùng thoải mái. Cùng với đó là vô vàn 
                            deals 0Đ, deals 1K, deals 11K cho bạn thỏa sức mua sắm luôn.
                            Cụ thể đợt Shopee 11.11 này có những mã giảm giá nào? Những chương trình khuyến mãi và quà 
                            tặng nào? Hãy cùng mình theo dõi hết bài viết dưới đây để tìm hiểu chi tiết nha!</p>
                            <div className="meta-img"><img className="img1" src="./img/baiviet1.png"></img></div>
                            <h2>Lịch khuyến mãi Shopee 11.11</h2>
                            <p>Chương trình khuyến mãi Shopee 11.11 năm nay sẽ kéo dài trong gần một tháng lận luôn đó bạn.
                             Bắt đầu từ ngày 21/10 và kết thúc vào ngày 15/11.
                            Trong đó, ngày có nhiều ưu đãi bùng nổ nhất là ngày 11.11. Tuy nhiên những ngày khác cũng rất
                             nhiều khuyến mãi mà bạn không nên bỏ qua. Mỗi ngày trong giai đoạn từ 21/10 đến 15/11 đều sẽ 
                             có một chủ đề riêng.</p>
                            <p>Sau đây là chủ đề theo từng ngày mà mình tổng hợp được:</p>
                            <ul>
                            <li>21.10: Siêu sale hàng hiệu</li>
                            <li>22.10: Siêu sale thời trang</li>
                            <li>23.10: Siêu sale hoàn xu</li>
                            <li>24.10: Siêu sale hàng quốc tế</li>
                            <li> Từ 25.10 đến 15.11: Mình sẽ tiếp tục cập nhật ngay khi</li>
                            </ul>
                            <p>chương trình được Shopee tung ra. Chính vì thế bạn nhớ theo dõi trang này nha!</p>
                            <div className="meta-img"><img className="img1" src="./img/Shopee-11.11.jpg"></img></div>
                            <h2>Săn siêu voucher giảm 50%</h2>
                            <p>Ngoài mã FreeShip cho đơn từ 0Đ, bạn còn có thể săn và sử dụng nhiều mã miễn phí vận chuyển khác đến từ Shopee. Cụ thể gồm:</p>
                            <ul>
                            <li>Mã FreeShip khi thanh toán qua ví ShopeePay, áp dụng cho đơn từ 50k. Mã này bạn sẽ được Shopee tự động cho vào Kho voucher nha.</li>
                            <li>Bạn có thể dùng xu để đổi lấy mã FreeShip 40K cho đơn từ 50K chỉ với 4.000 Shopee Xu. Cụ thể chương trình này ra sao bạn có thể tham khảo chi tiết tại link này</li>
                            <li>Thanh toán bằng thẻ quốc tế TP Bank sẽ được giảm 15K phí ship cho đơn từ 99K. Link lấy lưu voucher</li>
                            <li>Mã Freeship Xtra: Giảm 15K cho đơn từ 50K, giảm 70K cho đơn từ 300K. Mã FreeShip Xtra sẽ được Shopee tự động cho vào Kho voucher của bạn nha. Bạn chỉ việc dùng lúc thanh toán thôi.</li>
                            </ul>
                            <p>Mỗi ngày trong đợt khuyến mãi Shopee 11.11 này đều có rất nhiều voucher giảm giá HOT được tung ra. Trong đó nổi bật nhất là voucher hoàn xu, voucher giảm 50%, voucher 11K, 111K hay thậm chí là voucher 1.111K trong ngày 11.11.
                            Khung giờ tung ra voucher thì thường là 0H – 9H – 12H 15H – 18H – 21H. Cụ thể các voucher đó là gì và điều kiện áp dụng ra sao bạn hãy theo dõi các kênh mạng xã hội của mình để được tiết lộ trước nhé.</p>
                        </div>
                    </div>
                    <Cateproduct/>
                    
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
