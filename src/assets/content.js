export const about = {
    title: 'About Me',
    desc: 'A front-end developer utilizing strong interpersonal team skills, an inquisitive approach to research, and a love for deconstruction to create humane and sustainable technological solutions.'
}

export const skills = {
    title: 'Skills',
    items: ['React',
    'React Native',
    'Vue',
    'TypeScript',
    'Node.JS',
    'JavaScript',
    'jQuery',
    'HTML / CSS',
    'SCSS']
}

export const resume = {
    title: 'Experience',
    items: [
        {
            company: 'Factset Research Systems',
            sdate: 'Aug. 2015',
            edate: 'Aug. 2019',
            location: 'New York, NY',
            title: 'Content Manager',
            points: [
                'Hired, trained and managed a team to improve support and turnover of content integration requests.',
                'Overhauled systemically struggling content sets reducing QA request tickets by 90 %.',
                'Devised technical specifications and fetch formulas for database creation, maintenance and client utilization.',
                'Managed a collection of products: Setting and maintaining priorities and timelines, assisting in contract management and compliance, and overseeing stability and QA testing.'
            ]
        },
    ]
}

export const education = {
    title: 'Education',
    items: [
        {
            company: 'Turing School of Software & Design',
            sdate: 'Sept. 2019',
            edate: 'Apr. 2020',
            location: 'Denver, CO',
            title: 'Certificate in Front-End Engineering',
            points: ['Fundamental Web Technologies', 'Web Development with JavaScript', 'Professional Client-Side Development', 'Desktop and Mobile Applications with Web Technologies']
        },
        {
            company: 'The University of Connecticut',
            sdate: 'Sept. 2011',
            edate: 'May 2015',
            location: 'Storrs, CT',
            title: 'Bachelors of Science in Business: Management of Information System',
            points: [
                'Networking',
                'SQL',
                'Database Management',
                'IT Security'
            ]
        },
    ]
}

export const projects = [
        {
            title: 'The American Portrait',
            link: 'https://github.com/joel-oe-lacey/The-American-Portrait',
            desc: 'A solo project built in five days which normalizes and massages data from the Harvard Art Museum API to feed a React-based timeline visualization tool for historical photos by US state, utilizing Redux for global state control.',
            stack: ['React', 'React Router', 'Redux', 'SCSS', 'Jest', 'Enzyme'],
            img: '../assets/american_portrait.png'
        },
        {
            title: 'Treat Yo Self',
            link: 'https://github.com/TreatYoSelf/react_fe',
            desc: 'A group project that overcame major disruptions build a self-care Android app with React Native, where users can authenticate with Google & set up auto-scheduling self-care tasks based on their preferences.',
            stack: ['React Native', 'Apollo/GraphQL', 'Expo', 'Google OAuth'],
            img: '../assets/treat_yoself.png'
        },
        {
            title: 'Grandiose Sarajevo Motel',
            link: 'https://github.com/joel-oe-lacey/Grandiose-Sarajevo-Motel',
            desc: 'A hotel reservation manager built solo utilizing vanilla JS and jQuery.  Users, and managers can handle their reservations, view their total spending or operational statistics, and search for and book available rooms.',
            stack: ['Javascript', 'jQuery', 'SCSS', 'Mocha', 'Chai'],
            img: '../assets/sarajevo_motel.png'
        },
    ]