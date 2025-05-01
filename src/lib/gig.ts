import type { Project } from './types'

export const gigs: Project[] = [
	{
		name: 'Nerdspace ',
		description:
			'A social Networking platform for people who like building things and sharing with others. with the functionality of creating posts, comments, likes, and follows. creating projects, posting update for projects, leader board like product hunt and a lot more.',
		githubLink: 'https://github.com/yeabnoah/Nerdspace_codebase1',
		liveLink: 'https://1.nerdspacer.com/',
		loading: 'eager',
		alias: 'nerdspace',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React', icon: 'react' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'Nodemailer', icon: 'nodemailer' },
			{ name: 'prisma' },
			{ name: 'postgres' },
			{ name: 'better-auth' },
			{ name: 'Next-api' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Shadcn/UI', icon: 'shadcn' },
			{ name: 'Turbopack' },
			{ name: 'trpc (migration to tRPC)' },
			{ name: 'tanstack query' },
			{ name: 'zod' },
			{ name: 'zustand' }
		]
	},
	{
		name: 'Linksy',
		description:
			'Linksy : is an open-source bookmark and link manager that enables users to organize and manage their social media posts and other links.',
		githubLink: 'https://github.com/yeabnoah/Linksy',
		liveLink: 'https://linksy1.vercel.app/',
		loading: 'eager',
		alias: 'linksy',
		techUsed: [
			{ name: 'TypeScript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'TailwindCSS', icon: 'tailwind' },
			{ name: 'better-auth', icon: 'better-auth' },
			{ name: 'postgres', icon: 'postgres' },
			{ name: 'prisma', icon: 'prisma' },
			{ name: 'zustand', icon: 'zustand' },
			{ name: 'Shadcn/ui', icon: 'shadcn' }
		]
	},
	{
		name: 'Frame : Dev Portfolio Builder',
		description:
			'Frame allows developers to create, manage, and showcase their work effortlessly. With a powerful dashboard, you can add projects, write articles, and preview your personalized portfolio',
		githubLink: 'https://github.com/yeabnoah/Frame',
		liveLink: 'https://frame.nerdspacer.com/',
		loading: 'eager',
		alias: 'frame',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'Hono', icon: 'hono' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Shadcn/UI', icon: 'shadcn' },
			{ name: 'Better-Auth', icon: 'better-auth' },
			{ name: 'postgres', icon: 'postgres' },
			{ name: 'prisma', icon: 'prisma' },
			{ name: 'zustand', icon: 'zustand' }
		]
	},
	{
		name: 'No Junk ( mobile app )',
		description:
			'A web based mobile app for discovering and sharing the most valuable content from across all social media.',
		githubLink: 'https://github.com/yeabnoah/No-Junk',
		liveLink: 'https://no-junk-landing.vercel.app/',
		loading: 'eager',
		alias: 'no-junk',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'React Native', icon: 'react' },
			{ name: 'Expo', icon: 'expo' },
			{ name: 'Nativewind', icon: 'tailwind' },
			{ name: 'Clerk', icon: 'clerk' },
			{ name: 'Zustand', icon: 'zustand' },
			{ name: 'Firebase', icon: 'firebase' }
		]
	},
	{
		name: 'SoulScribe: Android app',
		description:
			'SoulScribe is a mobile app that serves as a pocket cheat sheet for Bible verses, meticulously categorized and presented for various life situations.',
		githubLink: 'https://github.com/yeabnoah/SoulScribe',
		liveLink: 'https://soulscribe-landing.vercel.app/',
		loading: 'eager',
		alias: 'soul-scribe',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React Native', icon: 'react' },
			{ name: 'Expo', icon: 'expo' },
			{ name: 'Nativewind', icon: 'tailwind' },
			{ name: 'Zustand', icon: 'zustand' }
		]
	}
	// {
	// 	name: 'Portfolio',
	// 	subDescription: 'Minimal portfolio with blog and guestbook.',
	// 	description:
	// 		'A minimal portfolio featuring a blog and guestbook, built with Astro and Tailwind CSS.',
	// 	githubLink: 'https://github.com/yeabnoah/yeabsra-ashebir',
	// 	liveLink: 'https://www.amanvarshney.work/',
	// 	loading: 'eager',
	// 	alias: 'portfolio',
	// 	techUsed: [
	// 		{ name: 'Astro', icon: 'astro' },
	// 		{ name: 'Tailwind', icon: 'tailwind' },
	// 		{ name: 'Vercel', icon: 'vercel' }
	// 	]
	// }
	// {
	// 	name: '3D Portfolio',
	// 	subDescription: '3D portfolio website.',
	// 	description: 'A 3D portfolio website built with Next.js and Three.js.',
	// 	githubLink: 'https://github.com/yeabnoah/amanvarshney',
	// 	liveLink: 'https://yeabsra-ashebir.vercel.app/',
	// 	loading: 'eager',
	// 	alias: 'portfolio-3d',
	// 	techUsed: [
	// 		{ name: 'Typescript', icon: 'typescript' },
	// 		{ name: 'Next.js', icon: 'next' },
	// 		{ name: 'Three.js', icon: 'three' },
	// 		{ name: 'Tailwind', icon: 'tailwind' },
	// 		{ name: 'Vercel', icon: 'vercel' }
	// 	]
	// },
	// {
	// 	name: 'Suggest Me Aman',
	// 	subDescription: 'Movie recommendation app.',
	// 	description: 'A movie recommendation app built with Svelte.',
	// 	githubLink: 'https://github.com/yeabnoah/SuggestMeAman',
	// 	liveLink: 'https://suggestmeaman.vercel.app/',
	// 	loading: 'eager',
	// 	alias: 'suggest-me-aman',
	// 	techUsed: [
	// 		{ name: 'Svelte', icon: 'svelte' },
	// 		{ name: 'Tailwind', icon: 'tailwind' },
	// 		{ name: 'Vercel', icon: 'vercel' }
	// 	]
	// }
]
