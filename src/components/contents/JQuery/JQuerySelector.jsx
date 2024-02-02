import React from "react";
function JQuerySelector() {

    return (
        <div className="clear-both w-full">
            <h1 className="h1 m-3">JQuery Selector</h1>
            <h4 className="h4 m-2 mt-5">- ID로 선택</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('#elementId')
            </div>
            <h4 className="h4 m-2 mt-5">- NAME으로 선택</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('[name="elementName"]')
            </div>
            <h4 className="h4 m-2 mt-5">- 클래스로 선택</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('.className')
            </div>
            <h4 className="h4 m-2 mt-5">- 태그로 선택</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('tagName')
            </div>
            <h4 className="h4 m-2 mt-5">- 자식 선택 (바로 하위 element)</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                //selector는 위에서 말한 모든 선택자<br/>
                $('selector > selector')<br/>
                $('selector > selector > selector')
            </div>
            <h4 className="h4 m-2 mt-5">- 후손 선택 (레벨에 관계없는 모든 하위 element)</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                //selector는 위에서 말한 모든 선택자<br/>
                $('selector selector')<br/>
                $('selector selector selector')
            </div>
            <h4 className="h4 m-2 mt-5">- 형제 선택 (같은 레벨의 element)</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('selector1+selector2')<br/>
                //selector2에 해당하는 바로 다음 element 하나 (이건 쓸일이 거의 없다)<br/>
                <br/>
                //selector2에 해당하는 모든 형제 element (.siblings() 와 같은 효과)<br/>
                $('selector1~selector2')
            </div>
            <h4 className="h4 m-2 mt-5">- 첫번째 자식 element</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('selector1:first')<br/>
                //모든 element 중 첫번째 element 딱 하나<br/>
                //같은 표현으로 $('selector').first(), $('selector:eq(0)')<br/>
                <div className="bg-white text-black m-0 p-2 w-full">
                    <span className="text-red-500">&lt;p&gt;맨 밖의 P&lt;/p&gt;</span><br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;span&gt;DIV안의 첫번째 SPAN&lt;/span&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;span&gt;DIV안의 두번쨰 SPAN&lt;/span&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                </div>
                <br/>
                $('selector1:first-child')<br/>
                //모든 자식 element 중 selector에 맞는 첫번째 element들<br/>
                //같은 표현으로 $('selector:nth-child(1)')<br/>
                <div className="bg-white text-black m-0 p-2 w-full">
                    &lt;p&gt;맨 밖의 P&lt;/p&gt;<br/>
                    &lt;div&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;</span><br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;span&gt;DIV안의 첫번째 SPAN&lt;/span&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;span&gt;DIV안의 두번쨰 SPAN&lt;/span&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;</span><br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                </div>
                <br/>
                $('selector1:first-of-type')<br/>
                //모든 element 에서 selector에 해당하는 첫번째 element들<br/>
                <div className="bg-white text-black m-0 p-2 w-full">
                    <span className="text-red-500">&lt;p&gt;맨 밖의 P&lt;/p&gt;</span><br/>
                    &lt;div&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;</span><br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;span&gt;DIV안의 첫번째 SPAN&lt;/span&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;span&gt;DIV안의 두번쨰 SPAN&lt;/span&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;</span><br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- 마지막 자식 element</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $('selector1:last')<br/>
                //모든 element (하위 element 포함) 중 마지막 element 딱 하나<br/>
                //같은 표현으로 $('selector').last() <br/>
                <div className="bg-white text-black m-0 p-2 w-full">
                    &lt;p&gt;맨 밖의 P&lt;/p&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;span&gt;DIV안의 첫번째 SPAN&lt;/span&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;span&gt;DIV안의 두번쨰 SPAN&lt;/span&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;</span><br/>
                    &lt;/div&gt;<br/>
                </div>
                <br/>
                $('selector1:last-child')<br/>
                //모든 자식 element 중 selector에 맞는 마지막 element들<br/>
                <div className="bg-white text-black m-0 p-2 w-full">
                    &lt;p&gt;맨 밖의 P&lt;/p&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;</span><br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;span&gt;DIV안의 첫번째 SPAN&lt;/span&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    &lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;<br/>
                    &lt;span&gt;DIV안의 두번쨰 SPAN&lt;/span&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;</span><br/>
                    &lt;/div&gt;<br/>
                </div>
                <br/>
                $('selector1:last-of-type')<br/>
                //모든 element 에서 selector에 해당하는 마지막 element들<br/>
                <div className="bg-white text-black m-0 p-2 w-full">
                    <span className="text-red-500">&lt;p&gt;맨 밖의 P&lt;/p&gt;</span><br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;</span><br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;span&gt;DIV안의 첫번째 SPAN&lt;/span&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;</span><br/>
                    &lt;span&gt;DIV안의 두번쨰 SPAN&lt;/span&gt;<br/>
                    &lt;/div&gt;<br/>
                    &lt;div&gt;<br/>
                    &lt;p&gt;DIV안의 첫번쨰 P&lt;/p&gt;<br/>
                    <span className="text-red-500">&lt;p&gt;DIV안의 두번쨰 P&lt;/p&gt;</span><br/>
                    &lt;/div&gt;<br/>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- 속성으로 선택</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $("[attrName='attrValue']") //attrName 속성값이 attrValue와 같은 element<br/>
                $("[attrName!='attrValue']") //attrName 속성값이 없거나 attrValue이 아닌 element<br/>
                $("[attrName]") //attrName 속성이 있는 element<br/>
                $("[attrName^='attrValue']") //attrName 속성값이 attrValue로 시작하는 element<br/>
                $("[attrName*='attrValue']") //attrName 속성값이 attrValue이 포함된 element<br/>
                $("[attrName$='attrValue']") //attrName 속성값이 attrValue로 끝나는 element<br/>
            </div>
            <h4 className="h4 m-2 mt-5">- 필터 선택</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                $(":button") //input button 과 button<br/>
                $(":checkbox") //checkbox element<br/>
                $(":checked") //체크된 element checkbox, radio<br/>
                $(":disabled") //비활성화 된 element<br/>
                $(":enabled") //활성화 된 element<br/>
                $(":file") //file element<br/>
                $(":focus") //현재 포커스 된 element<br/>
                $(":image") //image element<br/>
                $(":input") //input, textarea, select, button element<br/>
                $(":password") //password element<br/>
                $(":radio") //radio element<br/>
                $(":reset") //reset element<br/>
                $(":selected") //선택된 element, select의 option<br/>
                $(":submit") //submit element<br/>
                $(":text") //input text element<br/>
                $("input:hidden") //hidden 된 input element<br/>
                $("input:visible") //visible 된 input element<br/>
            </div>
            <h4 className="h4 m-2 mt-5">- .attr()과 .prop()</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                //id, name, value등 과 같은 값을 가지는 attribute를 참조할 때는 .attr()을 사용하고<br/>
                //disabled, selected, checked등 과 같은 별도의 값이 없이 상태만 존재하는 속성은 .prop()를 사용<br/>
            </div>
            <h4 className="h4 m-2 mt-5">- .is() 활용</h4>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                // .is() 는 조건에 맞는지 판별하여 boolean 값을 반환한다.<br/>
                $("div").children().is("p") //div의 자식 element 중 p가 있는지, 바로 하위의 자식노드만 검사함<br/>
                $("checkbox").is(":checked") //checkbox가 체크되어 있는지
                $("div").is(".className") //div의 class에 className이 포함되어 있는지
            </div>
        </div>
    )

}

export default JQuerySelector;