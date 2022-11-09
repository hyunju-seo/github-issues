import {getIssueTpl} from "../../tpl.js";

export const issueHeader = (baseElement) => {
    return function (openItemsCount, closedItemsCount) {
        baseElement.innerHTML = getIssueTpl(openItemsCount, closedItemsCount);
    }
}