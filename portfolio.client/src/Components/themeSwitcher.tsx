import React, { useState } from 'react';
import useDarkMode from './useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function themeSwitcher() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div>
                <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
            </div>
        </>
    );
}