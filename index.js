const schemes = {
    tango: {
        titlebarBackground: "#2e3436",
        tabbarBackground: "#272c2e",
        uiBorderColor: '#1b1f20',
        uiAccentColor: '#3465a4',
        backgroundColor: "#232729",
        foregroundColor: "#cccccc",
        colors: {
            black: '#1b1f20',
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
        }
    },
    vscode: {
        titlebarBackground: "#333333",
        tabbarBackground: "#252525",
        uiBorderColor: '#1B1B1B',
        uiAccentColor: '#2472c8',
        backgroundColor: "#1e1e1e",
        foregroundColor: "#cccccc",
        colors: {
            black: "#1B1B1B",
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
    },
    materia: {
        titlebarBackground: "#383838",
        tabbarBackground: "#2C2C2C",
        uiBorderColor: '#1B1B1B',
        uiAccentColor: '#CCCCCC',
        backgroundColor: "#282828",
        foregroundColor: "#CCCCCC",
        colors: {
            black: "#1c1c1c",
            red: "#B71C1C",
            green: "#5a8744",
            yellow: "#CC8820",
            blue: "#3761A4",
            magenta: "#9C27B0",
            cyan: "#0097A7",
            white: "#9E9E9E",
            lightBlack: "#666666",
            lightRed: "#FF5252",
            lightGreen: "#88C36A",
            lightYellow: "#FFCC80",
            lightBlue: "#6C9AE5",
            lightMagenta: "#CE93D8",
            lightCyan: "#26C6DA",
            lightWhite: "#f5f5f5",
        }
    },
}

exports.decorateConfig = config => {
    const scheme = schemes.materia;
    const titleHeight = 29;
    const tabHeight = 32;

    config.backgroundColor = scheme.backgroundColor;
    config.foregroundColor = scheme.foregroundColor;
    config.borderColor = scheme.titlebarBackground;
    config.cursorColor = 'rgba(255, 255, 255, 0.75)';
    config.selectionColor = 'rgba(255, 255, 255, 0.25)';
    config.showHamburgerMenu = true;
    config.cursorBlink = true;
    config.padding = '2px';
    config.colors = scheme.colors;
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
            border-bottom: 0.1px solid ${scheme.uiBorderColor} !important;
        }
        .header_windowHeader,
        .header_windowControls,
        .header_shape {
            height: ${titleHeight}px;
            line-height: ${titleHeight}px;
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

        .tabs_nav {
            top: ${titleHeight}px;
            margin: 0 -1px;
        }
        .tabs_nav,
        .tabs_list,
        .tab_text {
            height: ${tabHeight}px;
            line-height: 27px;
        }
        .tab_tab {
            padding: 0;
            border-color: ${scheme.uiBorderColor} !important;
            border-width: 0.5px;
            border-top: 1px solid ${scheme.tabbarBackground} !important;
            background: ${scheme.tabbarBackground};
        }
        .tab_tab.tab_active {
            border-top: 2px solid ${scheme.uiAccentColor} !important;
            margin-top: -1px;
            border-bottom: 0 !important;
            background-color: ${config.backgroundColor};
        }
        .tab_tab .tab_icon {
            opacity: 0.25;
            transform: none;
            width: 16px;
            height: 16px;
            margin-top: -4px !important;
            margin-right: 2px;
        }
        .tab_tab .tab_icon svg {
            width: 8px;
            height: 8px;
        }
        .tab_tab .tab_textInner {
            left: 8px;
            right: 32px;
            opacity: 0.67;
        }
        .tab_active .tab_textInner,
        .tab_tab .tab_iconHovered {
            opacity: 1;
        }

        .terms_termsNotShifted {
            margin-top: ${titleHeight}px;
            animation: none;
        }
        .terms_termsShifted {
            margin-top: ${titleHeight + tabHeight}px;
            animation: none;
        }
        .term_term {
            opacity: 0.75;
        }
        .term_active .term_term {
            opacity: 1;
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
