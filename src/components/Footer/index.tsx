import React from "react";
import ChangeLanguage from './changeLanguage'

function Footer(): React.ReactElement {

  return (
    <div className='flex justify-between items-center px-12 py-4 w-full h-15 bg-white-light text-black-light text-xs mt-12 border-t-2 border-gray-lighter'>
      <div className='flex'>
        <div className='mr-8 cursor-pointer'>Twitter</div>
        <div className='mr-8 cursor-pointer'>GitHub</div>
        <div className='mr-8 cursor-pointer'>Telegram</div>
        <div className='mr-8 cursor-pointer'>WeChat</div>
        <div className='cursor-pointer'>hi@chainx.org</div>
      </div>
      <div className='flex items-center'>
        <ChangeLanguage />
        <div className='cursor-pointer'>Copyright © 2019 ChainX</div>
      </div>
    </div>
  );
}

export default Footer;
