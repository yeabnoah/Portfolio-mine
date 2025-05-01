---
title: 'Why You Should Ditch useEffect for Data Fetching and Use React Query (TanStack Query) Instead'
pubDate: 'Oct 9, 2024'
---

## Introduction

If you've been using React for a while, chances are you've used useEffect to fetch data. It works, but you probably noticed it's not the cleanest or easiest way, especially as your app grows. Managing loading states, handling errors, and re-fetching data can quickly become messy and repetitive.

Enter React Query - the library that takes all the hassle out of data fetching in React. It's designed to handle things like caching, re-fetching, and synchronizing data with way less code.

## The Problem with useEffect for Fetching Data

Let's say you want to fetch data from an API with useEffect. Here's what the basic code looks like:

```javascript
import { useState, useEffect } from 'react'
import axios from 'axios'

const UsersWithUseEffect = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		let isMounted = true

		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (isMounted) {
					setUsers(response.data)
					setLoading(false)
				}
			})
			.catch((err) => {
				if (isMounted) {
					setError(err)
					setLoading(false)
				}
			})

		return () => {
			isMounted = false
		}
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}
```

It works, but:

- You have to manage the loading state.
- You have to handle errors.
- If the component unmounts, you need to make sure you're not updating state on an unmounted component (hence the isMounted part).
- There's no caching, so every time the component mounts, it refetches the data, which wastes time and resources.

Now, imagine having to do this across several components. It gets out of hand fast!

## The React Query Solution

React Query does all the heavy lifting for you - loading states, error handling, caching, and even refetching data automatically. Here's how easy it becomes:

```javascript
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchUsers = async () => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
	return data
}

const UsersWithReactQuery = () => {
	const { data: users, isLoading, isError, error } = useQuery('users', fetchUsers)

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error: {error.message}</div>

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}
```

## Why is This Better?

- Less Boilerplate: No need to write code for loading, error handling, or managing the cleanup.
- Automatic Caching: Data is cached, so it doesn't refetch unnecessarily.
- Automatic Refetching: If you switch tabs or lose internet, it refetches the data when you're back.
- Error Handling: Already built in, no need to manually handle errors everywhere.

## When Should You Stick to useEffect?

- If you're not fetching data, but doing things like event listeners or DOM updates, useEffect is still your go-to.
- For very small, simple apps where data-fetching happens just once and you don't need caching, React Query might feel like overkill.

But if you're dealing with any kind of API fetching regularly, React Query will save you a ton of headaches.

## Conclusion

useEffect works, but it can be clunky for data fetching. With React Query, you get automatic caching, refetching, and error handling, all with a lot less code. So, if you're tired of writing the same useEffect boilerplate over and over, give React Query a try-your future self will thank you!

Read the docs: [https://tanstack.com/](https://tanstack.com/)

Want to contact me?

- Telegram[https://t.me/selfmadecoder]
- GitHub [https://github.com/yeabnoah]
- x [https://x.com/technerd556]
