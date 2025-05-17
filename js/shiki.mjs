import { codeToHtml } from 'https://esm.sh/shiki@3.4.0'

const lang = 'html';
const theme = 'github-dark' ;
// = { 
//     light: 'github-dark',
//     dark: 'github-light',
//}

const ignoreSectionId = ['installation', 'preview', 'typography'];

const codeFromSection = async (sectionEl) => {
    const section = sectionEl.cloneNode(true);
    const title = section.querySelector('h2')
    if(!title) {
        throw new Error("No title");
    }
    title.remove();
    return await codeToHtml(section.innerHTML.replaceAll('=""', ''), {lang, theme});
}

document.querySelectorAll('section').forEach(async (section) => {
    if(ignoreSectionId.includes(section.id)) return;

    const div = document.createElement('div');
    try {
        div.innerHTML = await codeFromSection(section);
        div.classList.add('demo-code');
    } catch (e) {
        //console.error(e);
        return;
    }
    section.appendChild(div);
});

// INSTALLATION
document.getElementById('installCDN').innerHTML = await codeToHtml('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fordus/shadcn-classless@main/css/style.css">', {lang,theme})
document.getElementById('installLocal').innerHTML = await codeToHtml('<link rel="stylesheet" href="path/to/shadcn-inspired-classless.min.css">', {lang,theme})


