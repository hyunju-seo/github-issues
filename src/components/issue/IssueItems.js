import {getIssueItemTpl} from "../../tpl.js";

export const issueItems = (baseElement) => {
    return function (items) {
        baseElement.innerHTML = items.reduce((previousValue, currentValue) => {
            previousValue += getIssueItemTpl(currentValue);
            return previousValue;
        }, "");
    }
}