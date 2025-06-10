import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
    path?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, path }) => {
    // TODO: сменить на uralcsd
    const baseUrl = 'https://vm-272e5375.na4u.ru';
    const fullUrl = path ? `${baseUrl}${path}` : baseUrl;

    // TODO: remove
    console.log(`--\nSEO: ${fullUrl}\n\ntitle: ${title}\n\ndescription: ${description}\n\nkeywords: ${keywords}\n--`);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {path && <link rel="canonical" href={fullUrl} />}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};
