import React from 'react'

const getErrorMessage = (err, fallback) => {
const data = err.response?.data;
    if (typeof data === 'string' && data) return data;
    return data?.message || err.message || fallback;
}

export default getErrorMessage
