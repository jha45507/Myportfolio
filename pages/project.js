import React from 'react'
import MyProject from '../components/common/Project'
export default function Project() {
    return (
        <div className=' flex flex-col justify-center w-full h-full min-w-[375px]'>
            <div className='mb-28 mt-20'>
                <h1 className=' py-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl text-center'>Project I have done
                </h1>
            </div>
            <div className='md:flex justify-center items-center m-auto'>
                <div className='md:flex w-full flex-wrap text-center justify-center items-center'>
                    <MyProject
                        name="Gifola"
                        img={'/gifola.jpeg'}
                        alt="App"
                        href='available on play store (Gifola)'
                        tech=": React-Native, JavaScript, CSS, axios and using other libraries"
                        func=": Add Pagination, Get, Post, Put, Patch, Apis Integration, Google Map integration, QR Code scan, NFC scan,
                        Filter function, Map functions, FlatList, VirtualizedList, global variable, Modals, and Common Components."
                    />
                    <MyProject
                        name="Sudofire"
                        img={'/sudofire.png'}
                        alt="sudofire"
                        href='https://www.sudofire.com/'
                        tech=": Next Js, Tailwind CSS, CSS, JavaScript, Fetch Api, reCAPTCHA v3, Using other Libraries."
                        func=": APIs integration, mail integration, Animation, Smooth UI, reCAPTCHA v3, Fetch Api, Slider, Common
                        components."
                    />
                    <MyProject
                        name="Seed Funding"
                        img={'/seedfunding.png'}
                        alt="seed funding"
                        href='https://seedfunding.nrdc.in/'
                        tech=": JavaScript, jQuery, Html, CSS, Regex, Bootstrap."
                        func=": Validations, Regex, Form Sets, Get, Post, Put, Patch, APIs Integration, Paginations and form add and delete
                        functionality, Create PDF UI."
                    />
                    <MyProject
                        name="Engage"
                        img={'/engage.png'}
                        alt="engage"
                        href='https://engage.eta.in/login/'
                        tech=": JavaScript, jQuery, Html, CSS, Bootstrap."
                        func=":  Validations, Regex, Form Sets, Get, Post, Put, Patch, APIs Integration, Paginations, form add and delete
                        functionality, deal with data, Regex, Fetch API, Ajax and Dom manipulation."
                    />
                    <MyProject
                        name="Prosmyle"
                        img={'/prosmyle.png'}
                        alt="Prosmyle"
                        href='https://prosmyle.com/'
                        tech=": Html, CSS, JavaScript and PHP, Bootstrap."
                        func=": Smooth UI Interface, Mail integration in PHP and create Testimonials."
                    />
                    <MyProject
                        name="S.R. Marine Services"
                        img={'/marine.jpg'}
                        alt="S.R. Marine Services (OPC) Pvt. Ltd"
                        href='https://www.srmsopc.com'
                        tech=": html, CSS and JavaScript."
                        func=": Create the UI UX of the project"
                    />
                    <MyProject
                        name="Biryani Queen"
                        img={'/briyani.png'}
                        alt="Biryani Queen"
                        href='https://www.biryaniqueen.com'
                        tech=": html, CSS and JavaScript."
                        func=": Make the UI UX of the project"
                    />
                    <MyProject
                        name="FYP"
                        img={'/fyp.png'}
                        alt="Super Money App & Card for Teens and Kids"
                        href='https://www.fypmoney.in/'
                        tech=": html, CSS, jQuery and JavaScript."
                        func=": Create the UI UX of the project."
                    />
                </div>
            </div>
            <h1 className='py-2 text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl text-center text-white mb-20'>Personal Project</h1>
            <div className='md:flex justify-center items-center m-auto'>
                <div className='md:flex w-full flex-wrap text-center justify-center items-center'>
                    <MyProject
                        name="AutoMail"
                        img={'/automail.png'}
                        alt="news"
                        href='https://automailsender.netlify.app/'
                        tech=": Next JS, Axios, NodeJs, JavaScript"
                        func=": Auto Mail Sender to the client."
                    />
                    <MyProject
                        name="News"
                        img={'/news.png'}
                        alt="news"
                        href='https://mynewsone.netlify.app'
                        tech=": Strapi Api, ReactJs, NodeJs, JavaScript"
                        func=": Infinite Scroller, Loading bar, Next and Previous button, Design with Card, and click to ReadMore button to open a particular post."
                    />
                    <MyProject
                        name="Text Editor"
                        img={'/editor.png'}
                        alt="editer"
                        href='https://with-react-text-editor.netlify.app'
                        tech=": ReactJs, JavaScript, NodeJs,"
                        func=": with text can be uppercase, lowercase, reverse, copy, clear extra spaces, capital first letter, count words, count characters, and show preview."
                    />
                    <MyProject
                        name="Notes"
                        img={'/notes.png'}
                        alt="notes"
                        href='https://soft-notes-book-with-mern.netlify.app'
                        tech=": MongoDB, ExpressJs, ReactJs, NodeJs (MERN)"
                        func=": create notes, update notes, read notes, delete notes, and with an authentication token save notes."
                    />
                    <MyProject
                        name="Event Calendar"
                        img={'/calendar.png'}
                        alt="calendar"
                        href='https://events-calendar-javascript-project.netlify.app'
                        tech=": JavaScript, Bootstrap"
                        func=": In this events calendar Add Entries, Read Entries, Delete Entries, and Save Entries with Start date, End date, and Time. They save to local storage."
                    />
                    <MyProject
                        name="Clock"
                        img={'/clock.png'}
                        alt="clock"
                        href='https://analogclock-html-css-javascript.netlify.app'
                        tech=": Html, Css, JavaScript"
                        func=": both functions are the Digital clock and can wall clock and set the alarm."
                    />
                </div>
            </div>
        </div>
    )
}
