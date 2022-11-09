import {groupBy} from "../../lib/utils.js";
import {get} from "../../lib/api.js";
import {issueHeader} from "./IssueHeader.js";
import {ISSUE_STATUS} from "../../lib/constants/common.js";
import {issueItems} from "./IssueItems.js";

const CLOSE_TAB_SELECTOR = ".statusTab>.close-count";
const OPEN_TAB_SELECTOR = ".statusTab>.open-count";
const ISSUE_LIST_SELECTOR = ".issue-list>ul";
const BOLD_FONT_SELECTOR = "font-bold";

const data = groupBy(await get("/data-sources/issues.json"), "status");

export const renderIssue = (baseElement) => {
    const renderIssueHeader = issueHeader(baseElement)
    renderIssueHeader(data[ISSUE_STATUS.OPEN].length, data[ISSUE_STATUS.CLOSE].length)

    const renderIssueItems = issueItems(baseElement.querySelector(ISSUE_LIST_SELECTOR))
    renderIssueItems(data[ISSUE_STATUS.OPEN]);


    const tabs = {
        [ISSUE_STATUS.OPEN]: baseElement.querySelector(OPEN_TAB_SELECTOR),
        [ISSUE_STATUS.CLOSE]: baseElement.querySelector(CLOSE_TAB_SELECTOR),
    };

    Object.entries(tabs).forEach(
        ([status, tab]) =>
            tab.addEventListener("click", function () {
                addBoldFontCss(this)
                Object.keys(tabs).filter((tabStatus) => tabStatus !== status)
                    .forEach((status) => removeBoldFontCss(tabs[status]))
                renderIssueItems(data[status]);
            })
    )
}

const addBoldFontCss = (element) => {
    element.classList.add(BOLD_FONT_SELECTOR);
}

const removeBoldFontCss = (element) => {
    element.classList.remove(BOLD_FONT_SELECTOR)
}