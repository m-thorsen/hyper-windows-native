const schemes = {
    tango: {
        title: "#2e3436",
        background: "#181D20",
        foreground: "#babdb6",
        black: '#2e3436',
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
    },
    vscode: {
        title: "#333333",
        tabs: "#252525",
        background: "#1e1e1e",
        foreground: "#BDBDBD",
        black: "#000000",
        red: "#cd3131",
        green: "#0dbc79",
        yellow: "#e5e510",
        blue: "#2472c8",
        magenta: "#bc3fbc",
        cyan: "#11a8cd",
        white: "#e5e5e5",
        lightBlack: "#666666",
        lightRed: "#f14c4c",
        lightGreen: "#23d18b",
        lightYellow: "#f5f543",
        lightBlue: "#3b8eea",
        lightMagenta: "#d670d6",
        lightCyan: "#29b8db",
        lightWhite: "#f5f5f5",
    }
}

exports.decorateConfig = config => {
    const scheme = schemes.tango;

    config.backgroundColor = scheme.background;
    config.foregroundColor = scheme.foreground;
    config.borderColor = scheme.title;
    config.cursorColor = 'rgba(255, 255, 255, 0.75)';
    config.selectionColor = 'rgba(255, 255, 255, 0.25)';
    config.showHamburgerMenu = true;
    config.cursorBlink = true;
    config.padding = '2px';
    config.colors = scheme;

    config.css = `
        svg {
            shape-rendering: geometricPrecision !important;
        }
        .hyper_main {
            border-width: 0 !important;
            background: ${config.backgroundColor};
        }
        .header_windowHeader {
            background: ${config.borderColor};
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
            border: 0 !important;
            background: ${scheme.tabs || config.borderColor};
        }
        .tab_tab.tab_active {
            border-top: 1px solid ${scheme.blue} !important;
            background-color: ${config.backgroundColor};
        }
        .tab_tab .tab_icon {
            opacity: 0.25;
            transform: none;
            width: 16px;
            height: 16px;
            margin-top: -4px !important;
            margin-right: 6px;
        }
        .tab_tab .tab_icon svg {
            width: 8px;
            height: 8px;
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
            animation: none;
        }
        .terms_termsShifted {
            margin-top: 57px;
            animation: none;
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
        ${config.cxss || ''}
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
