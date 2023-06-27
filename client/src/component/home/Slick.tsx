import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
// import './index.css'
import plusIcon from '../../assets/Home/plusIcon.svg'

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// eslint-disable-next-line react-refresh/only-export-components
function SampleNextArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "99999px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight:"30px"
      }}
      className={className}
      onClick={onClick}
    >
      <GrNext style={{ ...style, fontSize: "24px", }} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function SamplePrevArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "99999px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft:"30px",
        zIndex:20,
        
      }}
      className={className}
      onClick={onClick}
    >
      <GrPrevious style={{ ...style, fontSize: "24px" }} />
    </div>
  );
}

export default class Slick extends Component {
  state = {
    isFirstSlide: true, 
  };

  afterChangeHandler = (currentSlide: number) => {
    this.setState({ isFirstSlide: currentSlide === 0 });
  };


  render() {
    const { isFirstSlide } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: isFirstSlide ? undefined  : <SamplePrevArrow />,
      centerMode: true,
      afterChange: this.afterChangeHandler,
    };
    return (
      <div className="mt-4 ml-3">
        <Slider {...settings}>
          <div className="">
            <div className="w-[128px] h-[200px] rounded-xl overflow-hidden flex items-center justify-center ml-6 relative">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src="https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg"
              />
              <div className="absolute w-10 h-10 border-4 border-blue-600 top-2 left-2 rounded-full overflow-hidden flex items-center justify-center">
                <img className="object-cover" src="https://kenh14cdn.com/2020/6/10/de05583c2e86b6d550cd7450a3c9d9d5-15917629640381500726674.jpg"/>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[128px] h-[200px] rounded-xl overflow-hidden flex items-center justify-center ml-6 relative">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src="https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg"
              />
              <div className="absolute w-10 h-10 border-4 border-blue-600 top-2 left-2 rounded-full overflow-hidden flex items-center justify-center">
                <img className="object-cover" src="https://kenh14cdn.com/2020/6/10/de05583c2e86b6d550cd7450a3c9d9d5-15917629640381500726674.jpg"/>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[128px] h-[200px] rounded-xl overflow-hidden flex items-center justify-center ml-6 relative">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src="https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg"
              />
              <div className="absolute w-10 h-10 border-4 border-blue-600 top-2 left-2 rounded-full overflow-hidden flex items-center justify-center">
                <img className="object-cover" src="https://kenh14cdn.com/2020/6/10/de05583c2e86b6d550cd7450a3c9d9d5-15917629640381500726674.jpg"/>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[128px] h-[200px] rounded-xl overflow-hidden flex items-center justify-center ml-6 relative">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src="https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg"
              />
              <div className="absolute w-10 h-10 border-4 border-blue-600 top-2 left-2 rounded-full overflow-hidden flex items-center justify-center">
                <img className="object-cover" src="https://kenh14cdn.com/2020/6/10/de05583c2e86b6d550cd7450a3c9d9d5-15917629640381500726674.jpg"/>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[128px] h-[200px] rounded-xl overflow-hidden flex items-center justify-center ml-6 relative">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src="https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg"
              />
              <div className="absolute w-10 h-10 border-4 border-blue-600 top-2 left-2 rounded-full overflow-hidden flex items-center justify-center">
                <img className="object-cover" src="https://kenh14cdn.com/2020/6/10/de05583c2e86b6d550cd7450a3c9d9d5-15917629640381500726674.jpg"/>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[128px] h-[200px] rounded-xl overflow-hidden flex flex-col justify-between items-center ml-6 relative border border-gray-300 cursor-pointer">
              <img
                className="object-cover w-full basis-[80%] cursor-pointer"
                src="https://img.meta.com.vn/Data/image/2021/10/12/hinh-anh-lisa-blackpink-2.jpg"
              />
              <div className="absolute bottom-0 border-4 border-white -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[hsl(214,89%,52%)] flex items-center justify-center"><img src={plusIcon}/></div>
              <div className="text-center w-full flex-1 flex justify-center items-end text-xs mb-1 font-medium ">Tạo tin</div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
