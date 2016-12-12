import React from 'react';

const ProjectSection = () => {
  const projects = [
    {id: 1, 
      name: "TbTrak", 
      description: "A time and billing enterprise application built on Backbone.JS, MySQL and Node.js. TbTrack also handles generating expense reports and financial reports for an engineering company.", 
      image: "../../../images/Elegant_Background-6.jpg"
    },

    {id: 2, 
      name: "Clinic-tron", 
      description: "A content management system for a group of veterinary hospitals to track their properties, management and employees in each location. The application also supports ActiveDirectory integration for up-to-date user profiles. Built with Backbone and Node.js", 
      image: "../../../images/Elegant_Background-6.jpg"
    },
     {id: 6, 
      name: "Invoice Generator", 
      description: "An app to manage invoice generation for multiple hospital sites.  You plug in a client and a date range and an invoice is generated by Harvest/FreshBooks and tdownloads a copy of the CSV report to the client. Built in React, MySQL and Bookshelf.js.", 
      image: "../../../images/Elegant_Background-6.jpg"
    },
    {id: 3, 
      name: "Rails Twitter Clone", 
      description: "This application features login/signup, route protection, email password reset and confirmation through Sendgrid. Built with Ruby on Rails and hosted on Heroku.", 
      image: "../../../images/Elegant_Background-6.jpg"
    },
    {id: 4, 
      name: "YouTube Player", 
      description: "A small player that allows you to search for YouTube videos are return the top 5 videos matching your search. Built with React and Node.js", 
      image: "../../../images/Elegant_Background-6.jpg"
    },
    {id: 5, 
      name: "Hobblit landing page", 
      description: "A company needed a landing page, so I built one.  Nothing fancy, just HTML, CSS and a bit of Javascript.", 
      image: "../../../images/Elegant_Background-6.jpg"
    }

   
  ];
 
  const showProjects = projects.map((project) =>         
    <div key={project.id} className="container">
      <div className="project-item">
        <div className="project-info">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
        </div>
      </div>
    </div>
  );

  return (
       <div id="project-top" className="project-container"><h2>Projects</h2></div>
  );
};

export default ProjectSection;