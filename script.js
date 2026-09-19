/* =========================================================
   DEVSTART - INDEX.JS
   SISTEMA PRINCIPAL
========================================================= */

const app = document.querySelector(".main");

const STORAGE = {
    xp: "devstartXP_final",
    progress: "devstartProgress_final",
    logged: "devstartLogado",
    email: "devstartEmail",
    name: "devstartNome"
};


/* =========================================================
   DADOS DOS CURSOS
========================================================= */

const cursos = {

    html: {
        nome: "HTML",
        icone: "fa-brands fa-html5",
        descricao: "Aprenda a criar a estrutura das páginas web.",
        aulas: [
            {
                titulo: "O que é HTML?",
                descricao: "Entenda a base de uma página web.",
                explicacao: `
                    <p>HTML é a linguagem usada para criar a estrutura de uma página web.</p>
                    <p>Com HTML podemos criar títulos, textos, imagens, links, listas, formulários e muito mais.</p>
                `,
                codigo:
`<!DOCTYPE html>
<html>
<head>
    <title>Minha página</title>
</head>

<body>
    <h1>Olá, mundo!</h1>
    <p>Minha primeira página.</p>
</body>
</html>`,
                pergunta: "Qual tag é usada para criar o título principal?",
                opcoes: [
                    "<h1>",
                    "<title>",
                    "<p>",
                    "<header>"
                ],
                correta: 0,
                resposta:
                    "A tag <h1> representa o título principal do conteúdo da página."
            },

            {
                titulo: "Títulos e parágrafos",
                descricao: "Aprenda a organizar textos.",
                explicacao: `
                    <p>HTML possui títulos de <strong>h1</strong> até <strong>h6</strong>.</p>
                    <p>Para criar parágrafos usamos a tag <strong>p</strong>.</p>
                `,
                codigo:
`<h1>Título principal</h1>

<h2>Subtítulo</h2>

<p>
    Este é um parágrafo.
</p>`,
                pergunta: "Qual tag cria um parágrafo?",
                opcoes: [
                    "<text>",
                    "<p>",
                    "<paragraph>",
                    "<h1>"
                ],
                correta: 1,
                resposta:
                    "A tag <p> é usada para criar parágrafos."
            },

            {
                titulo: "Links",
                descricao: "Aprenda a criar links.",
                explicacao: `
                    <p>Links permitem levar o usuário para outra página ou endereço.</p>
                    <p>Para criar um link usamos a tag <strong>a</strong>.</p>
                `,
                codigo:
`<a href="https://google.com">
    Abrir Google
</a>`,
                pergunta: "Qual atributo indica o endereço de um link?",
                opcoes: [
                    "src",
                    "link",
                    "href",
                    "url"
                ],
                correta: 2,
                resposta:
                    "O atributo href define para onde o link irá."
            },

            {
                titulo: "Imagens",
                descricao: "Aprenda a colocar imagens.",
                explicacao: `
                    <p>A tag <strong>img</strong> é usada para mostrar imagens.</p>
                    <p>O atributo <strong>src</strong> informa o caminho da imagem.</p>
                `,
                codigo:
`<img
    src="imagem.jpg"
    alt="Uma paisagem"
>`,
                pergunta: "Qual atributo informa o caminho da imagem?",
                opcoes: [
                    "href",
                    "src",
                    "path",
                    "image"
                ],
                correta: 1,
                resposta:
                    "O atributo src informa onde está localizada a imagem."
            },

            {
                titulo: "Listas",
                descricao: "Crie listas organizadas e não organizadas.",
                explicacao: `
                    <p>A tag <strong>ul</strong> cria listas não ordenadas.</p>
                    <p>A tag <strong>ol</strong> cria listas ordenadas.</p>
                    <p>Cada item da lista usa <strong>li</strong>.</p>
                `,
                codigo:
`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`,
                pergunta: "Qual tag representa um item de uma lista?",
                opcoes: [
                    "<item>",
                    "<list>",
                    "<li>",
                    "<ul>"
                ],
                correta: 2,
                resposta:
                    "A tag <li> representa cada item de uma lista."
            },

            {
                titulo: "HTML semântico",
                descricao: "Organize melhor o conteúdo.",
                explicacao: `
                    <p>HTML semântico usa elementos que explicam o significado do conteúdo.</p>
                    <p>Exemplos: header, main, section, article e footer.</p>
                `,
                codigo:
`<header>
    Meu site
</header>

<main>
    Conteúdo principal
</main>

<footer>
    Rodapé
</footer>`,
                pergunta: "Qual elemento representa o conteúdo principal?",
                opcoes: [
                    "<main>",
                    "<body>",
                    "<content>",
                    "<principal>"
                ],
                correta: 0,
                resposta:
                    "A tag <main> representa o conteúdo principal da página."
            },

            {
                titulo: "Formulários",
                descricao: "Crie campos para o usuário preencher.",
                explicacao: `
                    <p>Formulários permitem receber informações do usuário.</p>
                    <p>Podemos usar input, label, button e form.</p>
                `,
                codigo:
`<form>

    <label>Nome</label>

    <input type="text">

    <button>
        Enviar
    </button>

</form>`,
                pergunta: "Qual elemento cria um campo para digitar?",
                opcoes: [
                    "<input>",
                    "<write>",
                    "<text>",
                    "<field>"
                ],
                correta: 0,
                resposta:
                    "A tag <input> cria campos de entrada."
            },

            {
                titulo: "Mini projeto HTML",
                descricao: "Junte tudo que você aprendeu.",
                explicacao: `
                    <p>Agora vamos juntar vários conceitos.</p>
                    <p>Uma página pode possuir título, parágrafos, imagens, links e listas.</p>
                `,
                codigo:
`<h1>Meu site</h1>

<p>
    Bem-vindo ao meu site!
</p>

<img
    src="foto.jpg"
    alt="Minha foto"
>

<a href="#">
    Saiba mais
</a>`,
                pergunta: "Qual tag você usaria para criar um título principal?",
                opcoes: [
                    "<h1>",
                    "<p>",
                    "<img>",
                    "<a>"
                ],
                correta: 0,
                resposta:
                    "O <h1> é usado para o título principal."
            }
        ]
    },


    css: {
        nome: "CSS",
        icone: "fa-brands fa-css3-alt",
        descricao: "Aprenda a estilizar e criar layouts incríveis.",
        aulas: [
            {
                titulo: "O que é CSS?",
                descricao: "Conheça a linguagem de estilos.",
                explicacao: `
                    <p>CSS é usado para controlar a aparência das páginas.</p>
                    <p>Com CSS podemos alterar cores, tamanhos, espaçamentos, posições e muito mais.</p>
                `,
                codigo:
`body {
    background: black;
    color: white;
}`,
                pergunta: "Para que serve o CSS?",
                opcoes: [
                    "Criar banco de dados",
                    "Estilizar páginas",
                    "Criar servidores",
                    "Criar imagens"
                ],
                correta: 1,
                resposta:
                    "CSS controla a aparência e o layout da página."
            },

            {
                titulo: "Seletores",
                descricao: "Aprenda a selecionar elementos.",
                explicacao: `
                    <p>Seletores indicam quais elementos receberão estilos.</p>
                    <p>Podemos selecionar tags, classes e IDs.</p>
                `,
                codigo:
`p {
    color: red;
}

.titulo {
    font-size: 30px;
}

#menu {
    background: black;
}`,
                pergunta: "Como selecionamos uma classe no CSS?",
                opcoes: [
                    "#classe",
                    ".classe",
                    "classe",
                    "@classe"
                ],
                correta: 1,
                resposta:
                    "Classes são selecionadas usando um ponto."
            },

            {
                titulo: "Cores",
                descricao: "Aprenda a trabalhar com cores.",
                explicacao: `
                    <p>Podemos definir cores pelo nome, hexadecimal, RGB e outras formas.</p>
                `,
                codigo:
`h1 {
    color: #ff5722;
}

body {
    background: #111317;
}`,
                pergunta: "Qual propriedade altera a cor do texto?",
                opcoes: [
                    "background",
                    "font",
                    "color",
                    "text"
                ],
                correta: 2,
                resposta:
                    "A propriedade color altera a cor do texto."
            },

            {
                titulo: "Fontes e textos",
                descricao: "Personalize seus textos.",
                explicacao: `
                    <p>CSS permite alterar tamanho, família, peso e alinhamento dos textos.</p>
                `,
                codigo:
`h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
}`,
                pergunta: "Qual propriedade altera o tamanho da fonte?",
                opcoes: [
                    "font-size",
                    "text-size",
                    "size",
                    "font-height"
                ],
                correta: 0,
                resposta:
                    "font-size altera o tamanho da fonte."
            },

            {
                titulo: "Margin e padding",
                descricao: "Entenda espaçamentos.",
                explicacao: `
                    <p><strong>margin</strong> cria espaço externo.</p>
                    <p><strong>padding</strong> cria espaço interno.</p>
                `,
                codigo:
`.card {
    margin: 20px;
    padding: 20px;
}`,
                pergunta: "Qual cria espaço interno?",
                opcoes: [
                    "margin",
                    "padding",
                    "border",
                    "gap"
                ],
                correta: 1,
                resposta:
                    "padding cria espaço dentro do elemento."
            },

            {
                titulo: "Flexbox",
                descricao: "Aprenda a organizar elementos.",
                explicacao: `
                    <p>Flexbox facilita a organização de elementos em linhas e colunas.</p>
                `,
                codigo:
`.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
                pergunta: "Qual propriedade ativa o Flexbox?",
                opcoes: [
                    "position: flex",
                    "display: flex",
                    "flex: true",
                    "layout: flex"
                ],
                correta: 1,
                resposta:
                    "Usamos display: flex."
            },

            {
                titulo: "Grid",
                descricao: "Crie layouts em linhas e colunas.",
                explicacao: `
                    <p>CSS Grid é excelente para criar estruturas com linhas e colunas.</p>
                `,
                codigo:
`.cards {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);
}`,
                pergunta: "Qual propriedade ativa o Grid?",
                opcoes: [
                    "display: grid",
                    "grid: true",
                    "layout: grid",
                    "display: columns"
                ],
                correta: 0,
                resposta:
                    "Usamos display: grid."
            },

            {
                titulo: "Mini projeto CSS",
                descricao: "Monte um pequeno layout.",
                explicacao: `
                    <p>Agora podemos juntar cores, espaçamento e layout.</p>
                `,
                codigo:
`.card {
    padding: 20px;
    background: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
}`,
                pergunta: "Qual propriedade arredonda os cantos?",
                opcoes: [
                    "corner",
                    "radius",
                    "border-radius",
                    "round"
                ],
                correta: 2,
                resposta:
                    "border-radius arredonda os cantos."
            }
        ]
    },


    javascript: {
        nome: "JavaScript",
        icone: "fa-brands fa-js",
        descricao: "Aprenda a deixar seus sites interativos.",
        aulas: [
            {
                titulo: "O que é JavaScript?",
                descricao: "Conheça a linguagem da interatividade.",
                explicacao: `
                    <p>JavaScript permite criar comportamentos e interações em páginas web.</p>
                `,
                codigo:
`const nome = "DevStart";

console.log(nome);`,
                pergunta: "Para que JavaScript é muito usado?",
                opcoes: [
                    "Criar interações",
                    "Criar somente imagens",
                    "Substituir o HTML",
                    "Criar somente textos"
                ],
                correta: 0,
                resposta:
                    "JavaScript permite adicionar lógica e interatividade."
            },

            {
                titulo: "Variáveis",
                descricao: "Aprenda let e const.",
                explicacao: `
                    <p>Variáveis guardam informações.</p>
                    <p>Em JavaScript usamos principalmente let e const.</p>
                `,
                codigo:
`let idade = 16;

const nome = "João";`,
                pergunta: "Qual palavra cria uma constante?",
                opcoes: [
                    "varia",
                    "let",
                    "const",
                    "constant"
                ],
                correta: 2,
                resposta:
                    "const cria uma variável que não pode ser reatribuída."
            },

            {
                titulo: "Tipos de dados",
                descricao: "Conheça strings, números e booleanos.",
                explicacao: `
                    <p>JavaScript possui diferentes tipos de dados.</p>
                    <p>Strings representam textos, números representam valores numéricos e booleanos representam verdadeiro ou falso.</p>
                `,
                codigo:
`const nome = "Maria";
const idade = 18;
const aluno = true;`,
                pergunta: "Qual valor representa verdadeiro ou falso?",
                opcoes: [
                    "String",
                    "Number",
                    "Boolean",
                    "Array"
                ],
                correta: 2,
                resposta:
                    "Boolean representa true ou false."
            },

            {
                titulo: "Operadores",
                descricao: "Faça cálculos e comparações.",
                explicacao: `
                    <p>Operadores permitem fazer cálculos e comparações.</p>
                `,
                codigo:
`const resultado = 10 + 5;

console.log(resultado);`,
                pergunta: "Qual operador realiza uma soma?",
                opcoes: [
                    "+",
                    "-",
                    "*",
                    "/"
                ],
                correta: 0,
                resposta:
                    "O operador + realiza soma."
            },

            {
                titulo: "if e else",
                descricao: "Tome decisões no código.",
                explicacao: `
                    <p>if executa um código quando uma condição é verdadeira.</p>
                    <p>else pode executar outro código quando ela for falsa.</p>
                `,
                codigo:
`const idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}`,
                pergunta: "Qual palavra usamos para criar uma condição?",
                opcoes: [
                    "when",
                    "if",
                    "check",
                    "condition"
                ],
                correta: 1,
                resposta:
                    "A palavra if cria uma condição."
            },

            {
                titulo: "Funções",
                descricao: "Crie blocos reutilizáveis.",
                explicacao: `
                    <p>Funções agrupam instruções que podem ser executadas quando necessário.</p>
                `,
                codigo:
`function saudacao() {
    console.log("Olá!");
}

saudacao();`,
                pergunta: "Qual palavra cria uma função?",
                opcoes: [
                    "function",
                    "func",
                    "create",
                    "method"
                ],
                correta: 0,
                resposta:
                    "Usamos a palavra function."
            },

            {
                titulo: "Arrays e loops",
                descricao: "Trabalhe com listas de dados.",
                explicacao: `
                    <p>Arrays armazenam vários valores.</p>
                    <p>Loops permitem repetir instruções.</p>
                `,
                codigo:
`const nomes = [
    "Ana",
    "João",
    "Pedro"
];

for (let nome of nomes) {
    console.log(nome);
}`,
                pergunta: "Qual estrutura guarda vários valores?",
                opcoes: [
                    "array",
                    "if",
                    "function",
                    "boolean"
                ],
                correta: 0,
                resposta:
                    "Arrays podem armazenar vários valores."
            },

            {
                titulo: "DOM e eventos",
                descricao: "Faça a página responder ao usuário.",
                explicacao: `
                    <p>O DOM permite que JavaScript acesse e altere elementos HTML.</p>
                    <p>Também podemos responder a eventos como cliques.</p>
                `,
                codigo:
`const botao =
    document.querySelector("#botao");

botao.addEventListener(
    "click",
    function() {
        alert("Olá!");
    }
);`,
                pergunta: "Qual evento detecta um clique?",
                opcoes: [
                    "hover",
                    "click",
                    "press",
                    "touch"
                ],
                correta: 1,
                resposta:
                    "O evento click detecta cliques."
            }
        ]
    }
};


/* =========================================================
   ESTADO
========================================================= */

let xp = Number(localStorage.getItem(STORAGE.xp)) || 0;

let progresso = {};

try {
    progresso =
        JSON.parse(
            localStorage.getItem(STORAGE.progress)
        ) || {};
} catch {
    progresso = {};
}


/* =========================================================
   FUNÇÕES DE SALVAMENTO
========================================================= */

function salvarDados() {

    localStorage.setItem(
        STORAGE.xp,
        String(xp)
    );

    localStorage.setItem(
        STORAGE.progress,
        JSON.stringify(progresso)
    );
}


/* =========================================================
   PROGRESSO
========================================================= */

function aulaConcluida(id) {
    return progresso[id] === true;
}

function totalAulas() {
    return 24;
}

function aulasConcluidas() {
    return Object.values(progresso)
        .filter(valor => valor === true)
        .length;
}

function progressoGeral() {

    return Math.round(
        (aulasConcluidas() / totalAulas()) * 100
    );
}

function progressoCurso(id) {

    const curso = cursos[id];

    const total = curso.aulas.length;

    const concluidas = curso.aulas.filter(
        (_, index) =>
            aulaConcluida(`${id}-${index}`)
    ).length;

    return {
        total,
        concluidas,
        porcentagem: Math.round(
            (concluidas / total) * 100
        )
    };
}


/* =========================================================
   NOME DO USUÁRIO
========================================================= */

function nomeUsuario() {

    const nome =
        localStorage.getItem(STORAGE.name);

    if (nome) {
        return nome;
    }

    const email =
        localStorage.getItem(STORAGE.email);

    if (email) {

        return email
            .split("@")[0]
            .replace(/[0-9]/g, "")
            .trim() || "Programador";
    }

    return "Programador";
}


/* =========================================================
   ATUALIZA SIDEBAR
========================================================= */

function atualizarUsuario() {

    const nome = nomeUsuario();

    const strong =
        document.querySelector(
            ".sidebar-user .user-info strong"
        );

    const span =
        document.querySelector(
            ".sidebar-user .user-info span"
        );

    if (strong) {
        strong.textContent = nome;
    }

    if (span) {

        const email =
            localStorage.getItem(
                STORAGE.email
            );

        span.textContent =
            email || "DevStart";
    }
}


/* =========================================================
   MENU ATIVO
========================================================= */

function ativarMenu(nome) {

    document
        .querySelectorAll(".menu-item")
        .forEach(item => {

            item.classList.remove("active");

            const texto =
                item
                    .textContent
                    .trim()
                    .toLowerCase();

            if (
                texto === nome
                    .toLowerCase()
            ) {
                item.classList.add("active");
            }
        });
}


/* =========================================================
   HOME
========================================================= */

function telaInicio() {

    ativarMenu("Início");

    const geral =
        progressoGeral();

    app.innerHTML = `

        <div class="topbar">

            <div class="greeting">

                <small>
                    Pronto para aprender?
                </small>

                <h1>
                    Olá, programador! 👋
                </h1>

                <p>
                    Continue sua jornada no DevStart.
                </p>

            </div>

            <div class="xp">
                ⚡ ${xp} XP
            </div>

        </div>


        <section class="section">

            <div class="section-title">

                <h2>
                    Seu progresso
                </h2>

                <p>
                    Você concluiu
                    ${aulasConcluidas()}
                    de ${totalAulas()}
                    aulas.
                </p>

            </div>

            <div class="progress-area">

                <div class="progress-info">

                    <span>
                        Progresso geral
                    </span>

                    <strong>
                        ${geral}%
                    </strong>

                </div>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${geral}%"
                    ></div>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="section-title">

                <h2>
                    Continue aprendendo 🚀
                </h2>

                <p>
                    Escolha uma tecnologia para estudar.
                </p>

            </div>


            <div class="learning-grid">

                ${criarCardsCursos()}

            </div>

        </section>


        <section class="section">

            <div class="tip-card">

                <div class="tip-icon">
                    💡
                </div>

                <div>

                    <h3>
                        Dica para aprender programação
                    </h3>

                    <p>
                        Não apenas leia o código.
                        Tente modificar os exemplos,
                        executar e veja o que acontece.
                    </p>

                </div>

            </div>

        </section>

    `;
}


/* =========================================================
   CARDS DOS CURSOS
========================================================= */

function criarCardsCursos() {

    return Object.keys(cursos)
        .map(id => {

            const curso =
                cursos[id];

            const prog =
                progressoCurso(id);

            return `

                <div class="course-card">

                    <div class="course-icon">

                        <i class="${curso.icone}"></i>

                    </div>

                    <h3>
                        ${curso.nome}
                    </h3>

                    <p>
                        ${curso.descricao}
                    </p>

                    <div class="progress">

                        ${prog.concluidas}/${prog.total}
                        aulas
                        ${prog.porcentagem}%

                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="width:${prog.porcentagem}%"
                            ></div>

                        </div>

                    </div>

                    <button
                        class="course-button"
                        data-curso="${id}"
                    >
                        ${prog.concluidas > 0
                            ? "Continuar →"
                            : "Começar →"}
                    </button>

                </div>

            `;

        })
        .join("");
}


/* =========================================================
   CURSOS
========================================================= */

function telaCursos() {

    ativarMenu("Cursos");

    app.innerHTML = `

        <div class="topbar">

            <div class="greeting">

                <small>
                    DevStart
                </small>

                <h1>
                    Cursos 📚
                </h1>

                <p>
                    Aprenda programação passo a passo.
                </p>

            </div>

        </div>


        <section class="section">

            <div class="learning-grid">

                ${criarCardsCursos()}

            </div>

        </section>

    `;
}


/* =========================================================
   ABRIR CURSO
========================================================= */

function abrirCurso(id) {

    const curso =
        cursos[id];

    const prog =
        progressoCurso(id);

    app.innerHTML = `

        <div class="course-overview">

            <button
                class="back-button"
                id="voltarCursos"
            >
                ← Voltar para cursos
            </button>

            <br><br>

            <div class="course-overview-header">

                <div class="course-overview-icon">

                    <i class="${curso.icone}"></i>

                </div>

                <div>

                    <h1>
                        ${curso.nome}
                    </h1>

                    <p>
                        ${curso.descricao}
                    </p>

                </div>

            </div>


            <div class="progress-area">

                <div class="progress-info">

                    <span>
                        Progresso do curso
                    </span>

                    <strong>
                        ${prog.porcentagem}%
                    </strong>

                </div>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${prog.porcentagem}%"
                    ></div>

                </div>

            </div>


            <div class="lesson-list">

                ${curso.aulas.map(
                    (aula, index) => {

                        const concluida =
                            aulaConcluida(
                                `${id}-${index}`
                            );

                        return `

                            <div
                                class="lesson-item
                                ${concluida ? "completed" : ""}"
                            >

                                <div class="lesson-number">

                                    ${
                                        concluida
                                            ? "✓"
                                            : index + 1
                                    }

                                </div>

                                <div class="lesson-info">

                                    <strong>
                                        Aula ${index + 1} —
                                        ${aula.titulo}
                                    </strong>

                                    <span>
                                        ${aula.descricao}
                                    </span>

                                </div>

                                ${
                                    concluida
                                        ? `
                                            <span class="lesson-status">
                                                Concluída
                                            </span>
                                        `
                                        : ""
                                }

                                <button
                                    class="course-button"
                                    data-aula="${index}"
                                >
                                    ${
                                        concluida
                                            ? "Revisar"
                                            : "Estudar"
                                    }
                                </button>

                            </div>

                        `;

                    }
                ).join("")}

            </div>

        </div>

    `;

    document
        .getElementById("voltarCursos")
        ?.addEventListener(
            "click",
            telaCursos
        );

    document
        .querySelectorAll("[data-aula]")
        .forEach(botao => {

            botao.addEventListener(
                "click",
                () => {

                    abrirAula(
                        id,
                        Number(
                            botao.dataset.aula
                        )
                    );

                }
            );

        });
}


/* =========================================================
   ABRIR AULA
========================================================= */

function abrirAula(
    cursoId,
    numero
) {

    const curso =
        cursos[cursoId];

    const aula =
        curso.aulas[numero];

    const aulaId =
        `${cursoId}-${numero}`;

    const concluida =
        aulaConcluida(aulaId);

    const porcentagem =
        Math.round(
            ((numero + 1) /
                curso.aulas.length) * 100
        );

    app.innerHTML = `

        <div class="lesson-page">

            <div class="lesson-header">

                <div class="lesson-header-top">

                    <button
                        class="back-button"
                        id="voltarCurso"
                    >
                        ← Voltar
                    </button>

                    <span class="lesson-counter">
                        Aula ${numero + 1}
                        de ${curso.aulas.length}
                    </span>

                </div>

                <div class="lesson-course">
                    ${curso.nome}
                </div>

                <h1>
                    ${aula.titulo}
                </h1>

                <p>
                    ${aula.descricao}
                </p>

                <br>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${porcentagem}%"
                    ></div>

                </div>

            </div>


            <div class="lesson-content">

                <div class="lesson-card">

                    <h2>
                        📖 O que você precisa saber
                    </h2>

                    ${aula.explicacao}

                    <pre class="code-example"><code>${escaparHTML(
                        aula.codigo
                    )}</code></pre>

                </div>


                <div class="exercise-card">

                    <span class="exercise-label">
                        Exercício • +20 XP
                    </span>

                    <h2>
                        ${aula.pergunta}
                    </h2>

                    <div
                        class="exercise-options"
                        id="exerciseOptions"
                    >

                        ${aula.opcoes
                            .map(
                                (opcao, index) => `
                                    <button
                                        class="exercise-option"
                                        data-opcao="${index}"
                                    >
                                        ${escaparHTML(opcao)}
                                    </button>
                                `
                            )
                            .join("")}

                    </div>


                    <div
                        class="exercise-feedback"
                        id="exerciseFeedback"
                    ></div>


                    <div class="lesson-actions">

                        <button
                            class="back-button"
                            id="voltarAula"
                        >
                            ← Voltar
                        </button>

                        <button
                            class="next-button"
                            id="proximaAula"
                            style="display:none"
                        >
                            Próxima aula →
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;


    document
        .getElementById("voltarCurso")
        ?.addEventListener(
            "click",
            () => abrirCurso(cursoId)
        );


    document
        .getElementById("voltarAula")
        ?.addEventListener(
            "click",
            () => abrirCurso(cursoId)
        );


    document
        .querySelectorAll("[data-opcao]")
        .forEach(botao => {

            botao.addEventListener(
                "click",
                () => {

                    responderExercicio(
                        cursoId,
                        numero,
                        Number(
                            botao.dataset.opcao
                        )
                    );

                }
            );

        });


    if (concluida) {

        mostrarAulaConcluida(
            cursoId,
            numero
        );

    }
}


/* =========================================================
   RESPONDER EXERCÍCIO
========================================================= */

function responderExercicio(
    cursoId,
    numero,
    resposta
) {

    const curso =
        cursos[cursoId];

    const aula =
        curso.aulas[numero];

    const aulaId =
        `${cursoId}-${numero}`;

    const feedback =
        document.getElementById(
            "exerciseFeedback"
        );

    const botoes =
        document.querySelectorAll(
            "[data-opcao]"
        );


    if (resposta === aula.correta) {

        botoes.forEach(
            botao => {

                botao.disabled = true;

                const index =
                    Number(
                        botao.dataset.opcao
                    );

                if (
                    index === aula.correta
                ) {
                    botao.classList.add(
                        "correct"
                    );
                }

            }
        );


        if (!aulaConcluida(aulaId)) {

            progresso[aulaId] = true;

            xp += 20;

            salvarDados();

        }


        feedback.className =
            "exercise-feedback show success";

        feedback.innerHTML = `
            <strong>🎉 Resposta correta!</strong><br>
            ${aula.resposta}
            <br><br>
            Você ganhou <strong>+20 XP</strong>.
        `;


        const proxima =
            document.getElementById(
                "proximaAula"
            );

        if (proxima) {

            proxima.style.display =
                "block";

            proxima.onclick = () => {

                if (
                    numero + 1 <
                    curso.aulas.length
                ) {

                    abrirAula(
                        cursoId,
                        numero + 1
                    );

                } else {

                    abrirCurso(cursoId);

                }

            };

        }

    } else {

        const botao =
            document.querySelector(
                `[data-opcao="${resposta}"]`
            );

        if (botao) {

            botao.classList.add(
                "wrong"
            );

            setTimeout(
                () => {
                    botao.classList.remove(
                        "wrong"
                    );
                },
                700
            );

        }


        feedback.className =
            "exercise-feedback show error";

        feedback.innerHTML = `
            ❌ Ainda não.
            Tente novamente!
        `;
    }
}


/* =========================================================
   MOSTRAR AULA JÁ CONCLUÍDA
========================================================= */

function mostrarAulaConcluida(
    cursoId,
    numero
) {

    const curso =
        cursos[cursoId];

    const aula =
        curso.aulas[numero];

    const feedback =
        document.getElementById(
            "exerciseFeedback"
        );

    const botoes =
        document.querySelectorAll(
            "[data-opcao]"
        );


    botoes.forEach(
        botao => {

            botao.disabled = true;

            const index =
                Number(
                    botao.dataset.opcao
                );

            if (
                index === aula.correta
            ) {

                botao.classList.add(
                    "correct"
                );

            }

        }
    );


    feedback.className =
        "exercise-feedback show success";

    feedback.innerHTML = `
        ✓ Você já concluiu esta aula.
        <br>
        Pode revisar o conteúdo ou continuar.
    `;


    const proxima =
        document.getElementById(
            "proximaAula"
        );

    if (proxima) {

        proxima.style.display =
            "block";

        proxima.textContent =
            numero + 1 <
            curso.aulas.length
                ? "Próxima aula →"
                : "Voltar para o curso →";

        proxima.onclick = () => {

            if (
                numero + 1 <
                curso.aulas.length
            ) {

                abrirAula(
                    cursoId,
                    numero + 1
                );

            } else {

                abrirCurso(cursoId);

            }

        };

    }
}


/* =========================================================
   TUTOR IA
========================================================= */

function telaIA() {

    ativarMenu("Tutor IA");

    app.innerHTML = `

        <div class="topbar">

            <div class="greeting">

                <small>
                    DevStart
                </small>

                <h1>
                    Tutor IA 🤖
                </h1>

                <p>
                    Tire suas dúvidas sobre programação.
                </p>

            </div>

        </div>


        <div class="ai-chat">

            <div class="ai-header">

                <div class="ai-header-icon">
                    🤖
                </div>

                <div class="ai-header-info">

                    <h2>
                        Tutor IA
                    </h2>

                    <p>
                        Seu assistente de programação
                    </p>

                </div>

            </div>


            <div
                class="chat-messages"
                id="chatMessages"
            >

                <div class="ai-message">

                    Olá! 👋

                    <br><br>

                    Sou o Tutor IA do DevStart.

                    <br><br>

                    Posso ajudar você com
                    HTML, CSS, JavaScript
                    e programação.

                </div>

            </div>


            <div class="chat-input">

                <form
                    class="chat-form"
                    id="chatForm"
                >

                    <input
                        type="text"
                        id="chatInput"
                        placeholder="Digite sua dúvida..."
                        autocomplete="off"
                        required
                    >

                    <button type="submit">
                        <i class="fa-solid fa-paper-plane"></i>
                        Enviar
                    </button>

                </form>

            </div>

        </div>

    `;


    document
        .getElementById("chatForm")
        ?.addEventListener(
            "submit",
            enviarPerguntaIA
        );
}


/* =========================================================
   CONECTAR COM BACKEND
========================================================= */

async function enviarPerguntaIA(event) {

    event.preventDefault();

    const input =
        document.getElementById(
            "chatInput"
        );

    const messages =
        document.getElementById(
            "chatMessages"
        );

    const pergunta =
        input.value.trim();

    if (!pergunta) {
        return;
    }


    messages.innerHTML += `
        <div class="user-message">
            ${escaparHTML(pergunta)}
        </div>
    `;

    input.value = "";


    const carregando =
        document.createElement("div");

    carregando.className =
        "ai-message";

    carregando.id =
        "mensagemCarregando";

    carregando.textContent =
        "Pensando... 🤔";

    messages.appendChild(
        carregando
    );


    messages.scrollTop =
        messages.scrollHeight;


    try {

        const resposta =
            await fetch(
                "http://127.0.0.1:8000/api/v1/chat",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        message: pergunta
                    })
                }
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro HTTP " +
                resposta.status
            );

        }


        const dados =
            await resposta.json();


        carregando.remove();


        const texto =
            dados.response ||
            dados.message ||
            dados.answer ||
            dados.reply ||
            "O backend respondeu, mas não encontrei o campo da resposta.";


        messages.innerHTML += `
            <div class="ai-message">
                ${escaparHTML(String(texto))}
            </div>
        `;


    } catch (erro) {

        carregando.remove();

        messages.innerHTML += `
            <div class="ai-message">

                ❌ Não consegui conectar ao backend.

                <br><br>

                Verifique se seu amigo
                está executando o servidor em:

                <br><br>

                <strong>
                    http://127.0.0.1:8000
                </strong>

                <br><br>

                Erro:
                ${escaparHTML(erro.message)}

            </div>
        `;

    }


    messages.scrollTop =
        messages.scrollHeight;
}


/* =========================================================
   EDITOR
========================================================= */

function telaEditor() {

    ativarMenu("Editor");

    app.innerHTML = `

        <div class="topbar">

            <div class="greeting">

                <small>
                    DevStart
                </small>

                <h1>
                    Editor de código 💻
                </h1>

                <p>
                    Escreva HTML e veja o resultado.
                </p>

            </div>

        </div>


        <div class="editor">

            <textarea id="editorCodigo"><!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            padding: 50px;
        }

        h1 {
            color: #ff5722;
        }
    </style>
</head>

<body>

    <h1>
        Olá, DevStart!
    </h1>

    <p>
        Meu primeiro projeto.
    </p>

</body>

</html></textarea>


            <button
                class="primary-button"
                id="executarEditor"
            >
                ▶ Executar código
            </button>


            <iframe
                id="resultadoEditor"
                title="Resultado"
            ></iframe>

        </div>

    `;


    document
        .getElementById(
            "executarEditor"
        )
        ?.addEventListener(
            "click",
            executarCodigo
        );
}


/* =========================================================
   EXECUTAR EDITOR
========================================================= */

function executarCodigo() {

    const codigo =
        document.getElementById(
            "editorCodigo"
        ).value;

    const iframe =
        document.getElementById(
            "resultadoEditor"
        );

    iframe.srcdoc =
        codigo;
}


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

function telaConfiguracoes() {

    ativarMenu("Configurações");

    const email =
        localStorage.getItem(
            STORAGE.email
        ) || "Não informado";


    app.innerHTML = `

        <div class="topbar">

            <div class="greeting">

                <small>
                    DevStart
                </small>

                <h1>
                    Configurações ⚙️
                </h1>

                <p>
                    Gerencie seu perfil.
                </p>

            </div>

        </div>


        <div class="settings-card">

            <div class="settings-row">

                <div>

                    <strong>
                        Perfil
                    </strong>

                    <span>
                        ${escaparHTML(
                            nomeUsuario()
                        )}
                    </span>

                </div>

            </div>


            <div class="settings-row">

                <div>

                    <strong>
                        E-mail
                    </strong>

                    <span>
                        ${escaparHTML(email)}
                    </span>

                </div>

            </div>


            <div class="settings-row">

                <div>

                    <strong>
                        XP
                    </strong>

                    <span>
                        ${xp} XP
                    </span>

                </div>

            </div>


            <div class="settings-row">

                <div>

                    <strong>
                        Progresso
                    </strong>

                    <span>
                        ${aulasConcluidas()}
                        de ${totalAulas()}
                        aulas concluídas
                    </span>

                </div>

            </div>


            <div class="settings-row">

                <div>

                    <strong>
                        Reiniciar progresso
                    </strong>

                    <span>
                        Apaga XP e aulas concluídas.
                    </span>

                </div>

                <button
                    class="danger-button"
                    id="resetarProgresso"
                >
                    Resetar
                </button>

            </div>


            <div class="settings-row">

                <div>

                    <strong>
                        Sair
                    </strong>

                    <span>
                        Encerrar sua sessão.
                    </span>

                </div>

                <button
                    class="secondary-button"
                    id="logout"
                >
                    Sair
                </button>

            </div>

        </div>

    `;


    document
        .getElementById(
            "resetarProgresso"
        )
        ?.addEventListener(
            "click",
            resetarProgresso
        );


    document
        .getElementById(
            "logout"
        )
        ?.addEventListener(
            "click",
            logout
        );
}


/* =========================================================
   RESET
========================================================= */

function resetarProgresso() {

    const confirmar =
        confirm(
            "Tem certeza que deseja apagar todo o progresso?"
        );

    if (!confirmar) {
        return;
    }

    xp = 0;

    progresso = {};

    salvarDados();

    telaInicio();
}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    localStorage.removeItem(
        STORAGE.logged
    );

    location.reload();
}


/* =========================================================
   LOGIN
========================================================= */

function configurarLogin() {

    const form =
        document.getElementById(
            "loginForm"
        );

    const loginScreen =
        document.getElementById(
            "loginScreen"
        );


    if (!form) {
        return;
    }


    const logado =
        localStorage.getItem(
            STORAGE.logged
        );


    if (logado === "true") {

        if (loginScreen) {
            loginScreen.style.display =
                "none";
        }

    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const password =
                document.getElementById(
                    "password"
                ).value;


            if (
                !email ||
                !password
            ) {

                alert(
                    "Preencha seu e-mail e senha."
                );

                return;

            }


            const nome =
                email
                    .split("@")[0]
                    .replace(/[0-9]/g, "")
                    .trim();


            localStorage.setItem(
                STORAGE.logged,
                "true"
            );

            localStorage.setItem(
                STORAGE.email,
                email
            );

            localStorage.setItem(
                STORAGE.name,
                nome || "Programador"
            );


            if (loginScreen) {

                loginScreen.style.display =
                    "none";

            }


            atualizarUsuario();

            telaInicio();

        }
    );


    const criar =
        document.getElementById(
            "createAccount"
        );


    criar?.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            alert(
                "O cadastro será conectado ao backend posteriormente."
            );

        }
    );
}


/* =========================================================
   ESCAPAR HTML
========================================================= */

function escaparHTML(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   MENU
========================================================= */

function configurarMenu() {

    document
        .querySelectorAll(".menu-item")
        .forEach(item => {

            const texto =
                item.textContent
                    .trim()
                    .toLowerCase();


            item.addEventListener(
                "click",
                function() {

                    if (
                        texto === "início"
                    ) {

                        telaInicio();

                    } else if (
                        texto === "cursos"
                    ) {

                        telaCursos();

                    } else if (
                        texto === "tutor ia"
                    ) {

                        telaIA();

                    } else if (
                        texto === "editor"
                    ) {

                        telaEditor();

                    } else if (
                        texto === "configurações"
                    ) {

                        telaConfiguracoes();

                    }

                }
            );

        });
}


/* =========================================================
   CURSOS - EVENTOS
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const botao =
            event.target.closest(
                "[data-curso]"
            );

        if (!botao) {
            return;
        }

        abrirCurso(
            botao.dataset.curso
        );

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function iniciarDevStart() {

    configurarLogin();

    configurarMenu();

    atualizarUsuario();

    telaInicio();

}


iniciarDevStart();