import React from 'react';

const GetUsername = ({ onChange }) => (
    <input type="text" name="username" onChange={(e) => onChange(e.target.value)} />
);


export default GetUsername 