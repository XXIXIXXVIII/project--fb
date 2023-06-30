import "../../index.css"

export default function IconInput({ handleSetUrl}:{handleSetUrl: (url: string) => void}) {
const iconFace = [
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/t5f/1.5/30/1f600.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},
  { urlIcon:'https://static.xx.fbcdn.net/images/emoji.php/v9/te2/1.5/30/1f603.png'},

]

const handlePickIcon = (url:string)=>{
  handleSetUrl(url)
}

  return (
    <div className="iconComponent bg-white rounded-md p-2 w-[320px] h-[320px] overflow-y-scroll ">
      <div className="text-[13px] font-semibold text-[#65676B] my-2">Mặt cười và hình người</div>
      <div className="grid grid-cols-8 ">
        {iconFace.map((item,index)=><div key={index} onClick={()=>handlePickIcon(item.urlIcon)} className="w-9 h-9 overflow-hidden rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center">
          <img className="w-[30px] h-[30px]" src={item.urlIcon}/>
        </div>)}
      </div>

      <div className="text-[13px] font-semibold text-[#65676B] my-2">Động vật & thiên nhiên</div>
      <div className="grid grid-cols-8 ">
        {iconFace.map((item,index)=><div key={index} className="w-9 h-9 overflow-hidden rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center">
          <img className="w-[30px] h-[30px]" src={item.urlIcon}/>
        </div>)}
      </div>
    </div>
  )
}
