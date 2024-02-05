import React from "react";
import img_dockerDownload from '../../../images/Docker/dockerDownload.png'
import img_dockerInstall1 from '../../../images/Docker/dockerInstall1.png'
import img_dockerInstall2 from '../../../images/Docker/dockerInstall2.png'
import img_dockerInstall3 from '../../../images/Docker/dockerInstall3.png'
import img_dockerRun1 from '../../../images/Docker/dockerRun1.png'
import img_dockerRun2 from '../../../images/Docker/dockerRun2.png'
import img_dockerRun3 from '../../../images/Docker/dockerRun3.png'
import img_dockerRun4 from '../../../images/Docker/dockerRun4.png'
import img_dockerImage1 from '../../../images/Docker/dockerImage1.png'
import img_dockerImage2 from '../../../images/Docker/dockerImage2.png'
import img_dockerImage3 from '../../../images/Docker/dockerImage3.png'
import img_dockerImage4 from '../../../images/Docker/dockerImage4.png'
import img_dockerContainer1 from '../../../images/Docker/dockerContainer1.png'
import img_dockerContainer2 from '../../../images/Docker/dockerContainer2.png'
import img_dockerContainer3 from '../../../images/Docker/dockerContainer3.png'
import img_dockerContainer4 from '../../../images/Docker/dockerContainer4.png'
import img_dockerContainer5 from '../../../images/Docker/dockerContainer5.png'
import img_dockerContainer6 from '../../../images/Docker/dockerContainer6.png'
import img_dockerContainer7 from '../../../images/Docker/dockerContainer7.png'
import img_dockerContainer8 from '../../../images/Docker/dockerContainer8.png'
import img_dockerTomcatDeploy1 from '../../../images/Docker/dockerTomcatDeploy1.png'
import img_dockerTomcatDeploy2 from '../../../images/Docker/dockerTomcatDeploy2.png'
import img_dockerTomcatDeploy3 from '../../../images/Docker/dockerTomcatDeploy3.png'
import img_dockerTomcatDeploy4 from '../../../images/Docker/dockerTomcatDeploy4.png'
import img_dockerTomcatDeploy5 from '../../../images/Docker/dockerTomcatDeploy5.png'
import img_dockerTomcatDeploy6 from '../../../images/Docker/dockerTomcatDeploy6.png'

function DockerInstall(){

    return (
        <div className="clear-both w-full">
            <h1 className="h1 m-3">윈도우에 도커 설치하기</h1>
            <h4 className="h4 m-2 mt-5">- 설치조건</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                윈도우에 도커를 설치하려면 WSL2 또는 Hyper-V가 가능해야 한다.<br/>
                윈도우에서 리눅스를 실행하기 위한 가상화 환경이라고 보면 된다.<br/>
                윈도우10 이상이라면 WSL2가 가능하고 그 이전 버전이라면 Hyper-V를 적용해야 할 것이나<br/>
                아직까지 윈도우10 미만 버전을 사용할 가능성은 거의 없어 WSL2 기준으로만 설명한다.<br/>
            </div>
            <h4 className="h4 m-2 mt-5">- WSL2 설치하기</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                관리자 권한으로 cmd나 powerShell을 열고 wsl 설치 명령어를 입력한다.
            </div>
            <div className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                wsl --install
            </div>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                명령어를 실행하고 나면 wsl2가 설치되고 리눅스 배포판도 자동 설정되는데 기본으로 설치된 리눅스는 Ubuntu이다.<br/>
                다른 배포판으로 변경도 가능하지만 여기에서는 도커 설치가 목적이므로 다루지 않는다.<br/>
                만약 다른 배포판을 설치해야 한다면 공식 Microsoft 설명을 참조하자.<br/>
                <a href={"https://learn.microsoft.com/ko-kr/windows/wsl/install"}><p className="underline decoration-solid">https://learn.microsoft.com/ko-kr/windows/wsl/install</p></a>
            </div>
            <h4 className="h4 m-2 mt-5">- 도커 윈도우 버전 다운로드</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                도커 홈페이지에서 윈도우용 도커를 다운로드 하자.<br/>
                <a href={"https://www.docker.com/get-started/"}>
                    <p className="underline decoration-solid">https://www.docker.com/get-started/</p><br/>
                    <img src={img_dockerDownload}/>
                </a><br/>

            </div>
            <h4 className="h4 m-2 mt-5">- 도커 설치</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                <p className="mt-5">
                    다운로드 받은 설치파일을 실행한다.
                </p>
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-3 mt-5">
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">①</p>
                        <img className="w-auto" src={img_dockerInstall1}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">②</p>
                        <img className="w-auto" src={img_dockerInstall2}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">③</p>
                        <img className="w-auto" src={img_dockerInstall3}/>
                    </div>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- 도커 실행</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                <p className="mt-5">
                    설치가 끝난 후 도커를 실행한다.<br/>
                    도커 사용용도 등을 묻는 설문이 있는데 아무거나 선택해도 실행에 영향이 있지는 않다.<br/>
                </p>
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 mt-5">
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">①</p>
                        <img className="w-auto" src={img_dockerRun1}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">②</p>
                        <img className="w-auto" src={img_dockerRun2}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">③</p>
                        <img className="w-auto" src={img_dockerRun3}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">④</p>
                        <img className="w-auto" src={img_dockerRun4}/>
                    </div>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- 도커 이미지 받기</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2">
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">①</p>
                        <img className="w-auto" src={img_dockerImage1}/>
                        <p>
                            도커에 컨테이너를 올리려면 기반이 되는 도커 이미지가 있어야 하는데 왠만한 기본 이미지들은 키워드로 조회해서 다운로드가 가능하다.<br/>
                            예시로 Tomcat 이미지를 다운로드 받아보자.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">②</p>
                        <img className="w-auto" src={img_dockerImage2}/>
                        <p>
                            Image 탭으로 이동 후 검색창에서 Tomcat을 검색하면 여러 이미지들이 검색되는데<br/>
                            적당한 이미지를 선택 후 PULL을 클릭하면 다운로드를 시작한다.<br/>
                            이미지는 환경별 버전별로 여러 종류가 있으니 내 환경에 맞는 것을 잘 선택하자.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">③</p>
                        <img className="w-auto" src={img_dockerImage3}/>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">④</p>
                        <img className="w-auto" src={img_dockerImage4}/>
                        <p>
                            다운로드가 완료되면 Image 탭에 다운로드 받은 이미지가 목록에 표시된다.<br/>
                        </p>
                    </div>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- 이미지로 컨테이너 실행</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2">
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">①</p>
                        <img className="w-auto" src={img_dockerContainer1}/>
                        <p>
                            다운받은 Tomcat 이미지의 실행 버튼을 클릭하면 기본 설정으로 바로 실행하는 창이 뜬다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">②</p>
                        <img className="w-auto" src={img_dockerContainer2}/>
                        <p>
                            이걸 실행하면 컨테이너명은 임의로 생성되고 PORT도 기본설정이 되니 <br/>
                            Optional Setting을 클릭해서 컨테이너명과 사용할 포트를 입력해 주자.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">③</p>
                        <img className="w-auto" src={img_dockerContainer3}/>
                        <p>
                            PORT를 입력하는란 옆에 표시되어 있는 PORT는 컨테이너 내에서 동작하는 PORT로<br/>
                            내가 입력한 PORT를 도커에서 해당 컨테이너의 PORT로 포워딩 해준다고 보면 된다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">④</p>
                        <img className="w-auto" src={img_dockerContainer4}/>
                        <p>
                            실행했더니 실행 로그에 TOMCAT_PASSWORD 환경변수가 설정되지 않았다고 오류가 뜬다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">⑤</p>
                        <img className="w-auto" src={img_dockerContainer5}/>
                        <p>
                            Containers 탭으로 가서 현재 컨테이너를 선택해서 삭제하고 <br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">⑥</p>
                        <img className="w-auto" src={img_dockerContainer6}/>
                        <p>
                            Images 탭에서 다시 Optional Setting으로 실행하면서 Environment variables에 TOMCAT_PASSWORD 변수를 추가해주고 다시 실행한다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">⑦</p>
                        <img className="w-auto" src={img_dockerContainer7}/>
                        <p>
                            로그 화면으로 이동하면서 이번엔 정상적으로 TOMCAT이 실행된 것을 볼 수 있다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">⑧</p>
                        <img className="w-auto" src={img_dockerContainer8}/>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            <h4 className="h4 m-2 mt-5">- TOMCAT 컨테이너에 배포하기</h4>
            <div className="bg-white text-black m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2">
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">①</p>
                        <img className="w-auto" src={img_dockerTomcatDeploy1}/>
                        <p>
                            TOMCAT 컨테이너가 정상적으로 시작되었다면 localhost의 설정한 포트로 접속 시 TOMCAT 기본 관리자 페이지가 실행될 것이다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">②</p>
                        <img className="w-auto" src={img_dockerTomcatDeploy2}/>
                        <p>
                            도커에서 현재 실행중인 TOMCAT 컨테이너를 선택하면 컨테이너의 로그, 콘솔, 파일업로드/다운로드가 가능하다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">③</p>
                        <img className="w-auto" src={img_dockerTomcatDeploy3}/>
                        <p>
                            Logs 탭에서는 현재 실행중인 TOMCAT의 로그가 실시간 출력된다.<br/>
                            그 외 Exec, Files 탭을 주로 사용하게 되며 Inspect, Bind mounts, Stats는 현재 컨테이너 상태를 확인할 수 있지만 설정을 바꾸는 것은 불가능하다.<br/>
                            참고로 오른쪽 상단에 컨테이너의 중지, 시작, 재시작, 컨테이너 삭제 버튼이 있는데 컨테이너 삭제 버튼은 현재 컨테이너 설정을 모두 날려버릴 수 있기 때문에 주의해야 한다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">④</p>
                        <img className="w-auto" src={img_dockerTomcatDeploy4}/>
                        <p>
                            Exec 탭에서는 컨테이너의 콘솔명령어를 직접 실행할 수 있다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">⑤</p>
                        <img className="w-auto" src={img_dockerTomcatDeploy5}/>
                        <p>
                            Files 탭에서는 컨테이너의 파일을 업로드/다운로드 할 수 있다.<br/>
                            TOMCAT 배포가 필요하다면 WAR 파일을 webapp 디렉토리에 Drag&Drop으로 업로드하여 배포가 가능하다.<br/>
                        </p>
                    </div>
                    <div className="w-11/12 mt-5">
                        <p className="text-2xl font-bold">⑥</p>
                        <img className="w-auto" src={img_dockerTomcatDeploy6}/>
                        <p>
                            파일을 클릭하고 오른쪽 상단의 Open file editor 버튼을 클릭하면 파일 편집도 가능하다.<br/>
                            물론 파일 편집 후 기동중인 TOMCAT에 바로 적용되지는 않겠지만 수정 후 재기동 한번으로 적용할 수 있다.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DockerInstall;