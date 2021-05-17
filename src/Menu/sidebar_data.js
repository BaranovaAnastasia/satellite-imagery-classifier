import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';

export const HomeLayersSidebarData = [
    {
        id: 'upload',
        title: 'Upload a layer',
        path: '/',
        icon: <IoIcons.IoCloudUploadOutline/>,
        cName: 'nav-text'
    },
    {
        id: 'select',
        title: 'Select dataset',
        path: '/',
        icon: <BiIcons.BiSelectMultiple/>,
        cName: 'nav-text'
    },
    {
        id: 'download',
        title: 'Download layers',
        path: '/',
        icon: <BiIcons.BiCloudDownload/>,
        cName: 'nav-text'
    }
];


export const OnlyHomeSidebarData = [
    {
        id: 'home',
        title: 'Home',
        path: '/',
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
        title: 'Team',
        path: '/team',
        icon: <BsIcons.BsPeople/>,
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
