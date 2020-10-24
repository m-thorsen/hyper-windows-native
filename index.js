exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor: '#1C1C1C',
        foregroundColor: '#BDBDBD',
        cursorColor: '#BDBDBD',
        selectionColor: 'rgba(255, 255, 255, 0.2)',
        showHamburgerMenu: true,
        padding: '4px',
        css: `
            svg {
                shape-rendering: geometricPrecision !important;
            }
            .hyper_main {
                border-width: 0 !important;
            }
            .header_windowHeader {
                background: ${config.borderColor || '#2C2C2C'};
                top: 0;
                left: 0;
                right: 0;
            }
            .term_term {
                opacity: 0.7;
            }
            .term_active .term_term {
                opacity: 1;
            }
            .tab_tab {
                padding: 0;
                border-width: 0 0 1px;
                background: ${config.borderColor || '#2C2C2C'};
            }
            .tab_tab.tab_active {
                border-bottom-color: #FAFAFA !important;
            }
            .tab_tab .tab_icon {
                opacity: 0.25;
                transform: none;
                width: 18px;
                height: 18px;
                margin-top: -5px !important;
                margin-right: 6px;
            }
            .tab_tab .tab_icon svg {
                width: 10px;
                height: 10px;
            }
            .tab_tab .tab_textInner {
                left: 8px;
                right: 32px;
                opacity: 0.5;
            }
            .tab_active .tab_textInner,
            .tab_tab .tab_iconHovered {
                opacity: 1;
            }
            .tabs_nav,
            .tabs_list,
            .tab_text,
            .header_windowHeader,
            .header_windowControls,
            .header_shape {
                height: 29px;
                line-height: 27px;
            }
            .tabs_nav {
                /*
                position: relative;
                top: 0;
                left: 32px;
                width: auto;
                -webkit-app-region: no-drag;
                right: 200px;
                */
                top: 28px;
                margin: 0 -1px;
            }
            .terms_termsNotShifted {
                margin-top: 28px;
            }
            .terms_termsShifted {
                margin-top: 57px;
            }
            .header_shape {
                padding: 9px 17px;
                width: 45px;
            }
            .header_windowControls {
                width: 138px;
            }
            .header_shape + .header_shape {
                background: red;
            }
            .header_shape:hover {
                background-color: hsla(0, 0%, 100%, .1);
                opacity: 0.5;
            }
            .header_closeWindow .header_shape:hover {
                background-color: rgba(232, 17, 35, .9);
                opacity: 1;
            }
            .header_hamburgerMenuLeft {
                width: 32px;
                padding: 9px;
            }
            ${config.css || ''}
        `
    });
};
