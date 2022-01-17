import React from 'react';
import Tweet from './tweet'

const Tweets = (props) => {
    const tweets =[{name: 'Raveesh', tweet: 'tired :((('},
    {name: 'media', tweet:':D'},
    {name: 'wedsimp', tweet:'trying to be happy'}];


return (
    <section>
    {tweets.map ((tweet) => (
    <Tweet name = {tweet.name} tweet ={tweet.tweet}/>
    
    ))}
    
    </section>
    );
};
export default Tweets;