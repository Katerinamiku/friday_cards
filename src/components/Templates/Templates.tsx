import React from 'react';
import SuperInputText from "./SuperComponents/SuperInputText/SuperInputText";
import SuperCheckbox from "./SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "./SuperComponents/SuperButton/SuperButton";
import s from './Templates.module.css';

const Templates = () => {
    return (
        <div className={s.templatesContainer}>
            <div>
                <SuperInputText className={'superInput'}/>
            </div>
            <div>
                <SuperCheckbox>Some text</SuperCheckbox>
            </div>
            <div>
                <SuperButton>
                    button
                </SuperButton>
            </div>
        </div>
    );
};

export default Templates;
