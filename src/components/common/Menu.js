import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const Menu = ({ ChefDataList }) => {
  //   console.log('셰프데이터', ChefDataList);

  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4); // 기본값 4
  // settings 객체를 상태값으로 설정하고, 모바일 규격에따라 변경
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 초기값
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const slider = sliderRef.current.innerSlider;

        // 현재 breakpoint와 slidesToShow 값 확인
        const currentBreakpoint = slider.state.breakpoint || 2000;
        const responsiveSettings = slider.props.responsive || [];

        console.log('현재 규격', currentBreakpoint);
        console.log('반응형 설정 확인', responsiveSettings);

        const matchedSetting = responsiveSettings.find(
          (setting) => currentBreakpoint <= setting.breakpoint
        );
        console.log('ㅇㅇ', matchedSetting);

        const newSlidesToShow =
          matchedSetting?.settings.slidesToShow || slider.props.slidesToShow;

        console.log('newSlidesToShow', newSlidesToShow);

        setSlidesToShow(newSlidesToShow); // 상태 업데이트
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: newSlidesToShow, // 상태 업데이트
        }));
      }
    };

    // 초기 설정
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {ChefDataList.map((data, index) => (
        <div
          key={index}
          className='item'
          style={{ width: `${100 / slidesToShow}%` }}
        >
          <div className='left'>
            <span className='img img-chef001'></span>
            <div className='l-btm'>
              <h3 className='name'>{data.chef_name.en}</h3>
              <div className='text-wrap'>
                <span className='text'>레시피</span>
                <span className='text'>:</span>
                <span className='text'>한식</span>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='chef-information'>
              <div className='text-wrap'>
                <h4 className='follower'>팔로워</h4>
                <span className='counts'>143</span>
              </div>
              <div className='text-wrap'>
                <h4 className='recipe'>등록한 레시피</h4>
                <span className='counts'>342</span>
              </div>
              <div className='text-wrap'>
                <h4 className='favorite'>좋아요</h4>
                <span className='counts'>1,657</span>
              </div>
              <div className='text-wrap'>
                <h4 className='view'>조회</h4>
                <span className='counts'>5,857</span>
              </div>
            </div>
            <div className='r-buttons'>
              <button className='active'>
                <span className='text'>Follow</span>
              </button>
              <button>
                <span className='text'>Visit</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Menu;
