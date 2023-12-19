
export interface Iproduct {
    title: string;
    description: string;
    image: string;
    hours: number;
    date: string;
    program: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
    categories: string[];
    idFormateur: number[];
    idCondidat: number[];
    id: number;
}

