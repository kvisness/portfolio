import React, { Component } from 'react';

class Projects extends Component {

    handleProjects = () => {
        // TODO: Clear the Projects and navigate to the Home page

    }

    render() {
        return (
            <div>
                <h2>Projects</h2>
                {/* TODO: Display Projects */}

                <button onClick={this.handleProjects}>Projects</button>
            </div>
        )
    }
}

export default Projects;