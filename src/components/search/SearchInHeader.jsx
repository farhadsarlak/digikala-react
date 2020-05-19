import React from 'react';
import { Input } from 'semantic-ui-react';


const SearchInHeader = ({ width }) => {

    return (
        <Input
            style={{ width: width }}
            size="small"
            icon="search"
            iconPosition="left"
            placeholder="جستجو در دیجی کالا..."
        />
    )
}

export default SearchInHeader;