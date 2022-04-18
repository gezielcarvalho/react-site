function MainContent() {
    return (
        <>
            <article class="markdown-body entry-content container-lg f5" itemprop="text"><h3 dir="auto"><a id="user-content-hi-there-im-geziel-carvalho-" class="anchor" aria-hidden="true" href="#hi-there-im-geziel-carvalho-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Hi there!! I'm Geziel Carvalho! <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji></h3>
                <p dir="auto">I'm a full stack developer and an airspace control specialist.</p>
                <p dir="auto">As a developer, I code with Java but also with PHP.</p>
                <p dir="auto">I can mananage structured databases, such as postgres and MySQL, or non structured databases like MongoDB and others.</p>
                <p dir="auto">At the frontend I make use since vanilla javascript to ReactJS. We can of course adapt to other JS libraries as needed.</p>
                <p dir="auto">If you wanna know more about my dev skills or air space control, check my social media.</p>
                <ul dir="auto">
                    <li><g-emoji class="g-emoji" alias="telescope" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f52d.png">🔭</g-emoji> I’m currently working on my undergraduate final paper.</li>
                    <li><g-emoji class="g-emoji" alias="seedling" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f331.png">🌱</g-emoji> I’m currently improving my Java and React skills</li>
                    <li><g-emoji class="g-emoji" alias="speech_balloon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ac.png">💬</g-emoji> Ask me about Php and Vanilla JS</li>
                    <li><g-emoji class="g-emoji" alias="mailbox" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4eb.png">📫</g-emoji> How to reach me? Social media: @gezielcarvalho</li>
                </ul>

            </article>
        </>
    );
}

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Geziel Dev</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href=".">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/gezielcarvalho">GitHub</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Social Media
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">LinkedIn</a></li>
                                <li><a className="dropdown-item" href="#">YouTube</a></li>
                                <li><a className="dropdown-item" href="#">TikTok</a></li>
                                <li><a className="dropdown-item" href="#">Instagram</a></li>
                                <li><a className="dropdown-item" href="#">Twitch.Tv</a></li>
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}

ReactDOM.render(
    <>
        <NavBar />
        <MainContent />
    </>
    ,
    document.getElementById('root')
);
