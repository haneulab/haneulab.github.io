import React from 'react';

interface SEOComponentProps {
  title: string;
  description: string;
  keywords: string[];
}
export type SEOComponentType = React.FC<SEOComponentProps>;
