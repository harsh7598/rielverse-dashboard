import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Load the Google Translate script
        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);
        };

        // Initialize the Google Translate widget
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: true,
                includedLanguages: 'en,zh-CN,km',
                layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
            }, 'google_translate_element');
        };

        addGoogleTranslateScript();
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;