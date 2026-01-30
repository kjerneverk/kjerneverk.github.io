import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Breadcrumbs from './Breadcrumbs'

interface LayoutProps {
    docSections: any[];
}

const Layout = ({ docSections }: LayoutProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()
    
    // Determine active section ID from URL path
    const activeSection = location.pathname === '/' 
        ? 'overview' 
        : location.pathname.replace('/', '');

    // Check if we're on the home page
    const isHomePage = activeSection === 'overview';

    return (
        <div className="app">
            {/* Top Navigation Bar */}
            <nav id="nav">
                <div className="nav-container">
                    <div className="nav-title">
                        <Link to="/">Kjerneverk</Link>
                    </div>
                    <ul className="nav-links">
                        <li className={activeSection === 'overview' ? 'current' : ''}>
                            <Link to="/">Overview</Link>
                        </li>
                    </ul>
                    
                    {/* External Links - Icons only */}
                    <div className="nav-icons">
                        <a href="https://github.com/kjerneverk" target="_blank" rel="noopener noreferrer" className="nav-icon" title="GitHub">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <button 
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        Menu
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-menu-section">
                            <Link 
                                to="/"
                                className={activeSection === 'overview' ? 'active' : ''}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Overview
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Header Section */}
            <div id="header-wrapper" className={!isHomePage ? 'compact' : ''}>
                <header id="header" className="container">
                    {isHomePage ? (
                        <div className="header-inner">
                            <h1>Kjerneverk</h1>
                            <p>Core Tools for AI-Assisted Development</p>
                            <div className="header-actions">
                                <a href="https://github.com/kjerneverk" className="button" target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="header-inner-compact">
                            {/* Compact header for non-home pages - just background */}
                        </div>
                    )}
                </header>
            </div>

            {/* Main Content */}
            <div id="main-wrapper" className={!isHomePage ? 'no-header' : ''}>
                <div className="container">
                    <Breadcrumbs docSections={docSections} />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div id="footer-wrapper">
                <footer id="footer" className="container">
                    <div className="footer-content">
                        <p>
                            Built with ❤️ by <a href="https://github.com/tobrien" target="_blank" rel="noopener noreferrer">Tim O'Brien</a>
                        </p>
                        <p className="copyright">
                            Licensed under Apache-2.0
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Layout
