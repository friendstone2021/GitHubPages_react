import React, {useCallback, useEffect, useRef} from "react";
import img_1 from "../../../images/GoogleMap/GoogleMap_1.png";
import img_2 from "../../../images/GoogleMap/GoogleMap_2.png";
import img_3 from "../../../images/GoogleMap/GoogleMap_3.png";
import img_4 from "../../../images/GoogleMap/GoogleMap_4.png";
import img_5 from "../../../images/GoogleMap/GoogleMap_5.png";
import img_6 from "../../../images/GoogleMap/GoogleMap_6.png";
import img_7 from "../../../images/GoogleMap/GoogleMap_7.png";
import img_8 from "../../../images/GoogleMap/GoogleMap_8.png";

function GoogleMap(){
    return (
        <section className="clear-both w-full">
            <h1 className="h1 m-3">구글맵 API</h1>
            <ul>
                <li>
                    <h4 className="h4 m-2 mt-5">- 구글맵 API 시작하기</h4>
                    <article>
                        <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                            내가 만든 웹페이지에 구글맵을 넣어보자.<br/>
                            먼저 구글맵API 사이트에 들어간다. <a className={"underline text-blue-600 hover:text-rose-900 visited:text-rose-700"} href={"https://developers.google.com/maps?hl=ko"} target={"_blank"}>https://developers.google.com/maps?hl=ko</a><br/>
                            SDK 및 API 부분을 보면 기능별로 플랫폼별로 선택할 수 있다.<br/>
                            움직이는 지도를 javascript 기반으로 써보고 싶으니 지도 SDK의 JS 버튼을 클릭한다.<br/>
                        </p>
                        <figure className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full grid place-items-center">
                            <img className="w-9/12" src={img_1}/><br/>
                        </figure>
                        <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full mt-10">
                            가이드, 참조, 샘플, 지원 카테고리에 여러 정보들이 있다.<br/>
                            천천히 읽어보고 할 수도 있겠지만 성미에 맞지 않으니 일단 시작하기를 무작정 눌러본다.
                        </p>
                        <figure className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full grid place-items-center">
                            <img className="w-9/12" src={img_2}/><br/>
                        </figure>
                        <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full mt-10">
                            결제계정을 등록하라고 한다. 구글맵API는 유료서비스다...<br/>
                            물론 무료 서비스 구간이 있다. 본격적인 서비스가 아닌 테스트용으로는 무료 구간에서 충분한 듯 하지만<br/>
                            블로그에 올려놓은걸 누군가 악의적으로 다수의 호출을 하게되면 요금폭탄을 맞게 될 수도 있으니<br/>
                            테스트에 사용할 서비스 외에 나머지는 제한을 걸어놓도록 하자<br/>
                        </p>
                        <figure className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full grid place-items-center">
                            <img className="w-9/12" src={img_3}/><br/>
                        </figure>
                        <figure className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full grid place-items-center grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2">
                            <div className="w-11/12 mt-5">
                                <p className="text-2xl font-bold">①</p>
                                <img className="w-auto" src={img_4}/>
                            </div>
                            <div className="w-11/12 mt-5">
                                <p className="text-2xl font-bold">②</p>
                                <img className="w-auto" src={img_5}/>
                            </div>
                            <div className="w-11/12 mt-5">
                                <p className="text-2xl font-bold">③</p>
                                <img className="w-auto" src={img_6}/>
                            </div>
                            <div className="w-11/12 mt-5">
                                <p className="text-2xl font-bold">④</p>
                                <img className="w-auto" src={img_7}/>
                            </div>
                        </figure>
                        <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full mt-10">
                            결제계정을 등록하고 서비스 제한도 걸어놓고 나면 APIKey를 발급받을 수 있고 활용 가이드도 볼 수 있다.
                            이런 소스를 붙여넣으라고 가이드 하는데 react에서는 이런 html이 동작하지 않는다.<br/>
                            <br/>
                            &lt;script async src="https://maps.googleapis.com/maps/api/js?key=발급받은key값&callback=console.debug&libraries=maps,marker&v=beta"&gt;&lt;/script&gt;
                            &lt;gmp-map center="36.49924850463867,127.32918548583984" zoom="14" map-id="DEMO_MAP_ID"&gt;
                            &lt;gmp-advanced-marker position="36.49924850463867,127.32918548583984" title="My location"&gt;&lt;/gmp-advanced-marker&gt;
                            &lt;/gmp-map&gt;
                        </p>
                    </article>
                    <h4 className="h4 m-2 mt-5">- React에 구글맵 붙이기</h4>
                    <article>
                        <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                            1. 구글맵 모듈을 설치<br/>
                            <br/>
                            npm install @googlemaps/react-wrapper<br/>
                            <br/>
                            2. index.html에 google map api 설정 추가<br/>
                            (단, 깃허브에 배포는 하지 말것, 테스트용 API Key를 공개 레파지토리에 올리면 경고메일이 온다.)
                            <br/>
                            &lt;script async src="https://maps.googleapis.com/maps/api/js?key=발급받은key값&callback=initMap"&gt;&lt;/script&gt;<br/>
                            <br/>
                            3. 리액트 Hook 설정<br/>
                            <br/>
                            const mapRef = useRef(null);<br/>
                            <br/>
                            const initMap = useCallback(() =&gt; &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;new window.google.maps.Map(mapRef.current,&#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        center: &#123; lat: 37.55140, lng: 126.9754726 &#125;,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        zoom: 8,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br/>
                            &#125;, [mapRef]);<br/>
                            <br/>
                            useEffect(() =&gt; &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;    initMap();<br/>
                            &#125;, [initMap]);<br/>
                            <br/>
                            4. 지도 표시할 공간 설정<br/>
                            <br/>
                            &lt;div<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;className=&#123;"map"&#125;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;style=&#123;&#123;width:"100%", height:"500px"&#125;&#125;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;ref=&#123;mapRef&#125;<br/>
                            &gt;&lt;/div&gt;<br/>
                        </p>
                        <figure className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full grid place-items-center">
                            <img className="w-9/12" src={img_8}/><br/>
                        </figure>
                    </article>
                </li>
            </ul>
        </section>
    );
}

export default GoogleMap;