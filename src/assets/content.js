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

export const journey = [{
    company: 'Turing School of Software & Design',
    sdate: 'Sept. 2019',
    edate: 'Apr. 2020',
    location: 'Denver, CO',
    title: 'Certificate in Front-End Engineering',
    desc: ['I knew I wanted to be creating, and working with those in the midst of creation. Having attended a number of startup and volunteer events, I saw the area of most need was often in development. Either in being able to build and work with teams in communicating technical concepts, or in actual ground up problem-solving and coding.', 'I enrolled in a 7 month, full- time Front End Development program at Turing that entailed over 2000 hours of education.It lead to long nights of debugging, exploring, teaching, and working closely with some of the best teams I’ve ever got a chance to be a part of.'],
    highlights: [
        'Gave several talks on humane & sustainable technological design.',
        'Served as student leader for two modules coordinating class discussions, events, and weekly stand-ups & running a musicians group.',
        'Ran mentorship program teaching the fundamentals of JavaScript classes & array prototypes to lower classes.'
        ]
    }, {
        company: 'Factset Research Systems',
        sdate: 'Aug. 2015',
        edate: 'Aug. 2019',
        location: 'New York, NY',
        title: 'Content Manager',
        desc: ['I lucked out landing my first job out of college at Factset. It provided me right out the gates with a wonderful group of connections, mentors and friends who I still treasure today. I joined a team working with Fixed Income financial data, integrating proprietary and third party content sets onto the platform.', 'It was a whirlwind of learning new financial concepts, learning a vastly complicated application, learning how to operate in teams and to interface with engineers.I ended up taking on and later managing a content set that was having a lot of data troubles'],
        highlights: [
            'Hired, trained and managed a team to improve support and turnover of content integration requests.',
            'Overhauled systemically struggling content sets reducing QA request tickets by 90 %.',
            'Devised technical specifications and fetch formulas for database creation, maintenance and client utilization.',
            'Managed a collection of products: Setting and maintaining priorities and timelines, assisting in contract management and compliance, and overseeing stability and QA testing.'
        ]
    }, {
        company: 'The University of Connecticut',
        sdate: 'Sept. 2011',
        edate: 'May 2015',
        location: 'Storrs, CT',
        title: 'Bachelors of Science in Business: Management of Information System',
        desc: ['I started my education pursuing a degree in entrepreneurship. I knew I loved teams, and the creative problem solving that came along with the entrepreneurial experience. I was a member of the student entrepreneurial organization: starting business plans with fellow members, attending local startup weekend events and just getting mixed up in it however I could.', 'But I started to see that the entrepreneurial spirit was something you could bring to any profession.I realized that getting involved with technology allowed you to be a more valuable member of a team in solving a lot of modern problems.So I shifted my major to MIS, and leaned into technology.'],
        highlights: [
            'Managed transitioning the Student Entrepreneurial Organization website to the University platform.',
            'Competed with fellow SEO members at Startup Weekend events bringing ideas from concept to MVP.',
            'Worked at the African American Cultural Center helping facilitate operations and speaker events.',
            'Classes In: Networking, SQL, Database Managment, IT Security'
        ]
    },
]

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