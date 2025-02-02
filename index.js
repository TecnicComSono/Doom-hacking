var container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.width = '100%';
container.style.height = '100%';
container.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Fundo levemente transparente
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.zIndex = '9999';

// Carregar a fonte de terror do Google Fonts
var link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Creepster&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Conteúdo centralizado
container.innerHTML = `
    <h1 style="
        font-family: 'Creepster', cursive; 
        color: red; 
        font-size: 50px; 
        text-shadow: 2px 2px 8px black;
        margin-bottom: 5px;
    ">DOOM INJECTOR BY TECNIC</h1>
    
    <img src="https://i.gifer.com/ZU4b.gif" width="80" height="60" style="margin-bottom: 10px;">
    
    <iframe src="https://emupedia.net/emupedia-game-doom2/asmjs/" 
        style="border: 4px solid white; border-radius: 10px;" 
        width="800" height="450" 
        frameborder="0" allowfullscreen>
    </iframe>
    
    <button id="closeBtn" style="
        margin-top: 10px; 
        padding: 10px 20px; 
        background-color: red; 
        color: white; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
    ">Fechar</button>
`;

// Botão para fechar o conteúdo
container.querySelector('#closeBtn').onclick = function() {
    container.remove();
};

document.body.appendChild(container);
