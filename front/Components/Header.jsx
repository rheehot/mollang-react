import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className='logo'><Link href='/'><a>로고</a></Link></div>
            {/*<div className='search-box'>
                <input type="text" placeholder='검색' />
            </div>*/}
            <div className='header account'>
                <div><Link href='/login'><a>로그인</a></Link></div>
                {/*<div><Link href='/signup'><a>회원가입</a></Link></div>*/}
            </div>
            <div className='header links'>
                <nav>
                    <div><Link href='/profile'><a>프로필</a></Link></div>
                    <div><Link href='/blog/index'><a>블로그</a></Link></div>
                    {/* <div><Link href='/about'><a>작품들</a></Link></div>
                    <div><Link href='/about'><a>깃허브</a></Link></div> */}
                    <div><Link href='/blogAdmin'><a>블로그 관리자</a></Link></div>
                </nav>
            </div>

        </>
    );
};

export default Header;