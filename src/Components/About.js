import React from 'react'
import '../Styles/About.css'

function About() {
  return (
    <div className='about-wrapper'>
      <h3>About React router V6</h3>
      <ul>
        <li>Few key pointers of react router version 6 implementation.</li>
        <li>Keep navigation menu out of {'<Routes>'} but inside {'<BrowserRouter>'}.</li>
        <li>Use {'<NavLink>'} to highlight a menu item or make breadcrumb. As it will know whether or not a {'<Link>'} is "active"</li>
        <li>The feeds page contains an {'<outlet>'} for nested routes and so is the {'<Link>'} to the single Feed.</li>
        <li>We no longer need to use the exact keywords while defining routes.</li>
        <li>V6 now comes with a useNavigate hook, which returns a function.</li>
        <li>Redirect is no longer available, use {'<Navigate>'} instead.</li>
        <li>use replace: true, with navigate to change the current entry in the history stack instead of adding a new one.</li>
        <li>Read official docs to explore more.</li>
        <li>Feel free to use this boilerplate anywhere.</li>
      </ul>
    </div>
  )
}

export default About