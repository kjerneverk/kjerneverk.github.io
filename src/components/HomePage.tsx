import { Link } from 'react-router-dom'

const projects = [
    {
        name: 'RiotPrompt',
        tagline: 'Structured prompt building library and CLI',
        description: 'Treats prompts as code with specialized sections, advanced strategies, and automatic model alignment.',
        url: 'https://kjerneverk.github.io/riotprompt',
        github: 'https://github.com/kjerneverk/riotprompt',
        npm: 'https://www.npmjs.com/package/@riotprompt/riotprompt',
        features: [
            'Structured prompt composition',
            'Automatic model alignment',
            'CLI for prompt management',
            'MCP server integration'
        ]
    },
    {
        name: 'RiotPlan',
        tagline: 'Framework for long-lived, stateful AI workflows',
        description: 'Manage complex, multi-step AI-assisted tasks that span multiple sessions with persistent state tracking.',
        url: 'https://kjerneverk.github.io/riotplan',
        github: 'https://github.com/kjerneverk/riotplan',
        npm: 'https://www.npmjs.com/package/@riotprompt/riotplan',
        features: [
            'Multi-session workflow management',
            'Persistent state tracking',
            'Step-by-step execution',
            'AI-powered plan generation'
        ]
    },
    {
        name: 'RiotDoc',
        tagline: 'Template-driven document creation with AI assistance',
        description: 'Create high-quality documents using template-driven workflows with conversational guidance and full history tracking.',
        url: 'https://kjerneverk.github.io/riotdoc',
        github: 'https://github.com/kjerneverk/riotdoc',
        npm: 'https://www.npmjs.com/package/@riotprompt/riotdoc',
        features: [
            'Template-driven workflows',
            'Conversational guidance',
            'Full history tracking',
            'Checkpoint system'
        ]
    }
]

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="intro-section">
                <h2>Core Tools for AI-Assisted Development</h2>
                <p className="lead">
                    Kjerneverk (Norwegian for "core work") is a collection of interconnected tools designed to enhance 
                    AI-assisted development through structured prompts, long-running plans, and intelligent document creation.
                </p>
            </section>

            <section className="projects-section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.name} className="project-card">
                            <div className="project-header">
                                <h3>{project.name}</h3>
                                <p className="project-tagline">{project.tagline}</p>
                            </div>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="project-links">
                                <a href={project.url} className="button primary" target="_blank" rel="noopener noreferrer">
                                    Documentation
                                </a>
                                <a href={project.github} className="button secondary" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                <a href={project.npm} className="button secondary" target="_blank" rel="noopener noreferrer">
                                    npm
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="philosophy-section">
                <h2>Philosophy</h2>
                <div className="philosophy-grid">
                    <div className="philosophy-item">
                        <h3>Structure over Chaos</h3>
                        <p>Provide frameworks that bring order to complex AI workflows</p>
                    </div>
                    <div className="philosophy-item">
                        <h3>Persistence over Ephemeral</h3>
                        <p>Track history, state, and evolution over time</p>
                    </div>
                    <div className="philosophy-item">
                        <h3>Flexibility over Rigidity</h3>
                        <p>Support multiple approaches and workflows</p>
                    </div>
                    <div className="philosophy-item">
                        <h3>Integration over Isolation</h3>
                        <p>Work together and with AI assistants via MCP</p>
                    </div>
                </div>
            </section>

            <section className="getting-started-section">
                <h2>Getting Started</h2>
                <p>
                    Each tool can be used independently, but they work best together. All tools support the 
                    Model Context Protocol (MCP), allowing seamless integration with AI assistants like Cursor and Claude Desktop.
                </p>
                <div className="cta-buttons">
                    <a href="https://github.com/kjerneverk" className="button large" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                    <Link to="/credits" className="button large secondary">
                        Credits & License
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage
