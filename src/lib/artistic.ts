import fs from "fs"
import path from "path"

const artsDictPath = path.join(process.cwd(), "json/artistic/arts.json")

function readJSON(caminho: string): any {
    if (fs.existsSync(caminho)) {
        const dadosJSON: string = fs.readFileSync(caminho, 'utf-8');
        return JSON.parse(dadosJSON);
    } else {
        console.error('Arquivo não encontrado:', caminho);
        return null;
    }
}

export interface ArtItem {
    imgUrl: string;
    postUrl: string;
    category: string;
    contentWarning?: boolean;
}

type ArtCategory = 'sona' | 'vectorial' | 'other' | 'all';

export function getArtCategorizedRefs(category: ArtCategory = 'sona'): ArtItem[] {
    const content = readJSON(artsDictPath);

    if (!content) {
        console.error('Erro ao ler o arquivo JSON:', artsDictPath);
        return [];
    }

    if (category === 'all') {
        return content;
    } else {
        return content.filter((art: ArtItem) => art.category === category);
    }
}