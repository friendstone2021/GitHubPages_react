import React from "react";
import img_reactStart1 from "../../../images/React/ReactStart1.png";
import img_reactStart2 from "../../../images/React/ReactStart2.png";
import img_reactStart3 from "../../../images/React/ReactStart3.png";
import img_reactStart4 from "../../../images/React/ReactStart4.png";

function ReactStart(){
    return (
        <div className="clear-both w-full">
            <h1 className="h1 m-3">React 시작하기</h1>
            <h4 className="h4 m-2 mt-5">- 준비</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                React가 무엇인지, CSR이니 SSR이니 하는것들은 생략하고<br/>
                React(이하 리액트)로 Hello World 찍어보기까지 필요한 것들을 알아본다.<br/>
                Nextjs도 일단 이번에는 다루지 않고 React만 가지고 테스트해 보겠다.<br/>
                <br/>
                일단 리액트를 시작하려면 Node.js를 설치해야 한다.<br/>
                리액트 실행, 모듈(라이브러리)설치, 테스트, 배포가 Node.js의 npm으로 수행되기 때문이다.<br/>
                <span className="font-bold">Node 14.0.0 혹은 상위 버전 및 npm 5.6 혹은 상위 버전</span>이 필요하다고 공식사이트에서 안내하고 있다.<br/>
                현재 Node의 최신버전은 20.11.0 이므로 지금기준으로 설치하면 상관없으나 예전에 Node.js를 설치해 놓았다면 리액트가 가능한 버전인지 확인해보자.<br/>
                <div className="bg-black text-white m-0 p-2 w-full">
                    # <span className="text-blue-500">node --version</span><br/>
                    # <span className="text-blue-500">npm --version</span><br/>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- 리액트 프로젝트 생성</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                npx로 리액트 프로젝트를 생성하자.<br/>
                npx를 안쓰고 프로젝트를 생성할 수도 있겠지만 그러면 설정파일 하나하나 모듈 하나하나를 생성해줘야 하므로 기본 프로젝트를 깔아준 뒤 필요없는 것들을 지우는 것이 훨씬 효율적이다.<br/>
                <div className="bg-black text-white m-0 p-2 w-full">
                    # <span className="text-blue-500">npx create-react-app [생성할 프로젝트 명]</span>
                </div>
                <br/>
                이렇게 하면 세가지 정도의 케이스가 생길 수 있다.<br/>
                <br/>
                <span className="font-bold">Case 1. 프로젝트가 그냥 설치된다.</span><br/>
                <br/>
                <span className="font-bold">Case 2. create-react-app가 설치되지 않았다고 설치할거냐고 묻는다.</span><br/>
                <div className="bg-black text-white m-0 p-2 w-full">
                    # <span className="text-blue-500">npx create-react-app [생성할 프로젝트 명]</span><br/>
                    Need to install the following packages:<br/>
                    create-react-app@5.0.1<br/>
                    Ok to proceed? (y)<span className="text-blue-500">y</span><br/>
                </div>
                설치하겠다고 y를 입력하면 create-react-app를 설치하고 리액트 프로젝트도 생성한다.<br/>
                <br/>
                <span className="font-bold">Case 3. 오류가 발생하며 설치되지 않는다.</span><br/>
                <div className="bg-black text-white m-0 p-2 w-full">
                    # <span className="text-blue-500">npx create-react-app [생성할 프로젝트 명]</span><br/>
                    npm ERR! code ENOENT<br/>
                    npm ERR! syscall lstat<br/>
                    npm ERR! path C:\Users\******\AppData\Roaming\npm<br/>
                    npm ERR! errno -4058<br/>
                    npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\******\AppData\Roaming\npm'<br/>
                    npm ERR! enoent This is related to npm not being able to find a file.<br/>
                    npm ERR! enoent<br/>
                    <br/>
                    npm ERR! A complete log of this run can be found in: C:\Users\******\AppData\Local\npm-cache\_logs\2024-02-05T08_22_35_942Z-debug-0.log<br/>
                </div>
                이 경우는 create-react-app가 설치된 경로가 변경되었거나, 삭제되었거나, 잘못된 경로에 설치된 경우이다.<br/>
                <br/>
                create-react-app를 uninstall 후 다시 install 해주면 된다.<br/>
                <div className="bg-black text-white m-0 p-2 w-full">
                    # <span className="text-blue-500">npm uninstall -g create-react-app</span><br/>
                    <br/>
                    up to date in 418ms<br/>
                    # <span className="text-blue-500">npm install -g create-react-app</span><br/>
                    npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.<br/>
                    <br/>
                    added 67 packages in 3s<br/>
                    <br/>
                    5 packages are looking for funding<br/>
                    run `npm fund` for details<br/>
                    # <span className="text-blue-500">npx create-react-app [생성할 프로젝트 명]</span><br/>
                </div>
                <br/>
                여기까지 완료되었다면 [생성할 프로젝트명]으로 디렉토리가 생기고 안에 리액트 기본 소스들이 추가되었을 것이다.<br/>
            </div>
            <h4 className="h4 m-2 mt-5">- 리액트 소스 보기</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                리액트 소스는 IDE를 크게 따지지 않는다.<br/>
                Intellij나 VSCode를 사용해도 상관없고 극도로 가벼운 환경을 원한다면 Notepad++ 같은 에디터를 사용해도 상관없다.<br/>
                eclipse를 사용해도 되긴 한데 어차피 개발하는 동안 실행, 빌드를 npm 명령어로 하는게 편하기 때문에 무거운 eclipse를 사용할 이유가 없다.<br/>
                <br/>
                여기서는 Intellij를 사용해 보겠다.
                설치된 리액트 프로젝트 디렉토리를 Intellij로 열면 이런 화면이 뜬다.<br/>
                <div className="w-full grid place-items-center">
                    <img className="w-9/12 mt-5" src={img_reactStart1}/><br/>
                </div>
                오른쪽 README 파일에서 볼것은 <br/>
                <span className="font-bold">npm start, npm test, npm run build</span>이다.<br/>
                <br/>
                터미널을 열어 npm start를 실행한다.<br/>
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-3 mt-5">
                    <div className="w-11/12 mt-5">
                        <img className="w-auto" src={img_reactStart2}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <img className="w-auto" src={img_reactStart3}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <img className="w-auto" src={img_reactStart4}/>
                    </div>
                </div>
                리액트 프로젝트가 내장된 서버로 구동된다.<br/>
                브라우저로 http://localhost:3000 에 들어가면 기본 페이지 화면을 볼 수 있다.<br/>
                <br/>


            </div>
        </div>
    );
}

export default ReactStart;