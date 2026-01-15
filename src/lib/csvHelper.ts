export interface CSVMetadata {
    filename: string;
    title: string;
    category: string;
    description?: string;
    year?: string;
    [key: string]: any;
}

export const parseMetadataCSV = (content: string): CSVMetadata[] => {
    const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const data: CSVMetadata[] = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const entry: any = {};

        headers.forEach((header, index) => {
            entry[header] = values[index] || '';
        });

        if (entry.filename) {
            data.push(entry as CSVMetadata);
        }
    }

    return data;
};

export const generateCSVTemplate = (type: 'portfolio' | 'movie'): string => {
    if (type === 'portfolio') {
        return "filename,title,category,year\nimage1.jpg,Summer Session,studio,2026\nimage2.jpg,Beach Wedding,wedding,2026";
    } else {
        return "filename,title,category,release_year,description,quality,duration\nmovie1.mp4,Beyond the Horizon,Feature Film,2026,An epic journey through the savanna.,4K,1h 45m";
    }
};

export const downloadTemplate = (type: 'portfolio' | 'movie') => {
    const content = generateCSVTemplate(type);
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `kgill_bulk_${type}_template.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
