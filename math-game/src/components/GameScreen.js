import React from 'react';
import { useSelector } from 'react-redux';

export default function GameScreen() {
    const name = useSelector((state) => state.name);
    return <div>Welcome to math game {name}!</div>;
}
