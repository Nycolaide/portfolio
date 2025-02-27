import { writable } from 'svelte/store';
import type { Skills } from '$lib/types';

import skillsJson from '$content/skills.json';
import projectsJson from '$content/projects.json';
import socialJson from '$content/social-network.json';
import usersJson from '$content/users.json';

export const skills = writable<Skills>(skillsJson);
export const projects = writable(projectsJson);
export const socials = writable(socialJson);
export const users = writable(usersJson);
