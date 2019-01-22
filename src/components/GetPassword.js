import React from 'react';

const GetPassword = ({ onChange }) => (
    <input type="password" name="password" onChange={(e) => onChange(e.target.value)} />
);


export default GetPassword 