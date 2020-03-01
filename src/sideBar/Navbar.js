import React, {useState} from "react";
export function Navbar() {
    var [clicked,setClicked]=useState('Home');
    return(
        <div className='color-background-sidebar wrapped-flex'style={{marginTop:51}}>
            <div className='column has-text-weight-boldest is-size-5 is-12'style={{color:'#98989F'}}>
                دم دستی
            </div>
            <div className='column is-12 is-12-mobile'>
                <button className={clicked==='Home'?
                    'button is-flex-row-start navbar-style-clicked':
                    'button is-flex-row-start navbar-style'}
                        value={'Home'}
                        onClick={(e)=>setClicked(e.currentTarget.value)}>
                <a className={clicked==='Home'?'is-flex-row-start has-text-white':'is-flex-row-start has-text-black'} href={'#'}>
                    <span className='mi-like is-size-5 space-right'/>
                    <span className='space-right has-text-weight-boldest is-font-size-15'>خانه</span>
                </a>
                </button>
            </div>
            <div className='column is-12 is-12-mobile'>
                <button className={clicked==='Buy'?
                    'button is-flex-row-start navbar-style-clicked':
                    'button is-flex-row-start navbar-style'}
                        value={'Buy'}
                        onClick={(e)=>setClicked(e.currentTarget.value)}>
                    <a className={clicked==='Buy'?'is-flex-row-start has-text-white':'is-flex-row-start has-text-black'}href={'#'}>
                        <span className={clicked==='Buy'?'mi-shop-white is-size-5 space-right ':'mi-shop-dark is-size-5 space-right'}/>
                        <span className='space-right has-text-weight-boldest is-font-size-15'>خرید</span>
                    </a>
                </button>
            </div>
            <div className='column is-12 is-12-mobile'>
                <button className={clicked==='SearchUser'?
                    'button is-flex-row-start navbar-style-clicked':
                    'button is-flex-row-start navbar-style'}
                        value={'SearchUser'}
                        onClick={(e)=>setClicked(e.currentTarget.value)}>
                    <a className={clicked==='SearchUser'?'is-flex-row-start has-text-white':'is-flex-row-start has-text-black'}href={'#'}>
                        <span className={clicked=='SearchUser'?'mi-search is-size-5 space-right has-text-white ':'mi-search is-size-5 space-right has-text-black '}/>
                        <span className='space-right has-text-weight-boldest is-font-size-15'>جستجوی کاربر</span>
                    </a>
                </button>
            </div>
            <div className='column is-12 is-12-mobile'>
                <button className={clicked==='Invite'?
                    'button is-flex-row-start navbar-style-clicked':
                    'button is-flex-row-start navbar-style'}
                        value={'Invite'}
                        onClick={(e)=>setClicked(e.currentTarget.value)}>
                    <a className={clicked==='Invite'?'is-flex-row-start has-text-white':'is-flex-row-start has-text-black'}href={'#'}>
                        <span className={clicked==='Invite'?'mi-invite is-size-5 space-right has-text-white':'mi-invite is-size-5 space-right has-text-black'}/>
                        <span className='space-right has-text-weight-boldest is-font-size-15'>دعوت از دوستان</span>
                    </a>
                </button>
            </div>
            <div style={{marginTop:72}}>
            <div className='has-text-weight-boldest space-right space-bottom is-size-5 is-12'style={{color:'#98989F'}}>
                میزکار
            </div>
            <nav className="navbar space-right space-top wrapped-flex color-background-sidebar">
                <div className="navbar-item has-dropdown is-hoverable space-top space-bottom"style={{width:'-webkit-fill-available'}}>
                    <a className=" columns has-text-black is-flex is-full-desktop"style={{width:'-webkit-fill-available'}}>
                        <span className='column is-flex-row-start has-text-weight-boldest is-font-size-15'>
                        ارزیابی
                        </span>
                        <span className='mi-arrow-left is-flex-row-end'/>
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            Overview
                        </a>
                </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable space-top space-bottom"style={{width:'-webkit-fill-available'}}>
                    <a className=" columns has-text-black is-flex"style={{width:'-webkit-fill-available'}}>
                        <span className='column is-flex-row-start has-text-weight-boldest is-font-size-15'>
                        آموزش
                        </span>
                        <span className='mi-arrow-left is-flex-row-end'/>
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            Overview
                        </a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable space-top space-bottom"style={{width:'-webkit-fill-available'}}>
                    <a className=" columns has-text-black is-flex"style={{width:'-webkit-fill-available'}}>
                        <span className='column is-flex-row-start has-text-weight-boldest is-font-size-15 is-11'>
                        تحلیل و مشاوره
                        </span>
                        <span className='mi-arrow-left is-flex-row-end column'/>
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                        Overview
                        </a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable space-top space-bottom"style={{width:'-webkit-fill-available'}}>
                    <a className=" columns has-text-black is-flex"style={{width:'-webkit-fill-available'}}>
                        <span className='column is-flex-row-start has-text-weight-boldest is-font-size-15'>
                      ثبت اطلاعات
                        </span>
                        <span className='mi-arrow-left is-flex-row-end'/>
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            Overview
                        </a>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}