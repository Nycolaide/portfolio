import { writable } from 'svelte/store';

import skillsJson from '$content/skills.json';
import projectsJson from '$content/projects.json';
import socialJson from '$content/social-network.json';

export const skills = writable(skillsJson);
export const projects = writable(projectsJson);
export const socials = writable(socialJson);
