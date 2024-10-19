import React from 'react';

const SkeletonHTML = () => {

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="media">
                <div className='skeleton__img'/> 
                <div className='skeleton__title'/> 
                <div className='skeleton__type'/> 
                <div className='skeleton__year'/> 
            </div>
    );
}

export default SkeletonHTML;
