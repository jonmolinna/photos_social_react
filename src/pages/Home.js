import React from 'react';
import BodyPages from '../Layout/BodyPages';
import Card from '../components/Card';

const Home = () => {

    return (
        <BodyPages>
            <div className='pt-20'>
                <div className='space-y-4'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </BodyPages>
    )
};

export default Home;