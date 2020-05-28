import React from 'react'

const ProjectList = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        projects: state.projects
        error: state.error
    }
}

export default connect(mapStateToProps, {getProjects})(ProjectList);
