import React from "react";
import { useTranslation } from "react-i18next";
import Shape from './Shape.svg'

function ChangeLanguage(){
    const { t, i18n } = useTranslation();

    return (
        <div onClick={()=> i18n.changeLanguage((i18n.language = i18n.language === "zh" ? "en":"zh")) }
            className='flex justify-between items-baseline border boder-lang px-2.5 py-1.2 mr-8 w-28 cursor-pointer'
        >
            { i18n.language === "zh" ? <div>English</div> : <div>中文</div>}
            <img src={Shape} alt='tabLang' />
        </div>
    )
}
export default ChangeLanguage;