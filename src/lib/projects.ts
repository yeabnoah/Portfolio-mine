import type { Project } from './types'

export const projects: Project[] = [
	{
		name: 'Nerdspace ( social networking platform )',
		description:
			'A social Networking platform for people who like building things and sharing with others. with the functionality of creating posts, comments, likes, and follows. creating projects, posting update for projects, leader board like product hunt and a lot more.',
		githubLink: 'https://github.com/yeabnoah/Nerdspace_codebase1',
		liveLink: 'https://1.nerdspacer.com/',
		loading: 'eager',
		alias: 'nerdspace',
		image: 'https://pbs.twimg.com/media/GpSjwQYXIAAJmTb?format=jpg&name=large',
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
		name: 'Linksy ( bookmark and link manager )',
		description:
			'Linksy : is an open-source bookmark and link manager that enables users to organize and manage their social media posts and other links.',
		githubLink: 'https://github.com/yeabnoah/Linksy',
		liveLink: 'https://linksy1.vercel.app/',
		loading: 'eager',
		alias: 'linksy',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
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
		name: 'Frame : ( developer portfolio builder )',
		description:
			'Frame allows developers to create, manage, and showcase their work effortlessly. With a powerful dashboard, you can add projects, write articles, and preview your personalized portfolio',
		githubLink: 'https://github.com/yeabnoah/Frame',
		liveLink: 'https://frame.nerdspacer.com/',
		loading: 'eager',
		alias: 'frame',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
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
		name: 'Whisper ( secret anonymous secret sharing web app )',
		description:
			'very simple secret anonymous secret sharing app built with better-call; simple crud functionality ',
		githubLink: 'https://github.com/yeabnoah/Whisper',
		liveLink: 'https://secretwhisper.vercel.app/',
		loading: 'eager',
		alias: 'whisper',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Next.js', icon: 'next' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'better-call', icon: 'better-call' },
			{ name: 'prisma', icon: 'prisma' },
			{ name: 'postgres', icon: 'postgres' },
			{ name: 'zod', icon: 'zod' },
			{ name: 'framer-motion', icon: 'framer-motion' }
		]
	},
	{
		name: 'No Junk ( quality content sharing and discovery mobile app )',
		description:
			'A web based mobile app for discovering and sharing the most valuable content from across all social media.',
		githubLink: 'https://github.com/yeabnoah/No-Junk',
		liveLink: 'https://no-junk-landing.vercel.app/',
		loading: 'eager',
		alias: 'no-junk',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
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
		name: 'SoulScribe ( bible verse mobile app )',
		description:
			'SoulScribe is a mobile app that serves as a pocket cheat sheet for Bible verses, meticulously categorized and presented for various life situations.',
		githubLink: 'https://github.com/yeabnoah/SoulScribe',
		liveLink: 'https://soulscribe-landing.vercel.app/',
		loading: 'eager',
		alias: 'soul-scribe',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React Native', icon: 'react' },
			{ name: 'Expo', icon: 'expo' },
			{ name: 'Nativewind', icon: 'tailwind' },
			{ name: 'Zustand', icon: 'zustand' }
		]
	},

	{
		name: 'Hope ( ai powered note taking mobile app )',
		description:
			'an ai powered text and voice note/essay taking app build with dart and typescript, users can write notes with there voice and text which can be transcribed , tuned and modified by the ai to sound different occasions and persons, like professional, academic, poetic, etc',
		githubLink: 'https://github.com/yeabnoah/Hope-ai-powered-note-taking-app-',
		liveLink: 'https://github.com/yeabnoah/Hope-ai-powered-note-taking-app-',
		loading: 'eager',
		alias: 'hope',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Flutter', icon: 'flutter' },
			{ name: 'Dart', icon: 'dart' },
			{ name: 'Express', icon: 'express' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'MongoDB', icon: 'mongodb' }
		]
	},
	{
		name: 'Maven ( a simple real time socket app )',
		description:
			'Maven is a simple real time messaging app built with express, socket io, Nextjs, postgresql, prisma and better auth ',
		githubLink: 'https://github.com/yeabnoah/Maven',
		liveLink: 'https://github.com/yeabnoah/Maven',
		loading: 'eager',
		alias: 'maven',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Nextjs', icon: 'next' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'postgres', icon: 'postgres' },
			{ name: 'Socket.io', icon: 'socket.io' },
			{ name: 'Prisma', icon: 'prisma' },
			{ name: 'Better-Auth', icon: 'better-auth' }
		]
	},
	{
		name: 'sonar ( ai agent )',
		description:
			'sonar is an ai agent project which i built for an ai company trial assignment its a personal assistant ai agent , built with Typescript, Nextjs, GCP, google vertext,  ',
		githubLink: 'https://github.com/yeabnoah/sonar',
		liveLink: 'https://github.com/yeabnoah/sonar',
		loading: 'eager',
		alias: 'sonar',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Nextjs', icon: 'next' },
			{ name: 'Nodejs', icon: 'nodejs' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'GCP', icon: 'gcp' },
			{ name: 'google vertext', icon: 'google-vertex' }
		]
	},
	{
		name: 'hackerwoo ( ai powered hackathon assistant )',
		description:
			'Hackwooai is your AI-powered assistant for hackathons, helping you ideate, code, and present your projects faster and more efficiently. ',
		githubLink: 'https://github.com/yeabnoah/hackerwoo',
		liveLink: 'https://hackerwoo.vercel.app',
		loading: 'eager',
		alias: 'hackerwoo',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Nextjs', icon: 'next' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Shadcn/ui', icon: 'shadcn' },
			{ name: 'gemini', icon: 'gemini' }
		]
	},

	{
		name: 'xplor ( personalized entertainment recommendations app )',
		description:
			'Xplor: Personalized entertainment recommendations app built with React Native, Expo, and NativeWind. ',
		githubLink: 'https://github.com/yeabnoah/xplor',
		liveLink: 'https://github.com/yeabnoah/xplor',
		loading: 'eager',
		alias: 'xplor',
		image: 'https://yeabsra-ashebir.vercel.app/_next/image?url=%2Fframe.png&w=640&q=75',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React Native', icon: 'react' },
			{ name: 'Expo', icon: 'expo' },
			{ name: 'Nativewind', icon: 'tailwind' },
			{ name: 'Firebase', icon: 'firebase' }
		]
	}
]
