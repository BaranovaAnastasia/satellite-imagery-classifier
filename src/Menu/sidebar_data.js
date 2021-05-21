import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';

export const HomeLayersSidebarData = [
    {
        id: 'upload',
        title: 'Upload a layer',
        icon: <IoIcons.IoCloudUploadOutline/>,
        cName: 'nav-text'
    },
    {
        id: 'select',
        title: 'select dataset',
        icon: <BiIcons.BiSelectMultiple/>,
        cName: 'nav-text'
    },
    {
        id: 'download',
        title: 'Download layers',
        icon: <BiIcons.BiCloudDownload/>,
        cName: 'nav-text'
    }
];


export const OnlyHomeSidebarData = [
    {
        id: 'home',
        title: 'Home',
        path: '/home',
        icon: <BiIcons.BiHome/>,
        cName: 'nav-text'
    }
];


export const OtherSidebarData = [
    {
        title: 'About',
        path: '/about',
        icon: <BiIcons.BiInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contacts',
        icon: <BiIcons.BiMessage/>,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <AiIcons.AiOutlineQuestionCircle/>,
        cName: 'nav-text'
    }
];
