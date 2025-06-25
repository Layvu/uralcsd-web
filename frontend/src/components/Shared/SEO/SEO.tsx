import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
    path?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, path }) => {
    const baseUrl = 'https://uralcsd.com';
    const fullUrl = path ? `${baseUrl}${path}` : baseUrl;

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
