import React from 'react'
import './App.css';

export default function Jobs() {
    // jobs array
    const jobs=[
        {
            profile: '/images/photosnap.svg',
            jobName: 'Senior Frontend Developer',
            duration: '1d ago',
            workTime: 'Full Time',
            location: 'USA only',
            workPlace: 'Photosnap',
            new: 'New!',
            featured: 'Featured',
            level: 'Frontend Senior HTML CSS JavaScript'
        },
        {
            profile: '/images/manage.svg',
            jobName: 'Fullstack Developer',
            duration: '1d ago',
            workTime: 'Part Time',
            location: 'Remote',
            workPlace: 'Manage',
            new: 'New!',
            featured: 'Featured',
            level: 'Fullstack Midweight Python React'
        },
        {
            profile: '/images/account.svg',
            jobName: 'Junior Frontend Developer',
            duration: '2d ago',
            workTime: 'Part Time',
            location: 'USA only',
            workPlace: 'Account',
            new: 'New!',
            level: 'Frontend Junior JavaScript React Sass'
        },
        {
            profile: '/images/myhome.svg',
            jobName: 'Junior Frontend Developer',
            duration: '5d ago',
            workTime: 'Contract',
            location: 'USA only',
            workPlace: 'MyHome',
            level: 'Frontend Junior CSS JavaScript'
        },
        {
            profile: '/images/loop-studios.svg',
            jobName: 'Software Engineer',
            duration: '1w ago',
            workTime: 'Full Time',
            location: 'Worldwide',
            workPlace: 'Loop Studios',
            level: 'Fullstack Midweight JavaScript Sass Ruby'
        },
        {
            profile: '/images/faceit.svg',
            jobName: 'Junior Backend Developer',
            duration: '2w ago',
            workTime: 'Full Time',
            location: 'UK only',
            workPlace: 'FaceIt',
            level: 'Backend Junior Ruby RoR'
        },
        {
            profile: '/images/shortly.svg',
            jobName: 'Junior Developer',
            duration: '2w ago',
            workTime: 'Full Time',
            location: 'Worldwide',
            workPlace: 'Shortly',
            level: 'Frontend Junior HTML Sass JavaScript'
        },
        {
            profile: '/images/insure.svg',
            jobName: 'Junior Frontend Developer',
            duration: '2w ago',
            workTime: 'Full Time',
            location: 'USA only',
            workPlace: 'Insure',
            level: 'Frontend Junior JavaScript Vue Sass'
        },
        {
            profile: '/images/eyecam-co.svg',
            jobName: 'Full Stack Engineer',
            duration: '3w ago',
            workTime: 'Full Time',
            location: 'Worldwide',
            workPlace: 'Eyecam Co.',
            level: 'Fullstack Midweight JavaScript Python Django'
        },
        {
            profile: '/images/the-air-filter-company.svg',
            jobName: 'Front-end Dev',
            duration: '1mo ago',
            workTime: 'Part Time',
            location: 'Worldwide',
            workPlace: 'The Air Filter Company',
            level: 'Frontend Junior JavaScript React Sass'
        }
    ]

  // Function to split the level into words and wrap them in span with a background color
  const renderLevelWithBackground = (level) => {
    return level.split(' ').map((word, index) => (
      <span key={index} className="level-word">
        {word}
      </span>
    ));
  };

  return (
    <div className='jobs'>
      {jobs.map((job) =>{
        return(
            <div className='job'>
                <div className='user-details'>
                    <img src={job.profile} alt={job.workPlace} />
                    <div className='details'>
                        <div className='workplace'>
                            <h4>{job.workPlace}</h4>
                            <h3>{job.new}</h3>
                            <h3>{job.featured}</h3>
                        </div>
                        <h3>{job.jobName}</h3>
                        <div className='work-details'>
                            <p>{job.duration}</p>
                            <li>{job.workTime}</li>
                            <li>{job.location}</li>
                        </div>
                    </div>
                </div>
                <div className='languages'>
                    <h4>{renderLevelWithBackground(job.level)}</h4>
                </div>
            </div>
        )
      })}
    </div>
  )
}
