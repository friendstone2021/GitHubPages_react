import React, {Suspense} from "react";
import {Route, Router, useParams} from "react-router-dom";
import JQuerySelector from "../components/contents/JQuery/JQuerySelector.jsx";
import DockerInstall from "../components/contents/Docker/DockerInstall.jsx";
import ReactStart from "../components/contents/React/ReactStart.jsx";
function Content() {

    const params = useParams();
    const pageName = params.pageName;

    console.log(pageName);

    let content;
    if(pageName === "JQuerySelector"){
        content = <JQuerySelector/>;
    }else if(pageName === "DockerInstall"){
        content = <DockerInstall/>;
    }else if(pageName === "ReactStart"){
        content = <ReactStart/>;
    }


    return (
        <div className="clear-both w-full">
            {content}
        </div>
    )
}

export default Content;