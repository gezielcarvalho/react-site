function MyApp() {
    return (
        <>
            <h1>Geziel Dev</h1>
            <ul>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
                <li>TikTok</li>
                <li>Instagram</li>
                <li>Twitch.Tv</li>
            </ul>
        </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
