import {
    faFolderOpen,
    faFilePdf,
    faFileAlt,
    faCertificate,
} from '@fortawesome/free-solid-svg-icons'
import {faJava, faPython, faReact} from "@fortawesome/free-brands-svg-icons";

const FolderTreeData = {
    0: {
        "key": "main",
        "displayName": "main",
        "parent": "-1",
        "file_type": "folder",
        "font_awesome_icon": faFolderOpen,
        "children": [1, 4, 10, 3],
    },
    1: {
        "key": "portfolio",
        "displayName": "portfolio()",
        "parent": 0,
        "file_type": "folder",
        "font_awesome_icon": faFolderOpen,
        "children": [6, 2],
    },
    2: {
        "key": "techStacks",
        "displayName": "technicalSkills()",
        "parent": 1,
        "file_type": "react",
        "font_awesome_icon": faReact,
        "children": [],
    },
    3: {
        "key": "certificates",
        "displayName": "achievements()",
        "parent": 0,
        "file_type": "image",
        "font_awesome_icon": faCertificate,
        "children": [],
    },
    4: {
        "key": "about",
        "displayName": "about()",
        "parent": 0,
        "file_type": "folder",
        "font_awesome_icon": faFolderOpen,
        "children": [12, 8],
    },
    // 5: {
    //     "key": "design",
    //     "displayName": "design()",
    //     "parent": 1,
    //     "file_type": "folder",
    //     "font_awesome_icon": faFolderOpen,
    //     "children": [],
    // },
    6: {
        "key": "resumePdf",
        "displayName": "Resume.pdf",
        "parent": 1,
        "file_type": "pdf",
        "font_awesome_icon": faFilePdf,
        "children": [],
    },
    // 7: {
    //     "key": "resumeJava",
    //     "displayName": "Resume.java",
    //     "parent": 1,
    //     "file_type": "java",
    //     "font_awesome_icon": faJava,
    //     "children": [],
    // },
    8: {
        "key": "university",
        "displayName": "University.java",
        "parent": 4,
        "file_type": "java",
        "font_awesome_icon": faJava,
        "children": [],
    },
    10: {
        "key": "workExperience",
        "displayName": "workExperience()",
        "parent": 0,
        "file_type": "folder",
        "font_awesome_icon": faFolderOpen,
        "children": [11, 14],
    },
    11: {
        "key": "professional",
        "displayName": "professional.py",
        "parent": 10,
        "file_type": "python",
        "font_awesome_icon": faPython,
        "children": [],
    },
    12: {
        "key": "myStory",
        "displayName": "myStory.txt",
        "parent": 4,
        "file_type": "text",
        "font_awesome_icon": faFileAlt,
        "children": [],
    },
    14: {
        "key": "projects",
        "displayName": "projects()",
        "parent": 10,
        "file_type": "react",
        "font_awesome_icon": faReact,
        "children": [],
    },
}

export default function getFolderTreeData() {
    return FolderTreeData;
}