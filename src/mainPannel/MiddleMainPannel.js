import React from "react";

export function MiddleMainPannel() {
    return(
        <div className='columns is-marginless'>
                <div className='column panel color-background-sidebar space-left'style={{height:288,borderRadius:30}}>

                    <div className='has-text-weight-boldest is-size-5 is-flex-row-start space'><span className='space-left mi-delete'></span>نشان های افتخار من </div>
                    <div className='mi-delete is-size-1 is-flex-row-center'style={{opacity:0.2}}>
                    </div>
                    <span className='is-flex-row-center has-text-weight-boldest is-size-3'>هیچوقت دیر نیست!</span>
                    <span className='is-flex-row-center is-size-6 half-space-top'style={{color: '#7F7F82'}}>هنوز هیچ نشان افتخاری نداری اما میتونی از همین الان شروع کنی</span>
                    <div className='is-flex-column-center space-top'>
                    <button className='button button-style is-medium has-text-weight-boldest has-text-white '>قهرمان شو</button>
                    </div>
                </div>
                <div className='column panel color-background-sidebar is-6'style={{height:288,borderRadius:30}}>
                    <div className='columns'>
                        <div className='column is-flex-row-start is-6 half-space-right'>
                            <span className='mi-calendar is-size-4'/>
                            <span className='has-text-weight-boldest has-text-black space-right'style={{fontSize:15}}>بررسی دوره ها</span>
                        </div>
                        <div className='column is-flex-row-end is-6'>
                            <a className='button chartbutton color-background-sidebar space-left is-flex-row-start'>
                                <span className='is-flex-row-start has-text-weight-boldest'style={{fontSize:10}}>دوره 15</span>
                                <span className='mi-arrow-down is-flex-row-end half-space-right'/>
                            </a>
                        </div>
                    </div>
                    <div className='columns is-multiline'>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column is-paddingless'>
                                    <div>برگزاری</div>
                                    <div className='is-flex-row-center'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>0</span>
                                        <span className='half-space-right purple-circle'></span>
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل 124</div>
                                </div>
                                <div className='column m--position-relative'>
                                    <span className='mi-like coursereviews-icon-position'/>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
    )
}