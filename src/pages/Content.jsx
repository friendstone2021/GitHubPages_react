import React, {Suspense} from "react";
import {Route, Router, useParams} from "react-router-dom";
import JQuerySelector from "../components/contents/JQuery/JQuerySelector.jsx";
import DockerInstall from "../components/contents/Docker/DockerInstall.jsx";
import ReactStart from "../components/contents/React/ReactStart.jsx";
import LinuxCommand from "../components/contents/Linux/LinuxCommand.jsx"
import SemanticTag from "../components/contents/Html/SemanticTag.jsx";
import BuildTool from "../components/contents/BuildTool/BuildTool.jsx";
import GoogleMap from "../components/contents/GoogleMap/GoogleMap.jsx";
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
    }else if(pageName === "LinuxCommand"){
        content = <LinuxCommand/>;
    }else if(pageName === "SemanticTag") {
        content = <SemanticTag/>;
    }else if(pageName === "BuildTool"){
        content = <BuildTool/>;
    }else if(pageName === "GoogleMap"){
        content = <GoogleMap/>;
    }

    return (
        <div className="clear-both w-full">
            {content}
        </div>
    )
}

export default Content;