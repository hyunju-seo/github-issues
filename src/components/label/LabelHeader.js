import {getLabelTpl} from "../../tpl.js";
import {Component} from "./Component.js";

export class LabelHeader extends Component {
    constructor(rootSelector, labelStore) {
        super({
            rootSelector,
            templateFn: getLabelTpl,
            templateDataFn: (data) => data.length,
            labelStore
        });
    }

    render() {
        this._render(this.labelStore.get())
        this.bind()
    }

}
