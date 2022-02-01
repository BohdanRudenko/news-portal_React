import React from 'react';

import './style.scss';

interface IPageTitleParams {
    title: JSX.Element;
}

const PageTitle: React.FC<IPageTitleParams> = ({ title }) => <div className='pageTitle'>{title}</div>

export default PageTitle;