import React, { useEffect, useState } from 'react';
import LanguageIcon from '../../../public/Icons/Reilverse_Assets/languageIcon.svg';
import dropdown from '../../../public/Icons/Reilverse_Assets/dropdown.svg';
import Image from 'next/image';

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH'); 

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: true,
          includedLanguages: 'en,zh-CN,km',
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        'google_translate_element',
      );
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (lang: string) => {
    const langMap: { [key: string]: string } = {
      English: 'en',
      Chinese: 'zh-CN',
      Khmer: 'km',
    };

    setSelectedLanguage(lang);
    const googleSelectElement =
      document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (googleSelectElement) {
      googleSelectElement.value = langMap[lang];
      googleSelectElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div>
      <div className='relative -mt-2'>
        <button
          className='flex items-center px-3 border-none rounded-md bg-white text-sm text-primary'
          onClick={() =>
            document
              .getElementById('custom-language-dropdown')
              ?.classList.toggle('hidden')
          }>
          <span>{selectedLanguage}</span>
          <Image
            src={LanguageIcon}
            alt='Language Icon'
            className='w-4 h-4 ml-2'
          />
          <Image src={dropdown} alt='Dropdown Icon' className='w-3 h-3 ml-2' />
        </button>
        <div
          id='custom-language-dropdown'
          className='absolute left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg hidden'>
          {['ENGLISH', 'CHINESE', 'KHMER'].map((lang) => (
            <div
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className='px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm'>
              {lang}
            </div>
          ))}
        </div>
      </div>
      <div id='google_translate_element' className='hidden'></div>
    </div>
  );
};

export default GoogleTranslate;
