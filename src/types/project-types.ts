export interface ProjectCollaborator {
    name: string;
    avatar: string;
    github: string; 
}

export interface ProjectLink {
    github?: string;
    live?: string;
    figma?: string;
}

export interface ProjectType {
    id: string;
    title: string;
    subtitle: string;
    category: "Web Application" | "Mobile Application";
    description: string;
    longDescription?: string;
    technologies: string[];
    slugs: string;
    links: ProjectLink;
    featured: boolean;
    collaborators?: ProjectCollaborator[];
    images: string[];
    meta: {
        startTimeline: string;
        endTimeline: string;
        role: string;
    };
}