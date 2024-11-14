import React, { useState } from 'react';
import data from './data.json';
import './App.css';

export default function Jobs() {
  // State to manage the filter criteria 
  const [filters, setFilters] = useState({
    role: '', // Filter for job role 
    languages: '' // filter for languages
  });

  
  // Filter the job data based on the selected filter criteria
  const filteredJobs = data.filter((job) => {
    return (
      // If a role filter is set, only include jobs with that role
      (filters.role ? job.role.toLowerCase() === filters.role.toLowerCase() : true) &&

      // If a languages filter is set, only include jobs with that language
      (filters.languages ? job.languages.some(lang => lang.toLowerCase() === filters.languages.toLowerCase()) : true)
    );
  });

  // Handler function to update the filter state when a user selects a filter option
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // Update the specific filter
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value, //update the correct filter
    }));
  };

  console.log(filters)

  return (
    <div className="jobs">
      <div className="filters">
        {/* Filter for job role */}
        <select
          name="role" // Name of the filter 
          value={filters.role} // The current value of this filter
          onChange={handleFilterChange}
        >
          <option value="">All Roles</option> {/* Option for no role filter */}
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>

        {/* Filter for languages */}
        <select
          name="languages" // Name of the filter 
          value={filters.languages} // The current value of this filter
          onChange={handleFilterChange}
        >
          <option value="">All Languages</option> {/* Option for no languages filter */}
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>

      {/* Display the filtered job listings */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className="job">
            {/* Job details */}
            <div className="user-details">
              <img src={job.logo} alt={job.company} />
              <div className="details">
                <div className='company'>
                  <h4>{job.company}</h4>
                </div>
                <h3 className="job-title">{job.position}</h3>
                <div className="work-details">
                  <p>{job.postedAt}</p>
                  <li>{job.contract}</li>
                  <li>{job.location}</li>
                </div>
              </div>
            </div>

            {/* Job languages and tools */}
            <div className="languages">
              <h4>{job.role}</h4>
              <h4>{job.level}</h4>
              <ul className="language-list">
                {job.languages.map((language, index) => (
                  <h4 key={index}>{language}</h4>
                ))}
              </ul>
              <h4>{job.tools.join(' ')}</h4>
            </div>
          </div>
        ))
      ) : (
        <p>No jobs found matching your search.</p> // Message when no jobs match the filters
      )}
    </div>
  );
}
