import React from "react";

function LinuxCommand(){
    return (
        <section className="clear-both w-full">
            <h1 className="h1 m-3">리눅스 기본명령어</h1>
            <ul>
                <li>
                    <h4 className="h4 m-2 mt-5">- cd : 디렉토리 이동</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                   <td>cd .</td>
                                   <td>현재 디렉토리</td>
                                </tr><tr>
                                   <td>cd ..</td>
                                   <td>부모 디렉토리</td>
                                </tr><tr>
                                   <td>cd /</td>
                                   <td>최상위 디렉토리</td>
                                </tr><tr>
                                   <td>cd $변수명</td>
                                   <td>변수의 경로로 이동</td>
                                </tr><tr>
                                   <td>cd ~, cd &HOME, cd</td>
                                   <td>계정 홈 디렉토리로 이동</td>
                                </tr><tr>
                                   <td>cd ~계정명</td>
                                   <td>입력한 계정 홈 디렉토리로 이동</td>
                                </tr><tr>
                                   <td>cd -</td>
                                   <td>이전 경로로 이동</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- ls,ll : 파일목록 조회</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>ls [옵션] [파일/디렉토리]</td>
                                    <td>옵션은 여러개를 조합하여 사용가능</td>
                                </tr>
                                <tr>
                                    <td>ls -a</td>
                                    <td>숨김파일 또는 디렉토리 포함 조회</td>
                                </tr>
                                <tr>
                                    <td>ls -l</td>
                                    <td>자세한 내용 출력 (수정시간으로)</td>
                                </tr>
                                <tr>
                                    <td>ls -lu</td>
                                    <td>자세한 내용 출력 (접근시간으로)</td>
                                </tr>
                                <tr>
                                    <td>ls -lc</td>
                                    <td>자세한 내용 출력 (변경시간으로)</td>
                                </tr>
                                <tr>
                                    <td>ls -S</td>
                                    <td>파일크기 순으로 정렬하여 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -r</td>
                                    <td>파일명 내림차순으로 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -R</td>
                                    <td>하위 디렉토리까지 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -h</td>
                                    <td>파일 크기를 k, m, g 단위로 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -t</td>
                                    <td>최근 수정 파일 내림차순으로 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -i</td>
                                    <td>파일의 인덱스 값을 첫번째 열에 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -I(대문자i) [파일/디렉토리]</td>
                                    <td>지정 파일/디렉토리를 제외하고 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -L</td>
                                    <td>심볼릭링크의 원본파일 정보 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -m</td>
                                    <td>파일을 쉼표로 구분하여 출력</td>
                                </tr>
                                <tr>
                                    <td>ls -n</td>
                                    <td>소유자와 소유가 그룹을 UDI와 GDI로 출력</td>
                                </tr>
                                <tr>
                                    <td>ls *.txt</td>
                                    <td>.txt로 끝나는 파일 출력 (와일드카드)</td>
                                </tr>
                                <tr>
                                    <td>ls &gt; file.txt</td>
                                    <td>디렉토리 내용을 파일에 저장</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- pwd : 현재경로</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>pwd</td>
                                    <td>현재 디렉토리 위치 출력</td>
                                </tr>
                                <tr>
                                    <td>pwd -L</td>
                                    <td>현재 디렉토리의 로지컬 경로 출력</td>
                                </tr>
                                <tr>
                                    <td>pwd -P</td>
                                    <td>현재 디렉토리의 피지컬 경로 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- rm : 파일/디렉토리 삭제</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>rm [옵션] [삭제할 파일/디렉토리]</td>
                                    <td>
                                        지정한 파일/디렉토리 삭제<br/>
                                        경로를 지정하지 않으면 현재 디렉토리를 기준으로 함<br/>
                                        디렉토리는 비어있지 않으면 삭제불가
                                    </td>
                                </tr>
                                <tr>
                                    <td>rm -f</td>
                                    <td>강제로 삭제</td>
                                </tr>
                                <tr>
                                    <td>rm -r</td>
                                    <td>비어있지 않은 디렉토리도 삭제</td>
                                </tr>
                                <tr>
                                    <td>rm -d</td>
                                    <td>비어있는 디렉토리만 삭제</td>
                                </tr>
                                <tr>
                                    <td>rm -i</td>
                                    <td>삭제할 때마다 묻기</td>
                                </tr>
                                <tr>
                                    <td>rm -l</td>
                                    <td>3개 이상 삭제하거나 비어있지 않은 디렉토리를 삭제할 때 묻기</td>
                                </tr>
                                <tr>
                                    <td>rm -v</td>
                                    <td>삭제하는 대상의 정보 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- cp : 파일/디렉토리 복사</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>cp [옵션] [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>경로를 지정하지 않으면 현재 디렉토리 기준</td>
                                </tr>
                                <tr>
                                    <td>cp -i [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>이름이 같은 파일이 존재할 경우 묻기</td>
                                </tr>
                                <tr>
                                    <td>cp -b [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>이름이 같은 파일이 존재할 경우 백업파일 생성</td>
                                </tr>
                                <tr>
                                    <td>cp -f [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>이름이 같은 파일이 존재할 경우 덮어쓰기</td>
                                </tr>
                                <tr>
                                    <td>cp -r [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>하위 디렉토리까지 복사</td>
                                </tr>
                                <tr>
                                    <td>cp -a [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>원본 파일의 속성, 링크 정보까지 모두 복사</td>
                                </tr>
                                <tr>
                                    <td>cp -p [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>원본 파일의 소유자,그룹,권한까지 모두 복사</td>
                                </tr>
                                <tr>
                                    <td>cp -v [원본 디렉토리/파일] [복사 디렉토리/파일]</td>
                                    <td>복사 진행상태를 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- touch : 빈 파일 생성</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>touch [옵션] [파일이름]</td>
                                    <td>파일이 존재하지 않으면 빈 파일 생성, 파일이 존재하면 파일 생성시간을 변경</td>
                                </tr>
                                <tr>
                                    <td>touch -m [파일이름]</td>
                                    <td>파일의 시간을 서버시간으로 변경</td>
                                </tr>
                                <tr>
                                    <td>touch -t [일시] [파일이름]</td>
                                    <td>일시로 파일의 시간 변경, yyyymmddhhmi 형식으로 입력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- mv : 파일/디렉토리 이동, 이름변경</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>mv [옵션] [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>경로를 지정하지 않으면 현재 디렉토리 기준, 파일의 이름변경 용도로 활용가능</td>
                                </tr>
                                <tr>
                                    <td>mv -b [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>이름이 같은 파일이 존재할 경우 백업파일 생성</td>
                                </tr>
                                <tr>
                                    <td>mv -i [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>이름이 같은 파일이 존재할 경우 묻기</td>
                                </tr>
                                <tr>
                                    <td>mv -f [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>이름이 같은 파일이 존재할 경우 덮어쓰기</td>
                                </tr>
                                <tr>
                                    <td>mv -n [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>이름이 같은 파일이 존재할 경우 덮어쓰기 하지 않음</td>
                                </tr>
                                <tr>
                                    <td>mv -r [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>하위 디렉토리까지 이동</td>
                                </tr>
                                <tr>
                                    <td>mv -v [대상 디렉토리/파일] [이동 될 위치]</td>
                                    <td>이동 진행상태 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- mkdir : 디렉토리 생성</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>mkdir [옵션] [생성 할 디렉토리]</td>
                                    <td>경로를 지정하지 않으면 현재 디렉토리 기준, 생성할 디렉토리를 여러개 나열하여 한번에 생성 가능</td>
                                </tr>
                                <tr>
                                    <td>mkdir -m [권한] [생성 할 디렉토리]</td>
                                    <td>디렉토리를 생성할 때 권한을 설정</td>
                                </tr>
                                <tr>
                                    <td>mkdir -p [생성 할 디렉토리]</td>
                                    <td>디렉토리 경로의 모든 디렉토리 생성</td>
                                </tr>
                                <tr>
                                    <td>mkdir -v [생성 할 디렉토리]</td>
                                    <td>디렉토리 생성 진행상태 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- rmdir : 디렉토리 삭제</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>rmdir [옵션] [삭제 할 디렉토리]</td>
                                    <td>비어있지 않은 디렉토리는 삭제되지 않음 (대신 rm을 사용함)</td>
                                </tr>
                                <tr>
                                    <td>rmdir -p [삭제 할 디렉토리]</td>
                                    <td>경로로 상위 디렉토리를 지정했다면 상위 디렉토리도 삭제</td>
                                </tr>
                                <tr>
                                    <td>rmdir -v [삭제 할 디렉토리]</td>
                                    <td>디렉토리 삭제 진행상태 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- cat : 파일내용 출력</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>cat [옵션] [파일]</td>
                                    <td>파일 내용을 출력</td>
                                </tr>
                                <tr>
                                    <td>cat [파일1] [파일2] [파일3] ... [파일n]</td>
                                    <td>파일 여러개를 연속해서 출력</td>
                                </tr>
                                <tr>
                                    <td>cat &gt; [파일]</td>
                                    <td>파일을 생성, 파일이 존재할 경우 덮어쓰기, 내용 입력 후 종료할때는 ctrl+d</td>
                                </tr>
                                <tr>
                                    <td>cat &gt;&gt; [파일]</td>
                                    <td>파일 이어쓰기</td>
                                </tr>
                                <tr>
                                    <td>cat [기존파일] &gt; [생성파일]</td>
                                    <td>원래 있던 파일을 새로운 파일로 복사한다.(cp와 기능이 같음)</td>
                                </tr>
                                <tr>
                                    <td>cat [기존파일] &gt;&gt; [생성파일]</td>
                                    <td>원래 있던 파일에서 새로운 파일을 복사하고 내용을 이어쓴다.</td>
                                </tr>
                                <tr>
                                    <td>cat [기존파일1] [기존파일2] ... [기존파일n] &gt;&gt; [생성파일]</td>
                                    <td>원래 있던 파일 여러개를 합쳐서 새로운 파일로 생성</td>
                                </tr>
                                <tr>
                                    <td>cat [기존파일1] [기존파일2] ... [기존파일n] &gt;&gt; [다른기존파일]</td>
                                    <td>원래 있던 파일 여러개를 합쳐서 다른 파일에 이어쓴다.</td>
                                </tr>
                                <tr>
                                    <td>cat -A [파일]</td>
                                    <td>탭/줄바꿈 문자를 표시(-vET 옵션과 같음)</td>
                                </tr>
                                <tr>
                                    <td>cat -b [파일]</td>
                                    <td>비어있지 않은 라인에 번호표시</td>
                                </tr>
                                <tr>
                                    <td>cat -e [파일]</td>
                                    <td>줄바꿈 문자를 표시(-vE 옵션과 같음)</td>
                                </tr>
                                <tr>
                                    <td>cat E [파일]</td>
                                    <td>라인 마지막과 비어있는 라인에 '$' 표시</td>
                                </tr>
                                <tr>
                                    <td>cat -n [파일]</td>
                                    <td>모든 라인에 번호 표시</td>
                                </tr>
                                <tr>
                                    <td>cat -s [파일]</td>
                                    <td>두번 연속 빈 라인은 출력하지 않음</td>
                                </tr>
                                <tr>
                                    <td>cat -t [파일]</td>
                                    <td>탭 문자를 표시(-vT 옵션과 같음)</td>
                                </tr>
                                <tr>
                                    <td>cat -T [파일]</td>
                                    <td>탭 문자를 '^|'로 바꿔서 출력</td>
                                </tr>
                                <tr>
                                    <td>cat -v [파일]</td>
                                    <td>탭/줄바꿈 문자를 '^|','$'로 표시하고 비인쇄 문자를 시각적으로 표시</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- head,tail : 파일 앞 10줄 또는 마지막 10줄 출력</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>head(tail) [옵션] [파일명]</td>
                                    <td>head는 파일의 앞 10줄 출력, tail은 파일의 뒤 10줄 출력</td>
                                </tr>
                                <tr>
                                    <td>head(tail) -n [숫자] [파일명]</td>
                                    <td>옵션 숫자 만큼 라인을 출력</td>
                                </tr>
                                <tr>
                                    <td>head(tail) -c [숫자] [파일명]</td>
                                    <td>옵션 숫자 만큼의 byte를 출력</td>
                                </tr>
                                <tr>
                                    <td>head(tail) -q [파일명]</td>
                                    <td>여러개의 파일을 출력할 때 제목을 출력하지 않음</td>
                                </tr>
                                <tr>
                                    <td>tail -f [파일명]</td>
                                    <td>내용이 변경될 때마다 실시간으로 출력</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- more,less : 파일을 페이지 별 출력</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>more +[숫자] [파일명]</td>
                                    <td>내용이 긴 파일을 앞에서부터 순차적으로 출력하며 +[숫자] 옵션을 넣으면 해당 라인부터 출력한다.<br/>
                                        enter 시 라인이동, 스페이스 바는 페이지 이동
                                    </td>
                                </tr>
                                <tr>
                                    <td>less +[숫자] [파일명]</td>
                                    <td>more와 마찬가지로 내용이 긴 파일을 읽을 수 있게 해준다.<br/>
                                        다만 more는 한번 읽어내려오면 이전으로 돌아갈 수 없으나 less는 위아래로 이동하면서 읽을 수 있다.<br/>
                                        빠져나올땐 :q를 입력해야 한다.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ls -l [디렉토리명] | more(less)<br/>
                                        ll [디렉토리명] | more(less)
                                    </td>
                                    <td>디렉토리에 파일 목록이 길어 한번에 출력하지 못할 경우 페이지로 나누어 출력할 수 있다.</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- file : 파일종류</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- clear : 화면지움</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- du : 저장공간 사용량 조회</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- put,mput : ftp 파일 업로드</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- get,mget : ftp 파일 다운로드</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- chmod : 파일/디렉토리 권한변경</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- alias : 명령어 축약 지정</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- who : 로그인한 사용자 목록</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- whereis : 소스/실행파일/매뉴얼 등의 위치</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- top : 현재 리소스 사용량</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- mount : 장치연결</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- halt : 시스템종료</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- reboot : 시스템재부팅</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- find : 키워드로 파일 검색</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- ps : 현재 동작중인 프로세스</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- kill : 프로세스 강제종료</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- symlink : 파일/디렉토리 심볼릭 링크</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- tail : 파일 마지막 부분을 갱신해서 출력</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- sed : 파일내 문자열 모두 변경</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
                <li>
                    <h4 className="h4 m-2 mt-5">- &gt;,&gt;&gt; (redirection) : 화면 출력 결과를 파일로 저장</h4>
                    <p className="bg-black text-white m-1 p-2 ring-2 ring-sky-300 ring-inset w-full">
                        <table className="border-0 w-full">
                            <colgroup>
                                <col className="w-1/2"/>
                                <col className="w-1/2"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </li>
            </ul>

        </section>
    );
}

export default LinuxCommand;