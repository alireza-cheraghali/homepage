import React from "react";

export function MiddleMainPannel() {
    return(
        <div className='columns is-marginless'>
                <div className='column panel color-background-sidebar space-left right-middle-pannel is-12-mobile'style={{height:288,borderRadius:30}}>

                    <div className='has-text-weight-boldest  is-size-5 is-flex-row-start space'><span className='space-left mi-delete'/>نشان های افتخار من </div>
                    <div className='mi-delete is-size-1 is-flex-row-center'style={{opacity:0.2}}>
                    </div>
                    <span className='is-flex-row-center has-text-weight-boldest is-size-3'>هیچوقت دیر نیست!</span>
                    <span className='is-flex-row-center is-size-6 half-space-top'style={{color: '#7F7F82'}}>هنوز هیچ نشان افتخاری نداری اما میتونی از همین الان شروع کنی</span>
                    <div className='is-flex-column-center space-top'>
                    <button className='button button-style is-medium has-text-weight-boldest has-text-white '>قهرمان شو</button>
                    </div>
                </div>
                <div className='column panel color-background-sidebar left-middle-pannel'style={{}}>
                    <div className='columns is-flex'>
                        <div className='column is-flex-row-start is-6 half-space-right'>
                            <span className='mi-calendar is-size-4'/>
                            <span className='has-text-weight-boldest m--has-no-wrap has-text-black space-right'style={{fontSize:15}}>بررسی دوره ها</span>
                        </div>
                        <div className='column is-flex-row-end is-6'>
                            <a className='button chartbutton color-background-sidebar space-left is-flex-row-start'>
                                <span className='is-flex-row-start has-text-weight-boldest'style={{fontSize:10}}>دوره 15</span>
                                <span className='mi-arrow-down is-flex-row-end half-space-right'/>
                            </a>
                        </div>
                    </div>
                    <div className='columns is-multiline is-mobile'>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column'>
                                    <div>برگزاری</div>
                                    <div className='is-flex-row-start'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>0</span>
                                        <span className='half-space-right purple-circle'/>
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل 124</div>
                                </div>
                                <div className='column m--position-relative'>
                                    <span className='mi-like coursereviews-icon-position'/>
                                </div>
                            </div>
                        </button>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column '>
                                    <div>درآمد (تومان)</div>
                                    <div className='is-flex-row-start'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>-2</span>
                                        <span className='half-space-right mi-arrow-down coursereviews-arrow-down-style'></span>
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل 12,355</div>
                                </div>
                                <div className='column m--position-relative'>
                                    <span className='mi-like coursereviews-icon-position'/>
                                </div>
                            </div>
                        </button>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column '>
                                    <div>اعتبار</div>
                                    <div className='is-flex-row-start'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>+4</span>
                                        <span className='half-space-right mi-arrow-up coursereviews-arrow-up-style'></span>
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل 2435</div>
                                </div>
                                <div className='column m--position-relative'>
                                    <span className='mi-like coursereviews-icon-position'/>
                                </div>
                            </div>
                        </button>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column '>
                                    <div>گزارش خطا</div>
                                    <div className='is-flex-row-start'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>-27</span>
                                        <span className='half-space-right mi-arrow-down coursereviews-arrow-down-style'></span>
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل -27</div>
                                </div>
                                <div className='column m--position-relative'>
                                    <span className='mi-like coursereviews-icon-position'/>
                                </div>
                            </div>
                        </button>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column '>
                                    <div>تالیف</div>
                                    <div className='is-flex-row-start'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>+25</span>
                                        <span className='half-space-right mi-arrow-up coursereviews-arrow-up-style' />
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل 143657</div  >
                                </div>
                                <div className='column m--position-relative'>
                                    <span className='mi-like coursereviews-icon-position'/>
                                </div>
                            </div>
                        </button>
                        <button className='column is-narrow half-space-right button coursereviews-style'>
                            <div className='columns'>
                                <div className='column '>
                                    <div>توصیه</div>
                                    <div className='is-flex-row-start'>
                                        <span className='has-text-weight-boldest is-size-4 has-text-black'style={{fontSize:30}}>0</span>
                                        <span className='half-space-right purple-circle'></span>
                                    </div>
                                    <div className='has-text-black is-size-6 has-text-weight-bold'>کل 0</div>
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