import {Link} from 'react-router-dom'

export default function Footer() {
  const language:{id:number, lang:string}[] = [
    { id: 1, lang: "Tiếng Việt" },
    { id: 2, lang: "English (UK)" },
    { id: 3, lang: "中文(台灣)" },
    { id: 4, lang: "한국어" },
    { id: 5, lang: "日本語" },
    { id: 6, lang: "Français (France)" },
    { id: 7, lang: "ภาษาไทย" },
    { id: 8, lang: "Español" },
    { id: 9, lang: "Português (Brasil)" },
    { id: 10, lang: "Deutsch" },
    { id: 11, lang: "Italiano" },
  ];

  const navFooter: {id:number, content:string, link?:string}[]  = [
    {id:1, content:'Đăng ký', link:"/login"},
    {id:2, content:'Đăng nhập', link:"/signup"},
    {id:3, content:'Messenger'},
    {id:4, content:'Facebook Lite'},
    {id:5, content:'Watch'},
    {id:6, content:'Địa điểm'},
    {id:7, content:'Trò chơi'},
    {id:8, content:'Marketplace'},
    {id:9, content:'Meta Pay'},
    {id:10, content:'Cửa hàng trên Meta'},
    {id:11, content:'Meta Quest'},
    {id:12, content:'Instagram'},
    {id:13, content:'Chiến dịch gây quỹ'},
    {id:14, content:'Dịch vụ'},
    {id:15, content:'Trung tâm thông tin bỏ phiếu'},
    {id:16, content:'Chính sách quyền riêng tư'},
    {id:17, content:'Trung tâm quyền riêng tư'},
    {id:18, content:'Giới thiệu'},
    {id:19, content:'Tạo quảng cáo'},
    {id:20, content:'Tạo Trang'},
    {id:21, content:'Nhà phát triển'},
    {id:22, content:'Tuyển dụng'},
    {id:23, content:'Cookie'},
    {id:24, content:'Lựa chọn quảng cáo'},
    {id:25, content:'Điều khoản'},
    {id:26, content:'Trợ giúp'},
    {id:27, content:'Tải thông tin liên hệ lên & đối tượng không phải người dùng'},
  ]

  return <div className="w-[1000px] mx-auto pt-5">
    <div className="flex text-[#737373] text-xs gap-[10px] pb-2 border-b border-gray-300">
      {language.map(lang=><div key={lang.id} className="cursor-pointer hover:underline ">{lang.lang}</div>)}
    </div>
    <div className="flex flex-wrap -ml-5 mt-2  text-[#737373] text-xs pb-2 wrap">
      {navFooter.map(item=><Link to={`${item.link}`} className="whitespace-nowrap ml-5 cursor-pointer hover:underline leading-5" key={item.id}>{item.content}</Link>)}
    </div>
    <div className="text-[#737373] text-xs py-5">Meta © 2023</div>
  </div>;
}
