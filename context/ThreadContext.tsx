import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generateDummyData";

// createContext

export const ThreadsContext = createContext<Thread[]>([]);

export const ThreadsProvider = ({ children }: PropsWithChildren): JSX.Element => {
	const [threads, setThreads] = useState<Thread[]>([]);

	useEffect(() => {
		const dummyThreads = generateThreads();
		setThreads(dummyThreads);
	}, []);

	return <ThreadsContext.Provider value={threads}>{children}</ThreadsContext.Provider>;
};
