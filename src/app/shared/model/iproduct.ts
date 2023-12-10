
export interface Iproduct {
    title: string;
    description: string;
    image: string;
    hours: number;
    date: Date;
    program: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
    categories: string[];
    idFormateur: number[];
    id: number;
}
