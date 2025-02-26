import { writable } from 'svelte/store';

import skillsJson from '$content/skills.json';
import projectsJson from '$content/projects.json';
import socialJson from '$content/social-network.json';
import type { Skills } from '$lib/types';

export const skills = writable<Skills>(skillsJson);
export const projects = writable(projectsJson);
export const socials = writable(socialJson);
