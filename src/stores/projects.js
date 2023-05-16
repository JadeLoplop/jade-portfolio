import { defineStore } from 'pinia'

export const useProjectsStore = defineStore({
    id: 'projects',
    state: () => ({
        projects: [
            {
                id: 8,
                title: 'SMS and LMS System',
                slug: '/sms-and-lms-webapp',
                imageSrc: '../../assets/ap/1.png',
                time: 'Aug, 2022',
                demo_link: 'https://demo.academy-portal.com/',
                client_info: {
                    name: 'Academy Portal',
                    services: 'For school management system and Learning management system tool.',
                    website: 'https://demo.academy-portal.com/',
                    phone: 'n/a'
                }
            },
            {
                id: 7,
                title: 'Accounting Tool WebApp',
                slug: '/accounting-tool-webapp',
                imageSrc: '../../assets/no_image.png',
                time: 'November, 2021',
                demo_link: 'https://ibventur.es/',
                client_info: {
                    name: 'Iberian Ventures',
                    services: 'Accounting Tool for accountant.',
                    website: 'https://ibventur.es/',
                    phone: 'n/a'
                }
            },
            {
                id: 6,
                title: 'S&N Pizza Website',
                slug: '/snr-pizza-website',
                imageSrc: '../../assets/snr/1.png',
                time: 'August, 2021',
                demo_link: 'https://snrpizza.com/',
                client_info: {
                    name: 'S&N',
                    services: 'Ecommerce website.',
                    website: 'https://snrpizza.com/',
                    phone: 'n/a'
                }
            },
            {
                id: 5,
                title: 'Pregnancy Health Care App/Website',
                slug: '/phc-app-website',
                imageSrc: '../../assets/phc/1.png',
                time: 'Jan, 2021',
                demo_link: 'https://pregnancy-healthcare.com/',
                client_info: {
                    name: 'S&N',
                    services: 'LGU project website.',
                    website: 'https://pregnancy-healthcare.com/',
                    phone: 'n/a'
                }
            },
            {
                id: 4,
                title: 'iVolunteer Website',
                slug: '/ivolunteer-website',
                imageSrc: '../../assets/ivolunteer/1.png',
                time: 'April, 2021',
                demo_link: 'https://www.ivolunteer.com.ph',
                client_info: {
                    name: 'iVolunteer',
                    services: 'For volunteers willing to help other people.',
                    website: 'https://www.ivolunteer.com.ph',
                    phone: 'n/a'
                }
            },
            {
                id: 3,
                title: 'Hisense Official Website',
                slug: '/hisense-official-website',
                imageSrc: '../../assets/hisense/1.png',
                time: 'December, 2020',
                demo_link: 'https://global.hisense.com',
                client_info: {
                    name: 'Xiklab Digital',
                    services: 'DIGITAL MARKETING CONSULTANCY AND EXECUTION',
                    website: 'https://www.xiklab.com/',
                    phone: '+632 87576 9071'
                }
            },
            {
                id: 2,
                title: 'Kolours Official Website',
                slug: '/kolours-official-website',
                imageSrc: '../../assets/kolours/1.png',
                time: 'September, 2020',
                demo_link: 'http://kolours.ph',
                client_info: {
                    name: 'Xiklab Digital',
                    services: 'DIGITAL MARKETING CONSULTANCY AND EXECUTION',
                    website: 'https://www.xiklab.com/',
                    phone: '+632 87576 9071'
                }
            },
            {
                id: 1,
                title: 'Hygienix Official Website',
                slug: '/hygienix-official-website',
                imageSrc: '../../assets/hygienix/1.png',
                time: 'June, 2020',
                demo_link: 'http://hygienix.ph',
                client_info: {
                    name: 'Xiklab Digital',
                    services: 'DIGITAL MARKETING CONSULTANCY AND EXECUTION',
                    website: 'https://www.xiklab.com/',
                    phone: '+632 87576 9071'
                }
            },
        ],
        singleProject: {},
    }),

    // getters: {
    //     getProjectDetailsByID: (state) => {
    //         return (projectID) => state.projects.find((project) => project.id === projectID)
    //     }
    // },

    actions: {
        getProjectDetailsByID(id){
            this.singleProject = this.projects.find(project => project.id == id).json();
        }
    }
})