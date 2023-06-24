import React from 'react'
import './About.css'
import images from '../../constants/images';

const About = () => {
  return (
    <div className='aboutpage'>
        <div className='image'>
        <img className='imageabout'src={images.two} alt="about image" width={600} height={500}/>
        </div>
        <div className='aboutblock'>
            <div className='aboutheading'>Your Personal Finance Tracker</div>
            <div className='aboutcontent'>Effective finance management and keeping track of your expenses is an important part of managing 
one’s overall finances. A digital expense tracker would thus save 
time and provide the user with a responsible lifestyle to keep a track of the income and expenses
that help user/organizations make better decisions and choose finer alternatives.</div>
            <div className='aboutheading'>Key Features and Functionality</div>
            <div className='aboutcontent'>Our web applicaion is designed to help individuals manage their personal finances. It allows users to track
             their income, expenses, and budgets conveniently and in real-time.Our application also provides blogs and articles on various topics for 
             better finance management.</div>
            <div className='aboutheading'>Our USP</div>
            <div className='aboutcontent'>Easy to use UI design with quick functionalities to track one's expenses and availability of numerous blogs on 
            various financing topics to learn more about budgeting and investments.</div>
        <br/><br/><br/><br/>
        </div>
        
    </div>
  )
}

export default About
