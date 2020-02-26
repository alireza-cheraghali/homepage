import React, {createContext, useState} from "react";
import {SideBar} from "./SideBar";
export function NameAndImage() {
    return(
        <div >
            <div className='columns'>
                <div className='column is-narrow'>
                    <figure className="image is-90x90">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                    </figure>
                </div>
                <div className='column is-5 is-flex-row-center'>
                    <div className='tile is-parent is-vertical'>
                        <div className='tile has-text-weight-boldest  is-marginless-bottom'style={{fontSize:20}}>فرید یوسفی</div>
                        <div className='tile half-space-top has-text-grey-dark is-size-6'>مدرسه دولتی / تهران </div>
                    </div>
                </div>
                <div className='column is-flex-column-center'>
                    <div className='columns is-flex-row-center'>
                    <div className='column is-paddingless'>
                        <div className='circle'><span className='is-flex-row-center' >12</span></div>
                    </div>
                    <div className='column'><div className='mi-arrow-left'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}