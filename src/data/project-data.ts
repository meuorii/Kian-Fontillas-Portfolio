import { ProjectType } from "@/types/project-types";

export const projectsData: ProjectType[] = [
    {
        id: "citizen-feedback-system",
        title: "BERT-Based Citizen Feedback Decision Support System",
        subtitle: "LGU Iba Digital Portal",
        category: "Web Application",
        description: "An administrative intelligence portal engineered for the Local Government Unit of Iba. Integrates deep-learning linguistic pipelines to classify community sentiment data into structured decision vectors, helping municipal administrators parse and prioritize grassroots citizen feedback with high precision.",
        technologies: ["Flask", "React", "JavaScript", "MySQL"],
        slugs: "flask,react,js,mysql",
        links: { 
            github: "https://github.com/Gwenn01/AutomatingProposalDocsProcessV2" 
        },
        featured: true,
        collaborators: [
            { 
                name: "Arnel Gwen Nuqui", 
                avatar: "/avatars/agn.jpg", 
                github: "https://github.com/Gwenn01" 
            },
            { 
                name: "Christian Pantilon", 
                avatar: "/avatars/cgp.jpg", 
                github: "https://github.com/itschristianpantilon" 
            }
        ],
        // Maglagay ng screenshots sa iyong public/projects/ folder (e.g., ["/projects/bert-1.png", "/projects/bert-2.png"])
        images: [
            "/projects/Bert/1.jpg",
            "/projects/Bert/2.jpg",
            "/projects/Bert/3.jpg",
            "/projects/Bert/4.jpg",
            "/projects/Bert/5.jpg",
            "/projects/Bert/6.jpg",
            "/projects/Bert/7.jpg",
            "/projects/Bert/8.jpg",
            "/projects/Bert/9.jpg",
            "/projects/Bert/10.jpg",
        ],
        meta: { 
            startTimeline: "January 2026", 
            endTimeline: "February 2026", 
            role: "Frontend Developer" 
        },
    },
    {
        id: "automated-proposal-review-system",
        title: "Automated Proposal Review and Processing System",
        subtitle: "PRMSU Administrative Portal",
        category: "Web Application",
        description: "A paperless institutional ecosystem developed for President Ramon Magsaysay State University to fully digitize academic document processing. Spearheaded the design and development of the comprehensive Admin Portal, delivering secure, end-to-end management capabilities for reviewing, approving, and tracking proposal lifecycles. Features strict workflow segregation that isolates unassigned documents waiting for assignment from those undergoing active evaluative analysis by the board.",
        technologies: ["React", "TypeScript", "Python", "Django", "PostgreSQL"],
        slugs: "react,ts,py,django,postgres",
        links: { 
            github: "https://github.com/Gwenn01/Automated_Proposal_Review_and_Processing_System"
        },
        featured: true,
        collaborators: [
            { 
                name: "Arnel Gwen Nuqui", 
                avatar: "/avatars/agn.jpg", 
                github: "https://github.com/Gwenn01" 
            },
            { 
                name: "Christian Pantilon", 
                avatar: "/avatars/cgp.jpg", 
                github: "https://github.com/itschristianpantilon" 
            }
        ],
        images: [
            "/projects/Proposals/1.png",
            "/projects/Proposals/2.png",
            "/projects/Proposals/3.png",
            "/projects/Proposals/4.png",
            "/projects/Proposals/5.png",
            "/projects/Proposals/6.png",
            "/projects/Proposals/7.png",
            "/projects/Proposals/8.png",
            "/projects/Proposals/9.png",
            "/projects/Proposals/10.png",
            "/projects/Proposals/11.png",
            "/projects/Proposals/12.png",
            "/projects/Proposals/13.png",
            "/projects/Proposals/14.png",
            "/projects/Proposals/15.png",
            "/projects/Proposals/16.png",
            "/projects/Proposals/17.png",
            "/projects/Proposals/18.png",
            "/projects/Proposals/19.png",
            "/projects/Proposals/20.png",
            "/projects/Proposals/21.png",
        ],
        meta: { 
            startTimeline: "January 2026",
            endTimeline: "April 2026", 
            role: "Frontend Developer Intern" 
        },
    },
    {
        id: "scentsync-perfume-recommender",
        title: "ScentSync Perfume Recommender",
        subtitle: "AI-Based Fragrance Recommendation System Using Scent Chemistry and Weather Context",
        category: "Mobile Application",
        description: "An intelligent mobile application that leverages AI to analyze molecular perfume profiles and environmental weather patterns, delivering highly tailored fragrance recommendations suited for any microclimate.",
        technologies: ["React Native", "Django", "MongoDB", "TypeScript", "Python"],
        slugs: "react,django,mongodb,ts,py",
        links: {
            github: "https://github.com/yourusername/scentsync", // Pwede mong palitan ng tamang repo link
            live: ""
        },
        featured: true,
        collaborators: [],
        images: [
            "/projects/Perfume/1.jpg",
            "/projects/Perfume/2.jpg",
            "/projects/Perfume/3.jpg",
            "/projects/Perfume/4.jpg",
            "/projects/Perfume/5.jpg",
            "/projects/Perfume/6.jpg",
            "/projects/Perfume/7.jpg",
            "/projects/Perfume/8.jpg",
            "/projects/Perfume/9.jpg",
            "/projects/Perfume/10.jpg",
            "/projects/Perfume/11.jpg",
            "/projects/Perfume/12.jpg",
            "/projects/Perfume/13.jpg"
        ],
        meta: {
            startTimeline: "May 2026", 
            endTimeline: "Present",
            role: "Full Stack Developer"
        }
    }
];