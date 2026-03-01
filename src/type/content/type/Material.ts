type MaterialItem = {
    title: string;
    description: string;
    fileUrl: string;
    fileType: 'pdf' | 'image';
};

type MaterialCategory = {
    title: string;
    description: string;
    items: MaterialItem[];
};

export type { MaterialItem, MaterialCategory };
