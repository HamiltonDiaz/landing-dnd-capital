export interface BlogDto{
    title: string
    description: string
    imageUrl?: string | null
    alt?: string | null
    date: string 
    onlyImage: boolean
}