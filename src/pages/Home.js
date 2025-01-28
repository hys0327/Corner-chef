import React, { useState, useEffect } from 'react';
import ChefDataList from '../data/ChefDataList';
import FoodMenu from '../data/FoodMenu';
import ChefSlider from '../components/common/ChefSlider';
import Menu from '../components/common/ChefSlider';
//
import axios from 'axios';

//
const ITEMS_FAVORITE_COUNT = 4;
const ITEMS_PER_PAGE = 4;

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <main>
      <section className='chef-rank'>
        <h2>방구석을 빛낸 위인들</h2>
        <ChefSlider ChefDataList={ChefDataList} />
      </section>
      <section className='specialty'>
        <h2>추천 메뉴</h2>
        {/* {responseData?.data?.chefs &&
          Object.keys(responseData.data.chefs).map((key, index) => {
            const chef = responseData.data.chefs[key];
            const base64String = chef.img.data;
            console.log('base64String', base64String);
            return <div key={index}>{chef.img?.data && <img></img>}</div>;
          })} */}
        <div className='menu-wrap'>
          <div className='select-wrap'>
            커스텀 선택상자 영역{/* 커스텀 select */}
          </div>
          {/* <div className='container'>
            <div className='item-wrap'>
              <div className='item'>
                <div className='img-frame'>
                  <img src={kimchiSoup} alt='김치찌개' />
                </div>
                <div className='info-wrap'>
                  <div className='text-wrap'>
                    <h4>메뉴 명</h4>
                    <span className='text'>한식 / 김치찌개</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>맵기</h4>
                    <div className='icon-wrap'>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                    </div>
                  </div>
                  <div className='text-wrap'>
                    <h4>조리 시간</h4>
                    <span className='text'>15 ~ 20분</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>예상 비용</h4>
                    <div className='payment'>
                      <span className='icon icon-payment'></span>
                      <span className='text'>5,500원 ~ 7,800원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='img-frame'>
                  <img src={creampasta} alt='크림파스타' />
                </div>
                <div className='info-wrap'>
                  <div className='text-wrap'>
                    <h4>메뉴 명</h4>
                    <span className='text'>양식 / 크림 파스타</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>맵기</h4>
                    <div className='icon-wrap'>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                    </div>
                  </div>
                  <div className='text-wrap'>
                    <h4>조리 시간</h4>
                    <span className='text'>20 ~ 25분</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>예상 비용</h4>
                    <div className='payment'>
                      <span className='icon icon-payment'></span>
                      <span className='text'>3,500원 ~ 5,200원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='img-frame'>
                  <img src={porkrice} alt='돼지국밥' />
                </div>
                <div className='info-wrap'>
                  <div className='text-wrap'>
                    <h4>메뉴 명</h4>
                    <span className='text'>한식 / 돼지국밥</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>맵기</h4>
                    <div className='icon-wrap'>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                    </div>
                  </div>
                  <div className='text-wrap'>
                    <h4>조리 시간</h4>
                    <span className='text'>17 ~ 32분</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>예상 비용</h4>
                    <div className='payment'>
                      <span className='icon icon-payment'></span>
                      <span className='text'>4,200원 ~ 6,700원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='img-frame'>
                  <img src={maratang} alt='마라탕' />
                </div>
                <div className='info-wrap'>
                  <div className='text-wrap'>
                    <h4>메뉴 명</h4>
                    <span className='text'>중식 / 마라탕</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>맵기</h4>
                    <div className='icon-wrap'>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                      <span className='icon icon-spicy'></span>
                    </div>
                  </div>
                  <div className='text-wrap'>
                    <h4>조리 시간</h4>
                    <span className='text'>12 ~ 25분</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>예상 비용</h4>
                    <div className='payment'>
                      <span className='icon icon-payment'></span>
                      <span className='text'>6,200원 ~ 8,300원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container-bottom'>
              <button>
                <span className='text'>더보기</span>
                <span className='icon icon_arrow'></span>
              </button>
            </div>
          </div> */}
          <div className='container'>
            <div className='item-wrap'>
              {FoodMenu.slice(0, ITEMS_FAVORITE_COUNT).map((menu, index) => (
                <div className='item' key={index}>
                  <div className='img-frame'>
                    <img src={menu.image} alt={menu.name} />
                  </div>
                  <div className='info-wrap'>
                    <div className='text-wrap'>
                      <h4>메뉴 명</h4>
                      <span className='text'>
                        {menu.category} / {menu.name}
                      </span>
                    </div>
                    <div className='text-wrap'>
                      <h4>맵기</h4>
                      <div className='icon-wrap'>
                        {Array.from({ length: menu.spiceLevel }, (_, i) => (
                          <span key={i} className='icon icon-spicy'></span>
                        ))}
                      </div>
                    </div>
                    <div className='text-wrap'>
                      <h4>조리 시간</h4>
                      <span className='text'>{menu.cookTime}</span>
                    </div>
                    <div className='text-wrap'>
                      <h4>예상 비용</h4>
                      <span className='payment'>
                        <span className='icon icon-payment'></span>
                        <span className='text'>{menu.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='all-menu'>
        <div className='title-wrap'>
          <h2>전체 메뉴</h2>
          <button>
            <span className='text'>전체 보기</span>
          </button>
        </div>
        <div className='menu-wrap'>
          <div className='item-wrap'>
            <div className='item'></div>
          </div>
        </div>
        <div className='container'>
          <div className='item-wrap'>
            {FoodMenu.slice(0, visibleCount).map((menu, index) => (
              <div className='item' key={index}>
                <div className='img-frame'>
                  <img src={menu.image} alt={menu.name} />
                </div>
                <div className='info-wrap'>
                  <div className='text-wrap'>
                    <h4>메뉴 명</h4>
                    <span className='text'>
                      {menu.category} / {menu.name}
                    </span>
                  </div>
                  <div className='text-wrap'>
                    <h4>맵기</h4>
                    <div className='icon-wrap'>
                      {Array.from({ length: menu.spiceLevel }, (_, i) => (
                        <span key={i} className='icon icon-spicy'></span>
                      ))}
                    </div>
                  </div>
                  <div className='text-wrap'>
                    <h4>조리 시간</h4>
                    <span className='text'>{menu.cookTime}</span>
                  </div>
                  <div className='text-wrap'>
                    <h4>예상 비용</h4>
                    <span className='payment'>
                      <span className='icon icon-payment'></span>
                      <span className='text'>{menu.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleCount < FoodMenu.length && (
            <div className='container-bottom'>
              <button onClick={handleShowMore}>
                <span className='text'>더보기</span>
                <span className='icon icon_arrow'></span>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
