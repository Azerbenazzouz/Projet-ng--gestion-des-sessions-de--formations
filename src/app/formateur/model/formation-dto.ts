export interface FormationDTO {
    title: string;
    description: string;
    image: string;
    hours: number;
    date: string;
    program: string;
    difficulty: string;
    tags: string[];
    categories: string[];
    idFormateur: number[];
    idCondidat: number[];
    id?: number;
}
