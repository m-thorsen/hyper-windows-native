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
    campbell: {
        titlebarBackground: "#1f1f1f",
        tabbarBackground: "#1f1f1f",
        uiBorderColor: '#1f1f1f',
        uiAccentColor: '#0078d7',
        backgroundColor: "#0C0C0C",
        foregroundColor: "#CCCCCC",
        colors: {
            black: "#0C0C0C",
            red: "#C50F1F",
            green: "#13A10E",
            yellow: "#C19C00",
            blue: "#0037DA",
            magenta: "#881798",
            cyan: "#3A96DD",
            white: "#CCCCCC",
            lightBlack: "#767676",
            lightRed: "#E74856",
            lightGreen: "#16C60C",
            lightYellow: "#F9F1A5",
            lightBlue: "#3B78FF",
            lightMagenta: "#B4009E",
            lightCyan: "#61D6D6",
            lightWhite: "#F2F2F2",
        }
    },
}

exports.decorateConfig = config => {
    const themeSettings = {
        scheme: 'materia',
        tabSize: 32,
        ...config.windowsNative,
    };

    const currentScheme = schemes[themeSettings.scheme];
    const titlebarSize = 29;

    config.backgroundColor = currentScheme.backgroundColor;
    config.foregroundColor = currentScheme.foregroundColor;
    config.borderColor = currentScheme.titlebarBackground;
    config.cursorColor = 'rgba(255, 255, 255, 0.75)';
    config.selectionColor = 'rgba(255, 255, 255, 0.25)';
    config.showHamburgerMenu = true;
    config.cursorBlink = true;
    config.padding = '2px';
    config.colors = currentScheme.colors;
    config.useConpty = true;
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
            border-bottom: 0.1px solid ${currentScheme.uiBorderColor} !important;
        }
        .header_windowHeader,
        .header_windowControls,
        .header_shape {
            height: ${titlebarSize}px;
            line-height: ${titlebarSize}px;
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
            top: ${titlebarSize - 1}px;
            margin: 0 -1px;
        }
        .tabs_nav,
        .tabs_list,
        .tab_text {
            max-height: ${themeSettings.tabSize}px;
            height: ${themeSettings.tabSize}px;
            line-height: ${themeSettings.tabSize}px;
        }
        .tab_tab {
            padding: 0;
            border-color: ${currentScheme.uiBorderColor} !important;
            border-width: 0.5px;
            border-top: 1px solid ${currentScheme.tabbarBackground} !important;
            background: ${currentScheme.tabbarBackground};
        }
        .tab_tab.tab_active {
            border-top: 2px solid ${currentScheme.uiAccentColor} !important;
            margin-top: -1px;
            border-bottom: 0 !important;
            background-color: ${currentScheme.backgroundColor};
        }
        .tab_tab .tab_icon {
            opacity: 0.25;
            transform: none;
            width: 16px;
            height: 16px;
            top: 50%;
            margin-top: 0 !important;
            margin-right: 2px;
            transform: translateY(-50%);
        }
        .tab_tab .tab_icon svg {
            width: 8px;
            height: 8px;
        }
        .tab_tab .tab_textInner {
            line-height: 1em;
            height: 1.4em;
            top: 50%;
            left: 8px;
            right: 32px;
            transform: translateY(-50%);
            opacity: 0.67;
        }
        .tab_active .tab_textInner,
        .tab_tab .tab_iconHovered {
            opacity: 1;
        }

        .terms_termsNotShifted {
            margin-top: ${titlebarSize - 1}px;
            animation: none;
        }
        .terms_termsShifted {
            margin-top: ${titlebarSize + themeSettings.tabSize - 1}px;
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
