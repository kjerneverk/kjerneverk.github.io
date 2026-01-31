import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import DocPage from './components/DocPage'
import './App.css'

const DOC_SECTIONS = [
    {
        id: 'overview',
        title: 'Overview',
        file: 'README.md',
        description: 'Kjerneverk projects overview',
        category: 'overview'
    },
    {
        id: 'credits',
        title: 'Credits',
        file: 'credits.md',
        description: 'Credits and attributions',
        category: 'about'
    }
];

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout docSections={DOC_SECTIONS} />}>
                    <Route index element={<HomePage />} />
                    <Route path=":slug" element={<DocPage docSections={DOC_SECTIONS} />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
