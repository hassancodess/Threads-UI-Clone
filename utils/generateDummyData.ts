import {faker } from '@faker-js/faker'
import { User, Thread, Reply } from '../types/threads'

export const generateRandomUser = ():User => {
    return {
        id: faker.string.uuid(),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`, 
        verified: Math.random() < 0.5,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
        photo: faker.image.avatar(),
        followers: new Array(Math.floor(Math.random() * 10)).fill(null).map((_) => generateRandomFollower())
         
    }
}

export const generateRandomFollower = (): User => {
    return {
        id: faker.string.uuid(),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`, 
        verified: Math.random() < 0.5,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(), 
        photo: faker.image.avatar()
    }
}

export const generateRandomThread = (): Thread => {
    const author = generateRandomUser()
    const mentionUser = generateRandomUser()
    return {
        id: faker.string.uuid(),
        author,
        content: faker.lorem.paragraph(),
        image: Math.random() < 0.5 ? faker.image.url() : undefined,
        repliesCount: Math.floor(Math.random() * 100),
        likesCount: Math.floor(Math.random() * 100),
        mention: Math.random() < 0.5,
        mentionUser,
        createdAt: faker.date.recent().toISOString(),
        replies: new Array(Math.floor(Math.random() * 10)).fill(null).map((_) => generateRandomReply())
        
    }
}

export const generateRandomReply = (): Reply => {
    const author = generateRandomUser()
    return {
        id: faker.string.uuid(),
        author,
        content: faker.lorem.paragraph(),
        likes:  Math.floor(Math.random() * 100),
        createdAt: faker.date.recent().toISOString(),
    }
    
}

export const generateThreads = (): Thread[] => {
    return new Array(10).fill(null).map((_) => generateRandomThread())
}