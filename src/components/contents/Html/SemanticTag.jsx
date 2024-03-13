import React from "react";

function SemanticTag(){
    return (
        <section className="clear-both w-full">
            <h1 className="h1 m-3">Semantic Tag</h1>
            <ul>
                <li>
                    <h4 className="h4 m-2 mt-5">- 시멘틱 태그란?</h4>
                    <article className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <p>
                            예전 웹페이지(지금도 많이 그렇지만)들은 페이지 내 구역을 나눌때 주로 div 태그를 사용했다.<br/>
                            그러다 보니 구역을 나누거나 스타일을 별도로 적용하거나 조금이라도 복잡하게 구성하게 되면 div 태그 밑에 div 태그 밑에 div 태그 ... 로 html이 구성되고
                            사이트를 유지보수 하다보면 무슨 내용이 들어가는 부분인지 소스를 보면서도 도저히 알 수 없는 html을 보게된다.<br/>
                            사이트 내용이 바뀌거나 디자인이라도 변경되면 해당하는 div 태그를 찾는데 개발시간의 대부분이 소모되었다.<br/>
                            시멘틱 태그를 사용하면 그나마 어떤 내용이 들어가야 하는지 구역을 이해하는데 도움이 되고 내용이 통일성있게 정리되어 시간낭비를 줄일수 있다.<br/>
                            시멘틱 태그는 내용에 따라 의미를 가지는 구역 나누기용 태그라고 보면 될 것 같다.<br/>
                            웹접근성을 개선할 때도 시멘틱 태그로 되어있는 페이지가 훨씬 수월하다.
                        </p>
                    </article>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- 시멘틱 태그를 썼을때와 안썼을때의 비교</h4>
                    <article className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2">
                        <table className="border w-11/12 text-center m-3">
                            <tbody>
                                <tr className="border">
                                    <td colSpan={2} className="border bg-rose-400">&lt;header&gt;</td>
                                </tr>
                                <tr className="border">
                                    <td colSpan={2} className="border bg-indigo-300">&lt;nav&gt;</td>
                                </tr>
                                <tr className="border">
                                    <td className="border w-1/3 bg-fuchsia-400">&lt;aside&gt;</td>
                                    <td className="border bg-emerald-400 p-2">
                                        &lt;main&gt;
                                        <table className={"border w-full bg-blue-400"}>
                                            <tbody>
                                                <tr>
                                                    <td className={"p-2"}>
                                                        &lt;article&gt;
                                                        <table className={"border w-full h-16 bg-amber-500"}>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        &lt;figure&gt;
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className={"border w-full h-16 bg-amber-300 mt-2"}>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        &lt;p&gt;
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td colSpan={2} className="border bg-lime-600">&lt;footer&gt;</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="border w-11/12 text-center m-3">
                            <tbody>
                                <tr className="border">
                                    <td colSpan={2} className="border bg-slate-400">&lt;div&gt;</td>
                                </tr>
                                <tr className="border">
                                    <td colSpan={2} className="border bg-slate-400">&lt;div&gt;</td>
                                </tr>
                                <tr className="border">
                                    <td className="border w-1/3 bg-slate-400">&lt;div&gt;</td>
                                    <td className="border bg-slate-400 p-2">
                                        &lt;div&gt;
                                        <table className={"border w-full bg-slate-400"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-2"}>
                                                    &lt;div&gt;
                                                    <table className={"border w-full h-16 bg-slate-400"}>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                &lt;div&gt;
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <table className={"border w-full h-16 bg-slate-400 mt-2"}>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                &lt;div&gt;
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td colSpan={2} className="border bg-slate-400">&lt;div&gt;</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- 시멘틱 태그 종류</h4>
                    <article className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <figure>
                            <table className="border-0 w-full">
                                <colgroup>
                                    <col className="w-1/3"/>
                                    <col className="w-2/2"/>
                                </colgroup>
                                <tbody>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>header</td>
                                        <td>머릿글</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>footer</td>
                                        <td>바닥글</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>main</td>
                                        <td>메인 내용을 담는 태그로 문서에서 유일해야 함</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>nav</td>
                                        <td>메뉴, 탭, 탐색경로. 보통 사이트 메뉴구조를 정의</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>aside</td>
                                        <td>옆에 위치하는 내용을 담는 태그. 주로 사이드바로 사용</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>article</td>
                                        <td>독립적인 글을 다루는 데 사용하는 태그. 문단 단위</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>figure</td>
                                        <td>일러스트레이션, 다이어그램, 사진, 코드목록 등과 같은 자체 포함 컨텐츠</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>figcaption</td>
                                        <td>fugure 태그에 대한 캡션을 정의</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>section</td>
                                        <td>문서 부분을 의미하는 태그로 주제별 컨텐츠 그룹을 정의. section안에 section을 넣기도 하고 article에 내용을 넣기도 함</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>mark</td>
                                        <td>중요한 단어와 문구를 강조하는데 사용.</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>details</td>
                                        <td>사용자가 보거나 숨길 수 있는 추가 세부 정보를 정의하는 태그. 토글로 보이는 상세내용에 주로 사용</td>
                                    </tr>
                                    <tr className="border-collapse border-b border-slate-500">
                                        <td>summary</td>
                                        <td>details 태그의 첫번째 하위항목으로 details에서 보이는 부분을 담당</td>
                                    </tr>
                                    <tr>
                                        <td>time</td>
                                        <td>날짜 또는 시간정보</td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>
                    </article>
                </li>
            </ul>
        </section>
    );
}

export default SemanticTag;