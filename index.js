exports.decorateConfig = config => {
    config.backgroundColor = '#1C1C1C';
    config.foregroundColor = '#BDBDBD';
    config.cursorColor = 'rgba(255, 255, 255, 0.75)';
    config.selectionColor = 'rgba(255, 255, 255, 0.25)';
    config.showHamburgerMenu = true;
    config.cursorBlink = true;
    config.padding = '2px';

    config.colors = {
        black: '#000000',
        red: '#cc0000',
        green: '#4e9a06',
        yellow: '#c4a000',
        blue: '#3465a4',
        magenta: '#75507b',
        cyan: '#06989a',
        white: '#E0E0E0',
        lightBlack: '#616161',
        lightRed: '#ef2929',
        lightGreen: '#8ae234',
        lightYellow: '#fce94f',
        lightBlue: '#729fcf',
        lightMagenta: '#ad7fa8',
        lightCyan: '#34e2e2',
        lightWhite: '#eeeeec',
    };

    config.css = `
        svg {
            shape-rendering: geometricPrecision !important;
        }
        .hyper_main {
            border-width: 0 !important;
            background: ${config.backgroundColor};
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
    `;

    return { ...config };
};

exports.decorateKeymaps = keymaps => {
    keymaps["pane:splitVertical"] = "ctrl+alt+r";
    keymaps["pane:splitHorizontal"] = "ctrl+alt+d";
    keymaps["pane:prev"] = "ctrl+alt+left";
    keymaps["pane:next"] = "ctrl+alt+right";

    return { ...keymaps };
};
