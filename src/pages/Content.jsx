import React, {Suspense} from "react";
import {Route, Router, useParams} from "react-router-dom";
import JQuerySelector from "../components/contents/JQuery/JQuerySelector.jsx";
function Content() {

    const params = useParams();
    const pageName = params.pageName;

    return (
        <div className="clear-both w-full">
            {eval(pageName+'()')}
        </div>
    )
}

export default Content;