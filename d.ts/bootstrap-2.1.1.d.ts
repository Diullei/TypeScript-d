/// <reference path="jquery.d.ts" />

// @by: PulsarBlow <https://github.com/PulsarBlow>

// Partial typing for Twitter Bootstrap JS components, version 2.1.1
module Bootstrap {
    interface Affix {
        offset?: any;
    }
    interface Alert {
    }
    interface Button {
    }
    interface Carousel {
        interval?: number;
        pause?: string;
    }
    interface Collapse {
        parent?: any;
        toggle?: bool;
    }
    interface Dropdown {
    }
    interface Modal {
        backdrop?: bool;
        keyboard?: bool;
        show?: bool;
        remote?: any;
    }
    interface Popover {
        animation?: bool;
        html?: bool;
        placement?: any;
        selector?: string;
        trigger?: string;
        title?: any;
        content?: any;
        delay?: any;
    }
    interface Scrollspy {
        offset?: number;
    }
    interface Tab {
    }
    interface Tooltip {
        animation?: bool;
        html?: bool;
        placement?: any;
        selector?: string;
        title?: any;
        trigger?: string;
        delay?: any;
    }
    interface Transition {
    }
    interface Typehead {
    }
}

interface JQuery {
    affix(any) : JQuery;    
    affix(options: Bootstrap.Affix) : JQuery;
    affix(): JQuery;

    alert(any): JQuery;
    alert(options: Bootstrap.Alert): JQuery;
    alert(): JQuery;

    button(any): JQuery;
    button(options: Bootstrap.Button): JQuery;
    button(): JQuery;

    carousel(any): JQuery;
    carousel(options: Bootstrap.Carousel): JQuery;
    carousel(): JQuery;

    collapse(any): JQuery;
    collapse(options: Bootstrap.Collapse): JQuery;
    collapse(): JQuery;

    dropdown(any): JQuery;
    dropdown(options: Bootstrap.Dropdown): JQuery;
    dropdown(): JQuery;

    modal(any): JQuery;
    modal(options: Bootstrap.Modal): JQuery;
    modal(): JQuery;

    popover(any): JQuery;
    popover(options: Bootstrap.Popover): JQuery;
    popover(): JQuery;

    scrollspy(any): JQuery;
    scrollspy(options: Bootstrap.Scrollspy): JQuery;
    scrollspy(): JQuery;

    tab(any): JQuery;
    tab(options: Bootstrap.Tab): JQuery;
    tab(): JQuery;    

    tooltip(any): JQuery;
    tooltip(options: Bootstrap.Tooltip): JQuery;
    tooltip(): JQuery;

    typehead(any): JQuery;
    typehead(options: Bootstrap.Typehead): JQuery;
    typehead(): JQuery;

    transition(any): JQuery;
    transition(options: Bootstrap.Transition): JQuery;
    transition(): JQuery;
}